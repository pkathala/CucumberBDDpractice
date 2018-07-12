Feature: Free CRM deal feature

Scenario: Login and Add deal scenario

Given user already on login page
When title of login page is Free CRM software in the cloud powers sales and customer service
Then user enters username and password
	|tiny06|tiny06|
Then user clicks login button
Then user is on home page
Then user moves to Deals tab
Then user clicks new deal
Then user inputs deal details
	|test deal|1000|70|40|
Then user clicks save button
Then user closes browser