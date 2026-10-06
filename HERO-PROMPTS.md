# 🎬 Промпты для Leonardo — герой «Семь ремёсел»

Палитра: тёмный васильково-синий фон `#1b2544`, акцент васильковый `#5B8DEF`, мягкий `#a9c6f7`.
Цель: кинематографичный натюрморт, **внизу спокойная тёмная зона** под текст и кнопку, **без горизонтальных полос и жёстких границ**.

---

## 🔘 ПРОМПТ — КНОПКА v2 (сочная, «в виде чего-то»)

> Брат: «чтоб сочная была, красивая, мож в виде чего-то, чтоб сочеталось с главной».
> Размер: Leonardo preset **16:9** (если есть 21:9 — бери его). Внутри **никакого текста** —
> надпись накладываем кодом. Фон строго однородный — по нему вырезаю в прозрачность.

### 1 ⭐ ОСНОВНОЙ — сочная желейная капсула (под белый текст)
```
A single glossy jelly capsule button, UI element, centered, filling about 88% of the frame width, rounded pill shape with fully rounded ends, aspect ratio about 4:1. Rich saturated lavender-violet translucent gel, deep periwinkle blue shading in the lower half, juicy candy-like volume, thick glossy highlight across the top, bright white rim light, a few tiny dew drops and one soft specular streak. The center of the capsule is clean and smooth: empty space for a label. Soft violet drop shadow and a gentle lilac glow around it. Background: flat, uniform, plain light lilac, no objects, no texture. Product render, studio light, crisp edges, 3D UI asset, straight front view, perfectly centered and symmetrical, ultra detailed, 8k. No text, no letters, no numbers, no icon, no logo, no watermark.
```
Negative:
```
text, letters, words, numbers, icon, arrow, logo, watermark, signature, hands, fingers, phone, screen, mockup, perspective, tilted, rotated, cropped, multiple buttons, extra objects, busy background, texture, noise, dark background, black, dull, washed out, desaturated, muddy, blurry, low contrast, flat
```

### 2 — стеклянная капсула с лавандой внутри (декоративная, центр пустой)
```
A single transparent glass capsule button, UI element, centered, about 88% of the frame width, rounded pill shape, aspect ratio about 4:1. Clear smooth glass filled with a soft lavender-violet liquid glow, two small sprigs of dried lavender fixed inside near the two rounded ends only, the middle third of the capsule completely clear and empty for a label. Bright white rim light, delicate specular highlights, soft violet drop shadow, gentle lilac glow around. Background: flat, uniform, plain light lilac, no objects, no texture. Product render, studio light, crisp sharp edges, 3D UI asset, straight front view, perfectly centered and symmetrical, ultra detailed, 8k. No text, no letters, no numbers, no icon, no logo, no watermark.
```

### 3 — кнопка-голыш из лавандового мыла (матовая, «ручная работа»)
```
A single smooth oval bar of handmade lavender soap used as a button, UI element, centered, about 88% of the frame width, very rounded pill shape, aspect ratio about 4:1. Matte soft lavender-violet surface with a subtle silky sheen, a few tiny air bubbles and a hint of dried lavender speckle at the very edges, the central area clean and smooth for a label. Soft short drop shadow, gentle lilac glow around. Background: flat, uniform, plain light lilac, no objects, no texture. Product render, studio light, crisp edges, 3D UI asset, straight front view, perfectly centered and symmetrical, ultra detailed, 8k. No text, no letters, no numbers, no icon, no logo, no watermark.
```

**Моя ставка — №1.** Она «сочная» именно так, как ты просишь, и при этом центр чистый: белая надпись ляжет без проблем. №2 самая нарядная, но лаванда по краям съест место под текст — придётся делать кнопку шире. №3 самая «ручная», но матовая кнопка на светлом фоне будет самой незаметной из трёх.

---

## 🔘 ПРОМПТ — КНОПКА (стеклянная капсула под светлую тему)

> Брат просит сгенерить кнопку в Leonardo. Важно: **капсулу просим ПУСТУЮ** — буквы генератор
> пишет криво; надпись «Смотреть курсы» накладываем кодом поверх.
> **Размер:** Leonardo preset **16:9** (если есть 21:9 — бери его, капсула выйдет длиннее и ровнее).
> На выходе ~1472×832. Нужна капсула ~4:1, итог на сайте — 217×56 CSS (×3 для retina = 651×168).

**EN:**
```
A single horizontal glass capsule button, UI element, centered, occupying about 88% of the frame width. Rounded pill shape with fully rounded ends, aspect ratio about 4:1. Palette: pale lavender, soft periwinkle and milky white. Translucent frosted glass with a bright white rim light along the top edge, soft inner glow, subtle violet inner shadow at the bottom, tiny specular highlights. Gentle drop shadow beneath, soft lilac glow around it. Completely EMPTY inside: absolutely no text, no letters, no numbers, no icons, no symbols, no logo. Background: flat, clean, uniform pale lilac, no objects, no texture. Product render, studio lighting, crisp sharp edges, 3D UI asset, straight front view, perfectly centered, symmetrical, ultra detailed, 8k.
```

