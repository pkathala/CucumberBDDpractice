Feature: Free CRM login feature

Scenario Outline: Login scenario

Given user already on login page
When title of login page is Free CRM software in the cloud powers sales and customer service
Then user enters "<username>" and "<password>"
Then user clicks login button
Then user is on home page

Examples:
	|username|password|
	|tiny06  |tiny06  |
	|naveenk |test@123|