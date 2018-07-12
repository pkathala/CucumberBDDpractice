Feature: Free CRM contact feature

Scenario Outline: Login and Add contact scenario

Given user already on login page
When title of login page is Free CRM software in the cloud powers sales and customer service
Then user enters "<username>" and "<password>"
Then user clicks login button
Then user is on home page
Then user moves to Contacts tab
Then user clicks new contact
Then user inputs "<firstname>","<lastname>" and "<position>"
Then user clicks save button
Then user closes browser

Examples:
	|username|password|firstname|lastname|position|
	|tiny06  |tiny06  |Peter    |Layton  |Manager |
	|tiny06  |tiny06  |Jacob    |Goodwill  |Lead |
	