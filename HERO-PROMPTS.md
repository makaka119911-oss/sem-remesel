# 🎬 Промпты для Leonardo — герой «Семь ремёсел»

Палитра: тёмный васильково-синий фон `#1b2544`, акцент васильковый `#5B8DEF`, мягкий `#a9c6f7`.
Цель: кинематографичный натюрморт, **внизу спокойная тёмная зона** под текст и кнопку, **без горизонтальных полос и жёстких границ**.

---

## 📐 РАЗМЕРЫ (важно!)

| Где | Соотношение | Leonardo preset | Итоговый размер | Роль |
|---|---|---|---|---|
| **Телефон** (герой) | **9:16** | `9:16` (портрет) | **1080 × 1920** (Leonardo: 832×1472) | `hero-mobile.jpg` |
| **Десктоп** (герой) | **16:9** | `16:9` (пейзаж) | **2048 × 1152** (Leonardo: 1472×832) | `hero.jpg` |
| (запас) портрет мастера | 4:5 | `4:5` | 1000 × 1250 | `master.jpg` |
| (запас) карточки курсов | 3:2 | `3:2` | 1200 × 800 | `01…07.jpg` |

> Совет: генери в максимальном разрешении Leonardo, потом при желании — Upscale.

---

## 🖼 ПРОМПТ 1 — главный (телефон, 9:16)

**RU:** Кинематографичный натюрморт, вертикально. Тёмный васильково-синий фон, глубокие тени, мягкий контровой свет. Предметы: восковая свеча с огнём, пучок сушёной лаванды, стеклянные колбы и колпак, друза кристаллов, кусок штукатурки/гипса, льняная ткань, моток джута, стабилизированный мох. Верхние две трети — фактура и предметы, нижняя треть — тёмная, спокойная, слегка размытая пустая зона **под текст и кнопку**. Плавный вертикальный градиент, без горизонтальных полос и жёстких границ. Малая глубина резкости, без текста и водяных знаков, детализация 8k.

**EN:** Cinematic still life, vertical 9:16. Deep navy-cornflower blue palette, moody low-key lighting, soft rim light. Objects: wax candle with flame, dried lavender bunch, glass cloche and apothecary bottles, crystal cluster, rough plaster block, natural linen, coil of jute rope, stabilized moss. Upper two-thirds: rich texture and objects. Lower third: dark, calm, softly blurred **empty space for text overlay and button**. Smooth vertical gradient, **no horizontal bands, no hard edges**. Shallow depth of field, no text, no watermark, ultra detailed, 8k.

---

## 🖼 ПРОМПТ 2 — главный (десктоп, 16:9)

**EN:** Cinematic still life, horizontal 16:9. Deep navy-cornflower blue palette, moody low-key lighting, soft rim light. Objects arranged on the right side: wax candle, dried lavender, glass cloche, apothecary bottles, crystal cluster, plaster block, linen cloth, jute rope, stabilized moss. **Left side and bottom stay dark and calm — negative space for headline and button.** Seamless soft gradient, no horizontal bands, no hard edges, no text, no watermark, ultra detailed, 8k.

---

## 🖼 ПРОМПТ 3 — вариант «руки мастера» (запас)

**EN:** Cinematic close-up of a woman's hands working on a handcraft: making a moss-and-wood art piece, soft warm rim light against a dark navy-cornflower background. Hands slightly out of frame bottom, calm dark space at the bottom for text. Shallow depth of field, film grain, no text, no watermark, 8k.

---

## 🖼 ПРОМПТ 1-БИС — «под текст» (телефон 9:16) — v2, пустая зона 45%

**RU:** Кинематографичный натюрморт, вертикально 9:16. Тёмный васильково-синий фон, глубокие тени, мягкий контровой свет. Предметы — восковая свеча с огнём, пучок сушёной лаванды, стеклянные колбы и колпак, друза кристаллов, кусок гипса, льняная ткань, моток джута, стабилизированный мох — собраны **только в верхней половине кадра**. **Нижняя половина (45–50%) — абсолютно пустая, ровная, тёмная и слегка размытая**: глубокая тень, мягкий градиент в цвет фона `#1b2544`. Никаких предметов, ткани, мха и деталей внизу. Предметы плавно растворяются в темноту, без горизонтальных полос и жёстких границ. Малая глубина резкости, без текста и водяных знаков, 8k.

**EN:** Cinematic still life, vertical 9:16. Deep navy-cornflower palette, moody low-key light. Objects — wax candle with flame, dried lavender, glass cloche and bottles, crystal cluster, plaster block, linen, jute rope, stabilized moss — placed **only in the upper half of the frame**. **Lower half (45–50%) is completely empty, flat, dark and softly blurred**: deep shadow fading into background `#1b2544`. No objects, cloth or moss in the bottom. Objects dissolve smoothly into darkness, **no horizontal bands, no hard edges**. Shallow depth of field, no text, no watermark, 8k.

## 🖼 ПРОМПТ 2-БИС — «под текст» (десктоп 16:9) — v2

**EN:** Cinematic still life, horizontal 16:9. Deep navy-cornflower palette, moody low-key light. Objects clustered in the **upper 55% and toward the right side**: wax candle, dried lavender, glass cloche, apothecary bottles, crystal cluster, plaster block, linen, jute rope, stabilized moss. The **lower 45% and the left side stay empty, flat and dark** — clean negative space for a headline block. Soft dissolve into background `#1b2544`, no horizontal bands, no hard edges, no text, no watermark, 8k.

---

## ⛔ NEGATIVE PROMPT (для всех)

`text, letters, words, watermark, logo, signature, purple magenta tones, neon, oversaturated, plastic skin, blurry, horizontal stripes, hard edges, banding, low contrast, cluttered bottom, crowded composition`

---

## ✅ Чек-лист перед вставкой
1. Внизу — **спокойная тёмная зона** (туда ляжет кнопка-капсула и ничего не спорит с ней).
2. Нет резких горизонтальных полос и «ступенек».
3. Палитра тянет к **синему**, без ухода в маджента/фиолет.
4. Нет текста и знаков на картинке.
5. Соотношения: **9:16** (телефон) и **16:9** (десктоп).