**RU:**
```
Одна горизонтальная стеклянная капсула-кнопка, элемент интерфейса, по центру кадра, занимает около 88% ширины. Форма пилюли с полностью скруглёнными торцами, соотношение примерно 4:1. Палитра: бледная лаванда, мягкий васильково-голубой и молочно-белый. Полупрозрачное матовое стекло, яркая белая контурная подсветка по верхней кромке, мягкое внутреннее свечение, лёгкая сиреневая тень внутри снизу, мелкие блики. Внизу мягкая падающая тень, вокруг — лиловое свечение. Внутри капсулы ПУСТО: никакого текста, букв, цифр, иконок, символов и логотипов. Фон — ровный, чистый, однородный бледно-лиловый, без предметов и фактуры. Продуктовый рендер, студийный свет, резкие края, 3D-элемент интерфейса, строго фронтальный вид, идеально по центру, симметрично, 8k.
```

**Negative:**
```
text, letters, words, numbers, icon, arrow, logo, watermark, signature, hands, fingers, phone, screen, mockup, perspective, tilted, rotated, cropped, multiple buttons, extra objects, busy background, texture, noise, dark background, black, navy, oversaturated, blurry, low contrast
```

---

## 🌸 ПРОМПТ v6 (САМЫЙ АКТУАЛЬНЫЙ) — васильки + «древо рода» со мхом

> Задача брата: главная в той же лавандовой палитре, но **больше васильков** (их синева сядет
> в тон кнопке-капсуле, у неё внутри синева `#313abe`), плюс **древо рода со стабилизированным
> мхом** — перекличка с фото мастера. Низ кадра — пустой, чуть холоднее книзу, чтобы кнопка «села».
> Внутри никакого текста. Фон ровный — по нему при необходимости режу в прозрачность.

**EN (телефон, 9:16) — preset 9:16:**
```
Cinematic bright still life photograph, vertical 9:16. Airy high-key lighting, soft diffused daylight, gentle haze. Palette: pale lavender and lilac with strong cornflower-blue accents and milky white. Centerpiece: a round handmade linen wall panel (panno) with a family tree laid out on it - the trunk and branches made of twisted jute twine and copper wire, generously covered with soft stabilised moss in fresh green, studded with violet amethyst beads, small polished stones and thin linen ribbons - the panel stands leaning at a slight angle against a rough plaster block. Around it: a generous bouquet of blue cornflowers mixed with dried lavender, a small blue glass apothecary bottle with a cork, a white lit pillar candle on a stone coaster, a clear glass bell jar, a pale moss sphere, a white quartz crystal cluster, washed linen cloth, a coil of jute rope. Objects clustered in the upper half and toward the sides, dissolving softly into a pale lilac background. The lower 45% is completely empty: smooth, pale, slightly blurred, tinted soft lilac-blue, clean negative space for a headline and a button. No dark shadows, no black areas. Shallow depth of field, delicate film grain, pastel colour grading, no text, no watermark, ultra detailed, 8k.
```

**RU:**
```
Кинематографичный светлый натюрморт, вертикально 9:16. Воздушный высокий ключ, мягкий рассеянный свет, лёгкая дымка. Палитра: бледная лаванда и сирень с сильными васильково-синими акцентами и молочно-белым. В центре — круглое ПАННО из льна ручной работы, на нём выложено древо рода: ствол и ветви из скрученного джутового шнура и медной проволоки, густо покрытые мягким стабилизированным мхом свежего зелёного цвета, с сиреневыми бусинами аметиста, мелкими отшлифованными камнями и тонкими льняными лентами; панно стоит, прислонённое под лёгким углом к гипсовому блоку. Вокруг: щедрый букет синих васильков вместе с сушёной лавандой, маленькая синяя стеклянная бутылочка с пробкой, белая зажжённая свеча-столбик на каменной подставке, стеклянный колпак, светлый шар мха, белая друза кварца, выстиранная льняная ткань, моток джутовой верёвки. Предметы собраны в верхней половине и по краям, мягко растворяясь в бледно-сиреневом фоне. Нижние 45% полностью пустые: ровные, светлые, слегка размытые, с лёгким сиренево-голубым оттенком — чистое место под заголовок и кнопку. Без тёмных теней и чёрных зон. Малая глубина резкости, лёгкое зерно, пастельная цветокоррекция, без текста и водяных знаков, 8k.
```

**Для десктопа (16:9)** — те же три замены, что и раньше:
`vertical 9:16` → `horizontal 16:9`, `upper half and toward the sides` → `upper half, weighted to the right`,
`The lower 45%` → `The lower 45% and the left side`.

