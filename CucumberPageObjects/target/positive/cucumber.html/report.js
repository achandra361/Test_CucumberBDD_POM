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
  "duration": 6257887500,
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
  "duration": 8501233600,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_from_different_Page_Menus(String\u003e)"
});
formatter.result({
  "duration": 557912600,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_Sectors_from_Insights_Menu()"
});
formatter.result({
  "duration": 276952700,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_Banks_from_Financial_Institution()"
});
formatter.result({
  "duration": 613832300,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_Insights_from_Banks_Page()"
});
formatter.result({
  "duration": 2572747700,
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
  "duration": 2626384800,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.print_the_link_that_is_Displaying()"
});
formatter.result({
  "duration": 1103763900,
  "status": "passed"
});
formatter.after({
  "duration": 810294000,
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
  "duration": 5497534700,
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
  "duration": 9068094400,
  "status": "passed"
});
formatter.match({
  "location": "ValidateEntityRatingSteps.click_on_Search_button()"
});
formatter.result({
  "duration": 495561400,
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
  "duration": 309064700,
  "status": "passed"
});
formatter.match({
  "location": "ValidateEntityRatingSteps.click_on_Enter()"
});
formatter.result({
  "duration": 1546008000,
  "status": "passed"
});
formatter.match({
  "location": "ValidateEntityRatingSteps.click_on_Entity()"
});
formatter.result({
  "duration": 2862627200,
  "status": "passed"
});
formatter.match({
  "location": "ValidateEntityRatingSteps.click_on_RAC_Reports()"
});
formatter.result({
  "duration": 7093140900,
  "status": "passed"
});
formatter.after({
  "duration": 813485700,
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
  "duration": 5512248700,
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
  "duration": 9063847400,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_from_different_Page_Menus(String\u003e)"
});
formatter.result({
  "duration": 511369000,
  "status": "passed"
});
formatter.match({
  "location": "ValidateBankReportSteps.click_on_Sectors_from_Insights_Menu()"
});
formatter.result({
  "duration": 288635200,
  "status": "passed"
});
formatter.match({
  "location": "ValidateFundandAsstMangerSteps.click_on_Funds_and_Asset_Manager_from_Financial_Institution()"
});
formatter.result({
  "duration": 610483800,
  "status": "passed"
});
formatter.match({
  "location": "ValidateFundandAsstMangerSteps.click_on_Insights_from_Asset_Page()"
});
formatter.result({
  "duration": 3346476200,
  "status": "passed"
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
  "duration": 135104600,
  "status": "passed"
});
formatter.match({
  "location": "ValidateFundandAsstMangerSteps.validate_the_report_displaying_on_Assets_Page()"
});
formatter.result({
  "duration": 30091780400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //a[contains(text(),\u0027Thai Investment Management Dashboard: 1H20\u0027)] (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pages.action.FundsandAssetPageAction.clickmorereports(FundsandAssetPageAction.java:29)\r\n\tat Steps.ValidateFundandAsstMangerSteps.validate_the_report_displaying_on_Assets_Page(ValidateFundandAsstMangerSteps.java:32)\r\n\tat ✽.Then Validate the report displaying on Assets Page(ValidateFundandAssetManagerReport.feature:16)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Thai Investment Management Dashboard: 1H20\u0027)]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WKWIN5627505\u0027, ip: \u0027192.168.0.107\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\anichand\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58126}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1dc70e3b1cac58d86820ced6304947b2\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Thai Investment Management Dashboard: 1H20\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pages.action.FundsandAssetPageAction.clickmorereports(FundsandAssetPageAction.java:29)\r\n\tat Steps.ValidateFundandAsstMangerSteps.validate_the_report_displaying_on_Assets_Page(ValidateFundandAsstMangerSteps.java:32)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1211996400,
  "status": "passed"
});
});