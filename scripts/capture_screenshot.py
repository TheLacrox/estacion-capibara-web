from playwright.sync_api import sync_playwright
import sys, os

BASE = "http://localhost:3456"
OUT = "D:/ss14-server-test/estacion-capibara-web/screenshots"

PAGES = [
    ("/", "homepage"),
    ("/quiz/", "quiz"),
    ("/blog/", "blog"),
]

VIEWPORTS = [
    ("mobile", 375, 812),
    ("desktop", 1920, 1080),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for vp_name, w, h in VIEWPORTS:
        for path, name in PAGES:
            page = browser.new_page(viewport={"width": w, "height": h})
            url = BASE + path
            print(f"Capturing {url} at {vp_name} ({w}x{h})")
            try:
                page.goto(url, wait_until="networkidle", timeout=15000)
                page.wait_for_timeout(2000)  # let animations settle
                # Above-the-fold screenshot
                page.screenshot(path=f"{OUT}/{name}-{vp_name}-above-fold.png", full_page=False)
                # Full page screenshot
                page.screenshot(path=f"{OUT}/{name}-{vp_name}-full.png", full_page=True)
                print(f"  Saved {name}-{vp_name}")
            except Exception as e:
                print(f"  ERROR: {e}")
            page.close()
    browser.close()
    print("Done!")
