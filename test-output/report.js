$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/SeleniumWorkspace/BDDframework/src/test/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login scenario",
  "description": "",
  "id": "free-crm-login-feature;login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM software in the cloud powers sales and customer service",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 7108202070,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_Free_CRM_software_in_the_cloud_powers_sales_and_customer_service()"
});
formatter.result({
  "duration": 14734979,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_password()"
});
formatter.result({
  "duration": 485860084,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_login_button()"
});
formatter.result({
  "duration": 4018097283,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 10427946,
  "status": "passed"
});
});