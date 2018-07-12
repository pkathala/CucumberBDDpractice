$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/SeleniumWorkspace/BDDframework/src/test/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login scenario",
  "description": "",
  "id": "free-crm-login-feature;login-scenario",
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
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "free-crm-login-feature;login-scenario;;1"
    },
    {
      "cells": [
        "tiny06",
        "tiny06"
      ],
      "line": 13,
      "id": "free-crm-login-feature;login-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 14,
      "id": "free-crm-login-feature;login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login scenario",
  "description": "",
  "id": "free-crm-login-feature;login-scenario;;2",
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
formatter.match({
  "location": "LoginStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 11185293386,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_Free_CRM_software_in_the_cloud_powers_sales_and_customer_service()"
});
formatter.result({
  "duration": 28209386,
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
  "duration": 538669756,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_login_button()"
});
formatter.result({
  "duration": 4348611668,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 6174565,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login scenario",
  "description": "",
  "id": "free-crm-login-feature;login-scenario;;3",
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
  "name": "user enters \"naveenk\" and \"test@123\"",
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
formatter.match({
  "location": "LoginStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 11909981054,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_Free_CRM_software_in_the_cloud_powers_sales_and_customer_service()"
});
formatter.result({
  "duration": 22299345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1260815752,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_login_button()"
});
formatter.result({
  "duration": 2328639855,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 9159910,
  "status": "passed"
});
});