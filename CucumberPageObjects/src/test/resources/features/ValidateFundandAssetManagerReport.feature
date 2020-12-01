@ValidateReports
Feature: Aceptance testing to validate the Reports of different Sectors is displaying fine

  @Search-FundandAssetManager-Reports
  Scenario: Validate Report of Financial institution Page
    Given I am on the Homepage "https://fitchratings.com" of Fitch website
    And Click on menu from different Page Menus
      | Menus    |
      | People   |
      | Product  |
      | Insights |
    And Click on Sectors from Insights Menu
    Then Click on Funds and Asset Manager from Financial Institution
    And Click on Insights from Asset Page
    Then Click on "Data View" from Funds and Asset Managers Insights Page
    Then Validate the report displaying on Assets Page
