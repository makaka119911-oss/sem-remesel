/* Плавность — песочница: переключатели приёмов.
   Важно: часть предпросмотров (в т.ч. встроенный в приложение) замораживает
   анимационную ленту времени — переходы не тикают, requestAnimationFrame молчит.
   Поэтому здесь всё построено так, чтобы страница выглядела правильно и в
   замороженном виде: таймеры + аварийное «доиграть до конца». */
(function () {
  'use strict';

  var media = document.getElementById('heroMedia');
  var heroInner = document.querySelector('.hero__inner');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));

  /* ---------- показать/сбросить: с очисткой инлайн-оверрайдов ---------- */
  function reveal(el) {
    el.style.transition = '';
    el.style.opacity = '';
    el.style.transform = '';
    el.classList.add('is-in');
  }

  function reset(el) {
    el.classList.remove('is-in');
    el.style.transition = 'none';
    el.style.opacity = '0';
    el.style.transform = '';
    void el.offsetHeight;   // сброс кадра
    el.style.transition = '';
    el.style.opacity = '';
  }

  /* Аварийная страховка: если через 2 с элемент всё ещё невидим
     (замороженная лента времени), прибиваем конечное состояние мгновенно. */
  function safety() {
    setTimeout(function () {
      var probe = cards[0];
      var frozen = probe && parseFloat(getComputedStyle(probe).opacity) < 0.85;
      if (!frozen) return;
      cards.forEach(function (c) {
        c.style.transition = 'none';
        c.style.opacity = '1';
        c.style.transform = 'none';
      });
      for (var i = 0; i < heroInner.children.length; i++) {
        heroInner.children[i].style.transition = 'none';
        heroInner.children[i].style.opacity = '1';
        heroInner.children[i].style.transform = 'none';
      }
      heroInner.classList.add('is-in');
    }, 2000);
  }

  /* ---------- 01: дрейф фона ---------- */
  function setDrift(sec) {
    media.removeAttribute('data-drift');
    media.style.animationName = '';
    media.style.animationDuration = '';
    if (sec === '0') {
      media.style.animation = 'none';
      return;
    }
    media.style.animation = '';
    media.setAttribute('data-drift', sec);
    media.style.animationName = 'none';
    void media.offsetWidth;
    media.style.animationName = '';
  }

  function replayHero() {
    [].slice.call(heroInner.children).forEach(function (el) {
      el.style.transition = '';
      el.style.opacity = '';
      el.style.transform = '';
    });
    heroInner.classList.remove('is-in');
    void heroInner.offsetWidth;
    setTimeout(function () { heroInner.classList.add('is-in'); }, 60);
    safety();
  }

  /* ---------- 03: появление карточек ---------- */
  var MODES = {
    syntx: { y: '64px', d: '1.15s', e: 'cubic-bezier(.25,.46,.45,.94)' },
    our:   { y: '28px', d: '1.1s',  e: 'cubic-bezier(.16,1,.3,1)' },
    sharp: { y: '64px', d: '.3s',   e: 'linear' }
  };

  function applyMode(name) {
    var m = MODES[name] || MODES.syntx;
    cards.forEach(function (c) {
      c.style.setProperty('--rv-y', m.y);
      c.style.setProperty('--rv-d', m.d);
      c.style.setProperty('--rv-e', m.e);
    });
  }

  function replayCards() {
    cards.forEach(reset);
    void cards[0].offsetHeight;
    setTimeout(function () {
      cards.forEach(function (c) { c.classList.add('is-in'); });
    }, 60);
    safety();
  }

  /* ---------- 04: отклик кнопки ---------- */
  var pill = document.getElementById('pill');
  var pressHint = document.getElementById('pressHint');
  var pressMode = 'shine';
  var HINTS = {
    shine: 'Нажми на капсулу — пробежит блик за 600 мс и всё.',
    pulse: 'Кольцо расходится само, каждые 2 секунды. Зовёт нажать.',
    ours: 'Наш текущий: блик сам пробегает раз в 5,4 секунды, ты на него не влияешь.'
  };

  function setPress(name) {
    pressMode = name;
    pressHint.textContent = HINTS[name];
    pill.classList.remove('pill--shine', 'pill--pulse', 'pill--ours', 'is-fire');
    if (name === 'pulse') pill.classList.add('pill--pulse');
    else if (name === 'ours') pill.classList.add('pill--ours');
    else pill.classList.add('pill--shine');
  }

  pill.addEventListener('click', function (e) {
    e.preventDefault();
    if (pressMode !== 'shine') return;
    pill.classList.remove('is-fire');
    void pill.offsetWidth;
    pill.classList.add('is-fire');
  });

  /* ---------- переключатели ---------- */
  function wire(group, attr, fn) {
    var seg = document.querySelector('.seg[data-group="' + group + '"]');
    if (!seg) return;
    seg.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('.seg__b') : null;
      if (!b || !seg.contains(b)) return;
      [].slice.call(seg.querySelectorAll('.seg__b')).forEach(function (x) {
        x.classList.remove('is-on');
      });
      b.classList.add('is-on');
      fn(b.getAttribute(attr));
    });
  }

  wire('drift', 'data-drift', setDrift);
  wire('reveal', 'data-rv-mode', function (v) { applyMode(v); replayCards(); });
  wire('press', 'data-press', setPress);

  document.getElementById('replayRv').addEventListener('click', replayCards);
  document.getElementById('replayHero').addEventListener('click', replayHero);

  /* ---------- первый показ: по скроллу, без IntersectionObserver ---------- */
  function inView(el) {
    var r = el.getBoundingClientRect();
    return r.top < (window.innerHeight || 800) * 0.88 && r.bottom > 0;
  }

  function checkCards() {
    cards.forEach(function (c) {
      if (!c.classList.contains('is-in') && inView(c)) c.classList.add('is-in');
    });
  }

  window.addEventListener('scroll', checkCards, { passive: true });
  window.addEventListener('resize', checkCards);
  setInterval(checkCards, 500);

  setTimeout(function () {
    heroInner.classList.add('is-in');
    checkCards();
    safety();
  }, 60);
})();
