from playwright.sync_api import sync_playwright

OUT = "D:/ss14-server-test/estacion-capibara-web/screenshots"

with sync_playwright() as p:
    browser = p.chromium.launch()
    # Quiz mobile - scroll down slightly to see all 4 answers
    page = browser.new_page(viewport={"width": 375, "height": 812})
    page.goto("http://localhost:3456/quiz/", wait_until="networkidle", timeout=15000)
    page.wait_for_timeout(2000)

    # Scroll down a bit to see if 4th answer is behind the cookie banner
    page.evaluate("window.scrollBy(0, 200)")
    page.wait_for_timeout(500)
    page.screenshot(path=f"{OUT}/quiz-mobile-scrolled.png", full_page=False)

    # Try to count answer option elements
    answers = page.query_selector_all("button")
    print(f"Found {len(answers)} buttons on quiz page")
    for i, btn in enumerate(answers):
        text = btn.inner_text()
        box = btn.bounding_box()
        if box:
            print(f"  Button {i}: '{text[:50]}' at y={box['y']:.0f} h={box['height']:.0f} bottom={box['y']+box['height']:.0f}")

    # Check cookie banner dimensions
    cookie = page.query_selector("[class*='cookie'], [class*='Cookie'], [id*='cookie'], [id*='Cookie']")
    if cookie:
        box = cookie.bounding_box()
        print(f"\nCookie banner: y={box['y']:.0f} h={box['height']:.0f}")
    else:
        # Try to find by text
        banner = page.locator("text=cookies")
        if banner.count() > 0:
            box = banner.first.bounding_box()
            if box:
                print(f"\nCookie text element: y={box['y']:.0f} h={box['height']:.0f}")

    page.close()
    browser.close()
