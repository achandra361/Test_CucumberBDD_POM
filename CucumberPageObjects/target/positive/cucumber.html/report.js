$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ValidateBankReports.feature");
formatter.feature({
  "line": 2,
  "name": "Aceptance testing to validate the Reports of different Sectors is displaying fine",
  "description": "",
  "id": "aceptance-testing-to-validate-the-reports-of-different-sectors-is-displaying-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ValidateReports"
    }
  ]
});
formatter.before({
  "duration": 6216757000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate Report of Financial institution Page",
  "description": "",
  "id": "aceptance-testing-to-validate-the-reports-of-different-sectors-is-displaying-fine;validate-report-of-financial-institution-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Search-Bank-Reports"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the Homepage \"https://fitchratings.com\" of Fitch website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on menu from different Page Menus",
  "rows": [
    {
      "cells": [
        "Menus"
      ],
      "line": 8
    },
    {
      "cells": [
        "People"
      ],
      "line": 9
    },
    {
      "cells": [
        "Product"
      ],
      "line": 10
    },
    {
      "cells": [
        "Insights"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on Sectors from Insights Menu",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Banks from Financial Institution",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on Insights from Banks Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on \"Data View\" from Insights",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Print the link that is Displaying",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://fitchratings.com",
      "offset": 22
    }
  ],
  "location": "ValidateBankReportSteps.i_am_on_the_Homepage_of_Fitch_website(String)"
});
formatter.result({
  "duration": 8453479700,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_from_different_Page_Menus(String\u003e)"
});
formatter.result({
  "duration": 561820900,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_Sectors_from_Insights_Menu()"
});
formatter.result({
  "duration": 348948000,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_Banks_from_Financial_Institution()"
});
formatter.result({
  "duration": 740424800,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_Insights_from_Banks_Page()"
});
formatter.result({
  "duration": 4239809200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data View",
      "offset": 10
    }
  ],
  "location": "ValidateBankReportSteps.click_on_from_Insights(String)"
});
formatter.result({
  "duration": 161624300,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.print_the_link_that_is_Displaying()"
});
formatter.result({
  "duration": 1059990200,
  "status": "passed"
});
formatter.after({
  "duration": 813132000,
  "status": "passed"
});
formatter.uri("ValidateEntityRating.feature");
formatter.feature({
  "line": 2,
  "name": "Search an Entity on fitchratings website and validate its reports",
  "description": "",
  "id": "search-an-entity-on-fitchratings-website-and-validate-its-reports",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ValidateReports"
    }
  ]
});
formatter.before({
  "duration": 5500511900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Searching an entity on fitch website and click report",
  "description": "",
  "id": "search-an-entity-on-fitchratings-website-and-validate-its-reports;searching-an-entity-on-fitch-website-and-click-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SearchEntity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the Homepage \"https://fitchratings.com\" of Fitch website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter the \"\u003centity name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Enter",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Entity",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on RAC Reports",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://fitchratings.com",
      "offset": 22
    }
  ],
  "location": "ValidateBankReportSteps.i_am_on_the_Homepage_of_Fitch_website(String)"
});
formatter.result({
  "duration": 7815714700,
  "status": "passed"
});
formatter.match({
  "location": "ValidateEntityRatingSteps.click_on_Search_button()"
});
formatter.result({
  "duration": 540551400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003centity name\u003e",
      "offset": 11
    }
  ],
  "location": "ValidateEntityRatingSteps.enter_the(String)"
});
formatter.result({
  "duration": 354052600,
  "status": "passed"
});
formatter.match({
  "location": "ValidateEntityRatingSteps.click_on_Enter()"
});
formatter.result({
  "duration": 3288128300,
  "status": "passed"
});
formatter.match({
  "location": "ValidateEntityRatingSteps.click_on_Entity()"
});
formatter.result({
  "duration": 1130978700,
  "status": "passed"
});
formatter.match({
  "location": "ValidateEntityRatingSteps.click_on_RAC_Reports()"
});
formatter.result({
  "duration": 6601794400,
  "status": "passed"
});
formatter.after({
  "duration": 829028600,
  "status": "passed"
});
formatter.uri("ValidateFundandAssetManagerReport.feature");
formatter.feature({
  "line": 2,
  "name": "Aceptance testing to validate the Reports of different Sectors is displaying fine",
  "description": "",
  "id": "aceptance-testing-to-validate-the-reports-of-different-sectors-is-displaying-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ValidateReports"
    }
  ]
});
formatter.before({
  "duration": 5439160500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate Report of Financial institution Page",
  "description": "",
  "id": "aceptance-testing-to-validate-the-reports-of-different-sectors-is-displaying-fine;validate-report-of-financial-institution-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Search-FundandAssetManager-Reports"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the Homepage \"https://fitchratings.com\" of Fitch website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on menu from different Page Menus",
  "rows": [
    {
      "cells": [
        "Menus"
      ],
      "line": 8
    },
    {
      "cells": [
        "People"
      ],
      "line": 9
    },
    {
      "cells": [
        "Product"
      ],
      "line": 10
    },
    {
      "cells": [
        "Insights"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on Sectors from Insights Menu",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Funds and Asset Manager from Financial Institution",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on Insights from Asset Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on \"Data View\" from Funds and Asset Managers Insights Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Validate the report displaying on Assets Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://fitchratings.com",
      "offset": 22
    }
  ],
  "location": "ValidateBankReportSteps.i_am_on_the_Homepage_of_Fitch_website(String)"
});
formatter.result({
  "duration": 7515470200,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_from_different_Page_Menus(String\u003e)"
});
formatter.result({
  "duration": 510655300,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_Sectors_from_Insights_Menu()"
});
formatter.result({
  "duration": 317986300,
  "status": "passed"
});
formatter.match({
  "location": "ValidateFundandAsstMangerSteps.click_on_Funds_and_Asset_Manager_from_Financial_Institution()"
});
formatter.result({
  "duration": 830815300,
  "status": "passed"
});
formatter.match({
  "location": "ValidateFundandAsstMangerSteps.click_on_Insights_from_Asset_Page()"
});
formatter.result({
  "duration": 739418800,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WKWIN5627505\u0027, ip: \u0027192.168.0.107\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\anichand\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62505}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 567577a8903e02d7bd7c4e632c28b56d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat pages.action.FundsandAssetPageAction.clickmoreInsightsfunds(FundsandAssetPageAction.java:22)\r\n\tat Steps.ValidateFundandAsstMangerSteps.click_on_Insights_from_Asset_Page(ValidateFundandAsstMangerSteps.java:20)\r\n\tat ✽.And Click on Insights from Asset Page(ValidateFundandAssetManagerReport.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data View",
      "offset": 10
    }
  ],
  "location": "ValidateFundandAsstMangerSteps.click_on_from_Funds_and_Asset_Managers_Insights_Page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidateFundandAsstMangerSteps.validate_the_report_displaying_on_Assets_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3008505400,
  "status": "passed"
});
});