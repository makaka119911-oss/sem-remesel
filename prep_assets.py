#!/usr/bin/env python3
"""Готовим ассеты лендинга из присланных картинок."""
import shutil, os
from PIL import Image

UP = "/var/minis/attachments/uploads/"
IMG = "/var/minis/workspace/masterclass/img/"
os.makedirs(IMG, exist_ok=True)

# прямой маппинг
copies = {
    "22934.jpg": "hero.jpg",          # герой 16:9
    "22945.jpg": "hero-mobile.jpg",   # герой 9:16 (телефон)
    "22865.jpg": "01.jpg",            # Древо рода — мох
    "22866.jpg": "02.jpg",            # картины
    "22868.jpg": "03.jpg",            # стрит-арт
    "22881.jpg": "04.jpg",            # платья
    "22878.jpg": "05.jpg",            # макраме-панно
    "22882.jpg": "06.jpg",            # абажур
    "22879.jpg": "07.jpg",            # барельеф
    "22885.jpg": "master.jpg",        # портрет мастера
}
for src, dst in copies.items():
    shutil.copyfile(UP + src, IMG + dst)
    print("copy", src, "->", dst)

# og.jpg = герой
shutil.copyfile(IMG + "hero.jpg", IMG + "og.jpg")

# ---- кнопка-капсула: вырезаем чёрный фон в прозрачность ----
def key_black(path_in, path_out, lo=16, hi=64):
    im = Image.open(path_in).convert("RGB")
    w, h = im.size
    px = im.load()
    out = Image.new("RGBA", (w, h))
    op = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            v = max(r, g, b)
            if v <= lo:
                a = 0
            elif v >= hi:
                a = 255
            else:
                a = int((v - lo) / (hi - lo) * 255)
            op[x, y] = (r, g, b, a)
    # обрезаем по содержимому
    bbox = out.getbbox()
    if bbox:
        out = out.crop(bbox)
    out.save(path_out)
    print("btn:", path_out, out.size)

key_black(UP + "22914.jpg", IMG + "btn.png")

# ---- favicon ----
open(IMG + "favicon.svg", "w").write(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
    '<stop offset="0" stop-color="#8b6ce8"/><stop offset="1" stop-color="#cfbaff"/>'
    '</linearGradient></defs>'
    '<rect width="64" height="64" rx="14" fill="#2b2456"/>'
    '<rect x="14" y="24" width="36" height="17" rx="8.5" fill="url(#g)"/></svg>')
print("favicon ok")

print("\nитого:")
for f in sorted(os.listdir(IMG)):
    print("  ", f, os.path.getsize(IMG + f))
