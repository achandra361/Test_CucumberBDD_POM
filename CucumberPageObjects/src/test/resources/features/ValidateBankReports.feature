@ValidateReports
Feature: Aceptance testing to validate the Reports of different Sectors is displaying fine

  @Search-Bank-Reports
  Scenario: Validate Report of Financial institution Page
    Given I am on the Homepage "https://fitchratings.com" of Fitch website
    And Click on menu from different Page Menus
      | Menus    |
      | People   |
      | Product  |
      | Insights |
    And Click on Sectors from Insights Menu
    Then Click on Banks from Financial Institution
    And Click on Insights from Banks Page
    Then Click on "Data View" from Insights
    Then Print the link that is Displaying
