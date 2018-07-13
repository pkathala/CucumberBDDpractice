Feature: Free CRM deal feature with Map Objects

Scenario: Login and Add deal scenario

Given user already on login page
When title of login page is Free CRM software in the cloud powers sales and customer service
Then user enters username and password
	|username|password|
	|tiny06|tiny06|
Then user clicks login button
Then user is on home page
Then user inputs deal details
	|title|amount|probability|commission|
	|test1|1000|70|40|
	|test2|2000|60|30|
	|test3|3000|50|20|
	|test4|4000|40|10|

Then user closes browser