**Negative:**
```
text, letters, words, watermark, logo, signature, dark background, deep navy, black, moody low-key, heavy shadows, purple neon, magenta, oversaturated, plastic, blurry, horizontal stripes, hard edges, banding, cluttered bottom, crowded composition, dried brown moss, dead plants
```
> `dried brown moss, dead plants` — иначе «стабилизированный мох» выйдет сухим и бурым, а нужен свежий зелёный.

---

## 🌟 ПРОМПТ v5 (САМЫЙ АКТУАЛЬНЫЙ) — светлый, ФИОЛЕТОВЕЕ, как `23110.jpg`

> Брат прислал `uploads/23110.jpg` — почти идеал: лаванда, синяя бутылочка, белая свеча, колпак,
> мох-шар, друза кварца, гипсовые блоки, льняная ткань, джут; низ кадра пустой.
> Просьба: **сгенерить чистую в Leonardo, чуть фиолетовее** (не перекрас).

**EN (телефон, 9:16) — Leonardo preset 9:16:**
```
Cinematic high-key still life photograph, vertical 9:16. Soft diffused window daylight, gentle atmospheric haze, airy pastel mood. Palette dominated by soft lilac, wisteria and dusty lavender-violet, with subtle periwinkle-blue accents and milky white. Objects: large bouquet of dried lavender tied with jute twine lying over pale washed linen cloth, small blue glass apothecary bottle with a cork, white lit pillar candle on a round stone coaster, clear glass bell jar (cloche) with lavender sprigs inside, textured pale blue-green moss sphere, white quartz crystal cluster, rough white plaster blocks, coil of jute rope, scattered lavender buds. Objects clustered in the upper half and toward the sides, dissolving softly into a pale lilac background. The lower 45% is completely empty: smooth, pale, slightly blurred, clean negative space for text overlay. No dark shadows, no black areas. Shallow depth of field, delicate film grain, pastel color grading, no text, no watermark, ultra detailed, 8k.
```

**RU:**
```
Кинематографичный светлый натюрморт, вертикально 9:16. Мягкий рассеянный свет из окна, лёгкая дымка, воздушное пастельное настроение. Палитра построена на мягкой сирени, глицинии и пыльном лавандово-фиолетовом, с лёгкими васильково-голубыми акцентами и молочно-белым. Предметы: большой букет сушёной лаванды, перевязанный джутом и лежащий на бледно-голубой льняной ткани, маленькая синяя стеклянная бутылочка с пробкой, белая зажжённая свеча-столбик на каменной подставке, стеклянный колпак с веточками лаванды внутри, фактурный бледно-бирюзовый шар мха, белая друза кварца, белые гипсовые блоки, кольцо джутовой верёвки, рассыпанные бутоны лаванды. Предметы собраны в верхней половине и по краям, мягко растворяясь в бледно-сиреневом фоне. Нижние 45% полностью пустые: ровные, светлые, слегка размытые — чистое место под текст. Без тёмных теней и чёрных зон. Малая глубина резкости, лёгкое зерно, пастельная цветокоррекция, без текста и водяных знаков, 8k.
```

**Для десктопа:** заменить `vertical 9:16` → `horizontal 16:9`, `upper half and toward the sides` → `upper half, weighted to the right`, `The lower 45%` → `The lower 45% and the left side`.

**Negative (важно — держать фиолетовый, гасить голубизну и черноту):**
```
text, letters, words, watermark, logo, signature, dark background, deep navy, black, moody low-key, heavy shadows, blue-dominant, purple neon, magenta, oversaturated, plastic, blurry, horizontal stripes, hard edges, banding, cluttered bottom, crowded composition
```

---

## 🕐 ПРОМПТ v4 — светлый лавандово-васильковый натюрморт (предыдущий вариант)

> Референс брата — `uploads/23109.jpg`: светлый воздушный натюрморт, лаванда, синие бутылки,
> белая свеча, мох-шар под колпаком, джут, белые каменные блоки. Фон — светло-голубой/лиловый
> (`#dae4f1`, `#e4ecf7`, `#cad6e6`), низ кадра пустой. Брат: «светло-фиолетовое, что-то с васильковым схоже».
> **Этот промпт — замена всем предыдущим** (1/2/1-БИС/2-БИС/2-ТЕР на тёмную и просто светлую палитру).

