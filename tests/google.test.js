const { Builder, Browser, By, Key } = require("selenium-webdriver");

beforeEach(async () => {
    driver = await getGooglePageLoadedDriver();
});

afterEach(async () => {
    driver.close();
    driver = null;
});

test('google.com should display with title is "Google"', async () => {
    let actualTitle = await driver.getTitle();

    expect(actualTitle).toBe('Google');
});

test('google.com should display search result correctly', async () => {
    await driver.findElement(By.css('input.gLFyf')).sendKeys('selenium', Key.ENTER);

    let actualResultCount = await getElementsCount(driver, By.css('#search > div > div > div'));

    expect(actualResultCount > 0).toBeTruthy();
});

async function getGooglePageLoadedDriver() {
    let driver = await new Builder().forBrowser(Browser.EDGE).build();
    await driver.get('https://www.google.com');
    driver.manage().window().maximize();
    return driver;
}

async function getElementsCount(driver, by) {
    return (await driver.findElements(by)).length;
}