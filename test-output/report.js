$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/SeleniumWorkspace/BDDframework/src/test/java/Features/contact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM contact feature",
  "description": "",
  "id": "free-crm-contact-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login and Add contact scenario",
  "description": "",
  "id": "free-crm-contact-feature;login-and-add-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
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
formatter.step({
  "line": 10,
  "name": "user moves to Contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user inputs \"\u003cfirstname\u003e\",\"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks save button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "free-crm-contact-feature;login-and-add-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 17,
      "id": "free-crm-contact-feature;login-and-add-contact-scenario;;1"
    },
    {
      "cells": [
        "tiny06",
        "tiny06",
        "Peter",
        "Layton",
        "Manager"
      ],
      "line": 18,
      "id": "free-crm-contact-feature;login-and-add-contact-scenario;;2"
    },
    {
      "cells": [
        "tiny06",
        "tiny06",
        "Jacob",
        "Goodwill",
        "Lead"
      ],
      "line": 19,
      "id": "free-crm-contact-feature;login-and-add-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Login and Add contact scenario",
  "description": "",
  "id": "free-crm-contact-feature;login-and-add-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"tiny06\" and \"tiny06\"",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.step({
  "line": 10,
  "name": "user moves to Contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user inputs \"Peter\",\"Layton\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks save button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 9240091422,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_Free_CRM_software_in_the_cloud_powers_sales_and_customer_service()"
});
formatter.result({
  "duration": 19754874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tiny06",
      "offset": 13
    },
    {
      "val": "tiny06",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 552244467,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_login_button()"
});
formatter.result({
  "duration": 6673886421,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 8136336,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_moves_to_Contacts_tab()"
});
formatter.result({
  "duration": 207840461,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_new_contact()"
});
formatter.result({
  "duration": 991778289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 13
    },
    {
      "val": "Layton",
      "offset": 21
    },
    {
      "val": "Manager",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinitions.user_inputs_and(String,String,String)"
});
formatter.result({
  "duration": 742872658,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_save_button()"
});
formatter.result({
  "duration": 1892372231,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_closes_browser()"
});
formatter.result({
  "duration": 1782230783,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login and Add contact scenario",
  "description": "",
  "id": "free-crm-contact-feature;login-and-add-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"tiny06\" and \"tiny06\"",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.step({
  "line": 10,
  "name": "user moves to Contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user inputs \"Jacob\",\"Goodwill\" and \"Lead\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks save button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 14514752940,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_Free_CRM_software_in_the_cloud_powers_sales_and_customer_service()"
});
formatter.result({
  "duration": 25435381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tiny06",
      "offset": 13
    },
    {
      "val": "tiny06",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 437621036,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_login_button()"
});
formatter.result({
  "duration": 7801051192,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 5682372,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_moves_to_Contacts_tab()"
});
formatter.result({
  "duration": 150100001,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_new_contact()"
});
formatter.result({
  "duration": 5598212899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jacob",
      "offset": 13
    },
    {
      "val": "Goodwill",
      "offset": 21
    },
    {
      "val": "Lead",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinitions.user_inputs_and(String,String,String)"
});
formatter.result({
  "duration": 457967940,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_save_button()"
});
formatter.result({
  "duration": 1960554166,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_closes_browser()"
});
formatter.result({
  "duration": 1010952796,
  "status": "passed"
});
});