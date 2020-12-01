@ValidateReports
Feature: Search an Entity on fitchratings website and validate its reports

  @SearchEntity
  Scenario: Searching an entity on fitch website and click report
    Given I am on the Homepage "https://fitchratings.com" of Fitch website
    Then Click on Search button
    And Enter the "<entity name>"
    And Click on Enter
    And Click on Entity
    Then Click on RAC Reports
