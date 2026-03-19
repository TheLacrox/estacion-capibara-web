from playwright.sync_api import sync_playwright
import os, sys

BASE = "http://localhost:3456"
OUT = "D:/ss14-server-test/estacion-capibara-web/screenshots"

PAGES = [
    ("homepage", "/"),
    ("blog-index", "/blog/"),
    ("blog-post", "/blog/5-tips-primera-ronda/"),
    ("quiz", "/quiz/"),
    ("seo-page", "/juegos-cooperativos-pc/"),
]

VIEWPORTS = [
    ("desktop", 1920, 1080),
    ("mobile", 375, 812),
]

def main():
    os.makedirs(OUT, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for page_name, path in PAGES:
            for vp_name, w, h in VIEWPORTS:
                ctx = browser.new_context(
                    viewport={"width": w, "height": h},
                    device_scale_factor=1,
                )
                page = ctx.new_page()
                url = BASE + path
                fname = f"{page_name}-{vp_name}.png"
                try:
                    page.goto(url, wait_until="networkidle", timeout=15000)
                    page.wait_for_timeout(1500)  # let animations settle
                    # Above-the-fold screenshot
                    page.screenshot(path=os.path.join(OUT, fname), full_page=False)
                    print(f"OK  {fname}")
                    # Full-page screenshot
                    fname_full = f"{page_name}-{vp_name}-full.png"
                    page.screenshot(path=os.path.join(OUT, fname_full), full_page=True)
                    print(f"OK  {fname_full}")
                except Exception as e:
                    print(f"ERR {fname}: {e}")
                finally:
                    ctx.close()
        browser.close()

if __name__ == "__main__":
    main()
