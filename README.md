project 8
The main task was to run an automation test on the Urban Routes website. Some of the website features were automated to ensure the tests were running properly. The tests included filling in the "To" and "From" address fields to check if they were working. The second task was to select a supportive plan from the list of services available on the website. The third task involved adding a phone number to the phone number field and receiving an SMS to confirm the number, using the intercept function to intercept the process before typing the SMS and exporting a list of functions from "helper.js". The fourth task was to add a credit card to the card field. While adding the credit card, a list of functions such as click() and waitToBeDisplayed() was used, and the card could then be used as a payment method. The fifth task involved sending a message to the driver, requiring the selection of the supportive plan service and coding accordingly. The sixth task was to order a blanket and a handkerchief using the slider button on the website, and to select this order, the supportive plan service had to be chosen. The seventh task involved adding two ice creams to the order using the "+" button and clicking twice, after which the "+" button becomes inactive. The final task was to place the order, for which the supportive plan service had to be selected and the phone number needed to be added to the phone number field. After clicking on "Enter the number order", an order confirmation page appeared, showing that the order had been placed.

## Technologies and Techniques Used
- WebDriverIO for test automation.
- JavaScript for test scripting.
- Mocha framework for test structure.
- Geckodriver for running Mozilla Firefox. 
- intercept function for intercing a code.
- expect funtion was used to validate the test. 

## How to Run the Tests
1. Clone the project repository.
2. Install dependencies using `npm install`.
3. Make sure the wdio.conf.js file is configured correctly with the base URL.
4. Run the tests using the command `npm run wdio`.
