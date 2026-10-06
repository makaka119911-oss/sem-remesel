# 🌿 Промпт для Leonardo — фото мастера («древо рода»)

**Задача:** заменить фото в блоке «МАСТЕР» на Татьяну с её реального фото.
**Референс:** `uploads/22134.jpg` (реальное фото: фиолетовый костюм, дреды, поющая чаша).
**Что меняем:** сейчас в блоке чужая женщина за работой с мхом — `img/master.jpg`, тёмная картинка.
**Где стоит:** секция `.master`, соотношение **4:5** (итог нужен **1000 × 1250**).

⚠️ Важно: фото мастера — единственное тёмное пятно на светлом сайте. **Светлый вариант сядет в тему**, тёмный оставляем как «кинематографичный» запас.

---

## ⭐ ВАРИАНТ 1 — СВЕТЛЫЙ (рекомендую)

**Настройки Leonardo:** preset **4:5**, модель **Phoenix** или **Leonardo Vision XL**,
**Image Guidance** = фото `22134.jpg`, сила **0.45–0.6** (лицо держится, фон и одежда перерисовываются).

**EN:**
```
Cinematic editorial photograph, vertical 4:5. Portrait of a warm friendly Slavic woman, about 40, soft rounded face, dark brown eyes, full figure, light olive skin, long textured dreadlocks in cream white with crimson and burgundy strands, loosely over her shoulders. She wears a loose lilac-violet linen tunic. She sits at a worktable creating a decorative family tree: a tree-shaped artwork whose branches are twisted from jute cord and copper wire, decorated with soft green moss, small polished stones, amber and violet beads and thin linen ribbons. Her hands are attaching a mossy branch with a bead. Light airy studio: soft diffused daylight, pale lavender and milky white palette, softly blurred background with dried lavender, linen cloth, a lit candle, a coil of jute and craft tools. Shallow depth of field, gentle film grain, calm warm mood, natural realistic skin texture, no text, no watermark, ultra detailed, 8k.
```

**RU:**
```
Кинематографичный редакционный портрет, вертикально 4:5. Тёплая приветливая славянская женщина около 40 лет, мягкое округлое лицо, тёмно-карие глаза, плотная фигура, светлая оливковая кожа, длинные фактурные дреды кремово-белого цвета с малиновыми и бордовыми прядями, свободно лежат по плечам. На ней свободная сиренево-фиолетовая льняная туника. Она сидит за рабочим столом и делает декоративное «древо рода»: панно в форме дерева, ветви скручены из джутового шнура и медной проволоки, украшены мягким зелёным мхом, мелкими отшлифованными камнями, янтарными и сиреневыми бусинами и тонкими льняными лентами. Руки прикрепляют мшистую ветвь с бусиной. Светлая воздушная мастерская: мягкий рассеянный дневной свет, палитра бледной лаванды и молочно-белого, размытый фон — сушёная лаванда, льняная ткань, зажжённая свеча, моток джута, инструменты. Малая глубина резкости, лёгкое зерно, спокойное тёплое настроение, естественная текстура кожи, без текста и водяных знаков, 8k.
```

---

## ВАРИАНТ 2 — ТЁМНЫЙ (как сейчас на сайте)

Тот же текст, но вместо блока про свет заменить последнюю часть:

**EN:**
```
Moody low-key studio: deep violet and plum palette, soft rim light from the left, dark textured background, a lit candle, dried lavender, moss, linen and a coil of jute on the table. Cinematic chiaroscuro, shallow depth of field, rich saturated violet shadows, no text, no watermark, ultra detailed, 8k.
```

---

## ⛔ NEGATIVE (для обоих вариантов)

```
text, letters, words, watermark, logo, signature, gym, fitness room, treadmill, exercise machine, medical equipment, hospital, clinic, white curtains, harsh flash photo, smartphone photo, plastic skin, waxy skin, distorted face, wrong face, extra fingers, deformed hands, extra limbs, oversaturated, neon, magenta cast, blurry, low contrast, cluttered background
```

> Из негатива специально вычищаем то, что есть на исходном фото: **зал, тренажёр, медоборудование, белые шторы и «снято на телефон»**. Без этого Leonardo потащит их в кадр.

---

## 📐 ЧЕК-ЛИСТ ПЕРЕД ГЕНЕРАЦИЕЙ

1. Загрузить `22134.jpg` в **Image Guidance**, сила **0.45–0.6**. Ниже 0.4 — потеряется лицо, выше 0.7 — притащит зал и шторы.
2. Preset **4:5** (сайт ждёт 1000 × 1250).
3. Лицо должно остаться **её**: не молодить, не худеть, не менять черты. Это реальный человек — узнаваемость важнее «красоты».
4. Смотреть, чтобы **кисти рук** были нормальные: у генераторов это слабое место. Если руки поехали — перегенерировать, лучше кадр с руками ближе к краю.
5. Прислать 2–3 варианта — выберу лучший, приведу к 1000 × 1250, сожму и поставлю в блок.
