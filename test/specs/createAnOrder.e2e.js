const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
   it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })
    it('Selecting Supportive plan',async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        await expect(supportivePlanButton).toBeExisting();
    })

   it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
   it('add credit card',async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethod = await $(page.paymentMethod);
        await paymentMethod.click();
        const addCard = await $(page.addCard);
        await addCard.click();
        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.waitForDisplayed();
        await cardNumberField.click();
        cardNumberField.setValue(456765432345);
        cardCode = await $(page.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.click();
        cardCode.setValue(321); 
        const whiteSpace = await $(page.whiteSpace);
        await whiteSpace.waitForDisplayed();
        await whiteSpace.click();
        const link = await $(page.link);
        await link.waitForDisplayed();
        await link.click();
        const closeButton = await $(page.closeButton)
        await closeButton.waitForDisplayed();
        await closeButton.click();
        const cardImage = await $(page.cardImage)
        await expect(cardImage).toBeExisting();
    })
   it('add a message to the driver', async () => {
        await browser.url(`/`);
        await page.fillAddresses ('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        const message = await $(page.message);
        await message.waitForDisplayed();
        await message.setValue('Please park infornt of the apartment');
        await expect(message[value='Please park infornt of the apartment']).toBe();
     })
    it('Ordering a Blanket and handkerchiefs ', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        const blanketAndHankerchiefs = await $(page.blanketAndHankerchiefs);
        await blanketAndHankerchiefs.waitForDisplayed();
        await blanketAndHankerchiefs.click();
        const orderConfirmed = await $(page.orderConfirmed);
        await expect(orderConfirmed). toBeExisting; 
    })
    it('Ordering 2 Ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        const iceCream = await $(page.iceCream);
        await iceCream.waitForDisplayed();
        await iceCream.click();
        await iceCream.click();
        const iceCreamConfirmation = await $(page.iceCreamConfirmation);
        await expect(iceCreamConfirmation).toBeExisting;

    })
    it('The car search modal appears', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        await expect(supportivePlanButton).toBeExisting();

        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

        const carOrder = await $(page.carOrder);
        await carOrder.click();
        const searchModal = await $(page.searchModal);
        await expect(searchModal).toBeExisting();
    

        
    })
})
