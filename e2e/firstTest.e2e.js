describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show a title and a description', async () => {
    await expect(element(by.id('title'))).toBeVisible();
    await expect(element(by.id('description'))).toBeVisible();
    await expect(element(by.id('message'))).not.toBeVisible();
    await device.takeScreenshot('home page');
  });

  it('should show a hello world message after tapping the button', async () => {
    await element(by.id('message_button')).tap();
    await expect(element(by.id('message'))).toBeVisible();
    await expect(element(by.text('Hello world!'))).toBeVisible();
    await device.takeScreenshot('home page with hello world message');
  });
});
