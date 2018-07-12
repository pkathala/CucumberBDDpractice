$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/SeleniumWorkspace/BDDframework/src/test/java/Features/deal.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM deal feature",
  "description": "",
  "id": "free-crm-deal-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login and Add deal scenario",
  "description": "",
  "id": "free-crm-deal-feature;login-and-add-deal-scenario",
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
  "rows": [
    {
      "cells": [
        "tiny06",
        "tiny06"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to Deals tab",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks new deal",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user inputs deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "70",
        "40"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks save button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 9139022641,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitions.title_of_login_page_is_Free_CRM_software_in_the_cloud_powers_sales_and_customer_service()"
});
formatter.result({
  "duration": 20566175,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitions.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 843383932,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitions.user_clicks_login_button()"
});
formatter.result({
  "duration": 5422830073,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 8155930,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitions.user_moves_to_Deals_tab()"
});
formatter.result({
  "duration": 172751579,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitions.user_clicks_new_deal()"
});
formatter.result({
  "duration": 1004718981,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitions.user_inputs_and(DataTable)"
});
formatter.result({
  "duration": 407926210,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitions.user_clicks_save_button()"
});
formatter.result({
  "duration": 929705603,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitions.user_closes_browser()"
});
formatter.result({
  "duration": 676657627,
  "status": "passed"
});
});