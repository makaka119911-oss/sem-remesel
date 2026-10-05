/* ============================================================
   v3 — скролл-режиссура (чистый JS, без библиотек)
   прогресс · курсор · параллакс героя · пиннинг + горизонтальная галерея
   появление через маски · параллакс портрета
   ============================================================ */
(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = () => innerWidth <= 900;
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

  /* ---- 1. прогресс ---- */
  const prog = document.getElementById('progress');
  const setProg = () => {
    if (!prog) return;
    const h = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
  };

  /* ---- 2. курсор ---- */
  const cur = document.getElementById('cursor');
  if (cur && !reduce && !isMobile()) {
    let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
    addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    document.querySelectorAll('a, .slide, .pill').forEach(el => {
      el.addEventListener('pointerenter', () => { cur.style.width = '46px'; cur.style.height = '46px'; cur.style.background = 'rgba(244,239,246,.14)'; });
      el.addEventListener('pointerleave', () => { cur.style.width = '22px'; cur.style.height = '22px'; cur.style.background = 'transparent'; });
    });
    (function loop() { cx += (tx - cx) * .16; cy += (ty - cy) * .16;
      cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
  }

  /* ---- 3. пиннинг галереи ---- */
  const gallery = document.querySelector('.gallery');
  const track = document.getElementById('track');
  const slides = [...document.querySelectorAll('.slide')];
  const heroMedia = document.getElementById('heroMedia');
  const bar = document.querySelector('.bar');
  const dotsBox = document.getElementById('dots');
  let dots = [], dotCenters = [], pill = null, pillW = 22;
  if (dotsBox) {
    slides.forEach((slide, i) => {
      const d = document.createElement('i');
      d.setAttribute('role', 'button');
      d.setAttribute('tabindex', '0');
      d.setAttribute('aria-label', 'Курс ' + (i + 1));
      const go = () => {
        if (isMobile()) {
          slide.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
        } else if (gallery) {
          const h = gallery.offsetHeight - innerHeight;
          if (h > 0) scrollTo({ top: gallery.offsetTop + h * (i / Math.max(slides.length - 1, 1)), behavior: reduce ? 'auto' : 'smooth' });
        }
      };
      d.addEventListener('click', go);
      d.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
      dotsBox.appendChild(d);
      dots.push(d);
    });
    // «пилюля» — плавно скользит между точками, вместо жёсткого переключения
    pill = document.createElement('span');
    pill.className = 'dots__pill';
    dotsBox.appendChild(pill);
  }

  function layoutDots() {
    if (!dotsBox || !dots.length) return;
    const box = dotsBox.getBoundingClientRect();
    dotCenters = dots.map(d => {
      const r = d.getBoundingClientRect();
      return r.left - box.left + r.width / 2;
    });
    pillW = pill.getBoundingClientRect().width || 22;
  }

  // f — дробный номер курса: пилюля едет вслед за пальцем, а не прыгает по шагам
  function setDots(f) {
    if (!dots.length || !pill) return;
    const n = dots.length - 1;
    const v = clamp(f, 0, n);
    const i0 = Math.floor(v), i1 = Math.min(i0 + 1, n), t = v - i0;
    if (!dotCenters.length) layoutDots();
    const x = dotCenters[i0] + (dotCenters[i1] - dotCenters[i0]) * t;
    pill.style.transform = `translateX(${(x - pillW / 2).toFixed(2)}px)`;
    const near = Math.round(v);
    dots.forEach((d, k) => d.classList.toggle('on', k === near));
  }
  const masterPhoto = document.querySelector('.master__photo');

  function measure() {
    if (!gallery || !track) return;
    if (isMobile()) { gallery.style.height = ''; return; }
    const extra = 40;
    const SPEED = 0.72;   // < 1 — едет быстрее; > 1 — плавнее/дольше
    const dist = Math.max(track.scrollWidth - innerWidth + extra, 0);
    gallery.style.height = (innerHeight + dist * SPEED) + 'px';
  }

  function frame() {
    setProg();

    // точки галереи — дробный номер, чтобы пилюля ехала за пальцем плавно
    if (dots.length) {
      let f = 0;
      if (isMobile() && track) {
        const p2 = track.scrollWidth > track.clientWidth ? track.scrollLeft / (track.scrollWidth - track.clientWidth) : 0;
        f = p2 * (dots.length - 1);
      } else if (gallery) {
        const h2 = gallery.offsetHeight - innerHeight;
        const p2 = h2 > 0 ? clamp((scrollY - gallery.offsetTop) / h2, 0, 1) : 0;
        f = p2 * (dots.length - 1);
      }
      setDots(f);
    }

    // шапка: при скролле становится плотной, чтобы не налезать на текст
    if (bar) bar.classList.toggle('is-solid', scrollY > 40);

    // параллакс героя
    if (heroMedia && !reduce) {
      const y = clamp(scrollY, 0, innerHeight);
      heroMedia.style.transform = `translate3d(0, ${y * .28}px, 0) scale(${1 + y / innerHeight * .06})`;
    }

    // горизонтальная галерея
    if (gallery && track && !isMobile() && !reduce) {
      const h = gallery.offsetHeight - innerHeight;
      const p = h > 0 ? clamp((scrollY - gallery.offsetTop) / h, 0, 1) : 0;
      const dist = Math.max(track.scrollWidth - innerWidth + 40, 0);
      track.style.transform = `translate3d(${-p * dist}px,0,0)`;
      // ближние к центру — в фокусе, крайние — тише (локомотивовский приём)
      const cx = innerWidth / 2;
      slides.forEach((el) => {
        const r = el.getBoundingClientRect();
        const d = Math.abs((r.left + r.width / 2) - cx) / cx;
        const k = clamp(1 - d * 0.55, 0.62, 1);
        el.style.opacity = k.toFixed(3);
        el.style.filter = `saturate(${(0.75 + k * 0.3).toFixed(2)})`;
      });
    }

    // параллакс портрета
    if (masterPhoto && !reduce && !isMobile()) {
      const r = masterPhoto.getBoundingClientRect();
      const mid = r.top + r.height / 2 - innerHeight / 2;
      masterPhoto.style.transform = `translate3d(0,${clamp(-mid * .06, -26, 26)}px,0) scale(1.04)`;
    }
  }

  /* ---- 4. появление ---- */
  const nodes = document.querySelectorAll('[data-rv], .hero');
  const io = new IntersectionObserver(es => {
    es.forEach((e, i) => {
      if (!e.isIntersecting) return;
      setTimeout(() => e.target.classList.add('is-in'), Math.min(i, 5) * 80);
      io.unobserve(e.target);
    });
  }, { threshold: .14, rootMargin: '0px 0px -6% 0px' });
  nodes.forEach(n => io.observe(n));
  if (reduce) nodes.forEach(n => n.classList.add('is-in'));

  /* ---- запуск ---- */
  let raf = null;
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { frame(); raf = null; }); };
  addEventListener('scroll', onScroll, { passive: true });
  // на телефоне галерея листается пальцем по горизонтали — слушаем и её скролл,
  // иначе точки не двигались бы во время свайпа
  if (track) track.addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { measure(); layoutDots(); onScroll(); });
  measure(); layoutDots(); frame();

  // шрифты/картинки догрузились — пересчитать
  addEventListener('load', () => { measure(); layoutDots(); onScroll(); });
  setTimeout(() => { measure(); layoutDots(); onScroll(); }, 600);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { layoutDots(); onScroll(); });
})();