**EN (телефон, 9:16):**
```
Cinematic bright still life photograph, vertical 9:16. Airy high-key lighting, soft diffused daylight, gentle atmospheric haze. Palette: pale lavender-periwinkle, soft cornflower blue, dusty lilac, milky white. Objects: white lit pillar candle on a round stone coaster, dried lavender bouquet, small blue glass apothecary bottle with cork, glass bell jar (cloche), pale blue-green moss sphere, white crystal cluster, rough white plaster blocks, natural linen cloth, coil of jute rope, scattered lavender buds — arranged in the upper half and center-right, dissolving softly into the background. Lower 40-45% is completely empty, smooth, pale and slightly blurred — clean negative space for text overlay. Pastel, very soft contrast, no strong shadows, shallow depth of field, delicate film grain, no text, no watermark, ultra detailed, 8k.
```

**RU (то же, если Leonardo поймёт лучше):**
```
Кинематографичный светлый натюрморт, вертикально 9:16. Воздушный высокий ключ, мягкий рассеянный дневной свет, лёгкая дымка. Палитра: бледный лавандово-васильковый, нежно-голубой, пыльная сирень, молочно-белый. Предметы: белая зажжённая свеча-столбик на каменной подставке, букет сушёной лаванды, маленькая синяя стеклянная бутылочка с пробкой, стеклянный колпак, бледно-бирюзовый шар мха, белая друза кристаллов, белые гипсовые блоки, льняная ткань, моток джута, рассыпанные бутоны лаванды — собраны в верхней половине и по центру-справа, мягко растворяются в фоне. Нижние 40–45% — полностью пустые, ровные, светлые и слегка размытые: чистое место под текст. Пастельно, очень мягкий контраст, без жёстких теней, малая глубина резкости, лёгкое зерно, без текста и водяных знаков, 8k.
```

**Для десктопа:** тот же промпт, заменить `vertical 9:16` → `horizontal 16:9` и `upper half and center-right` → `upper right`, `Lower 40-45%` → `Lower 45% and the left side`.

**Negative (для светлой версии):**
```
text, letters, words, watermark, logo, signature, dark background, deep navy, black, moody low-key, heavy shadows, purple magenta neon, oversaturated, plastic, blurry, horizontal stripes, hard edges, banding, cluttered bottom, crowded composition
```

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

## 🖼 ПРОМПТ 2-ТЕР (десктоп 16:9) — v3, СВЕТЛЫЙ, под светлый телефонный герой

> Нужен, потому что телефонный герой светлый (`hero-mobile.jpg`, средний тон `#8e9499`), а десктопный `hero.jpg` до сих пор тёмный (`#141f2d`). Старые промпты 1/2/1-БИС/2-БИС — на **тёмную** палитру, они дадут рассинхрон.
> Leonardo preset: **16:9** (пейзаж) → итог 2048 × 1152.

**RU:** Кинематографичный светлый натюрморт, горизонтально 16:9. Светлая, воздушная палитра — нежно-васильковый и пыльно-голубой (#a9c6f7, #cfdffb, #dbe6f7), высокий ключ, мягкий рассеянный свет, лёгкая дымка. Предметы — восковая свеча, пучок сушёной лаванды, стеклянные колбы и колпак, друза кристаллов, кусок гипса, льняная ткань, моток джута, стабилизированный мох — собраны в верхних 55% кадра и ближе к правой стороне. Нижние 45% и левая сторона — пустая, ровная, светлая спокойная зона под заголовок, плавно уходящая в фон. Плавные растворы, без горизонтальных полос и жёстких границ. Малая глубина резкости, без текста и водяных знаков, 8k.

**EN:** Cinematic bright still life, horizontal 16:9. Light airy palette — soft cornflower and dusty blue (#a9c6f7, #cfdffb, #dbe6f7), high-key lighting, soft diffused light, subtle haze. Objects — wax candle, dried lavender, glass cloche and apothecary bottles, crystal cluster, plaster block, linen cloth, jute rope, stabilized moss — clustered in the upper 55% and toward the right side. Lower 45% and the left side stay empty, flat and light — clean calm negative space for a headline block, fading smoothly into the background. Soft dissolves, no horizontal bands, no hard edges. Shallow depth of field, no text, no watermark, 8k.

**Negative для светлого варианта (отдельный!):**
`text, letters, words, watermark, logo, signature, purple magenta tones, neon, oversaturated, dark background, moody low-key, heavy shadows, blurry, horizontal stripes, hard edges, banding, low contrast, cluttered bottom`

---

## ⛔ NEGATIVE PROMPT (для всех тёмных вариантов)

`text, letters, words, watermark, logo, signature, purple magenta tones, neon, oversaturated, plastic skin, blurry, horizontal stripes, hard edges, banding, low contrast, cluttered bottom, crowded composition`

---

## ✅ Чек-лист перед вставкой
1. Внизу — **спокойная тёмная зона** (туда ляжет кнопка-капсула и ничего не спорит с ней).
2. Нет резких горизонтальных полос и «ступенек».
3. Палитра тянет к **синему**, без ухода в маджента/фиолет.
4. Нет текста и знаков на картинке.
5. Соотношения: **9:16** (телефон) и **16:9** (десктоп).
