$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/SeleniumWorkspace/BDDframework/src/test/java/Features/dealmap.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM deal feature with Map Objects",
  "description": "",
  "id": "free-crm-deal-feature-with-map-objects",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login and Add deal scenario",
  "description": "",
  "id": "free-crm-deal-feature-with-map-objects;login-and-add-deal-scenario",
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "tiny06",
        "tiny06"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user inputs deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 13
    },
    {
      "cells": [
        "test1",
        "1000",
        "70",
        "40"
      ],
      "line": 14
    },
    {
      "cells": [
        "test2",
        "2000",
        "60",
        "30"
      ],
      "line": 15
    },
    {
      "cells": [
        "test3",
        "3000",
        "50",
        "20"
      ],
      "line": 16
    },
    {
      "cells": [
        "test4",
        "4000",
        "40",
        "10"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinitionsWithMap.user_already_on_login_page()"
});
formatter.result({
  "duration": 7079653515,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitionsWithMap.title_of_login_page_is_Free_CRM_software_in_the_cloud_powers_sales_and_customer_service()"
});
formatter.result({
  "duration": 28936244,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitionsWithMap.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1324539963,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitionsWithMap.user_clicks_login_button()"
});
formatter.result({
  "duration": 5022443504,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitionsWithMap.user_is_on_home_page()"
});
formatter.result({
  "duration": 72320549,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitionsWithMap.user_inputs_and(DataTable)"
});
formatter.result({
  "duration": 8020186417,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinitionsWithMap.user_closes_browser()"
});
formatter.result({
  "duration": 706399107,
  "status": "passed"
});
});