Feature: Google main page
  I want to open a search engine
  @focus
  Scenario: Opening a search engine page
      Given I open Google page
      Then I see "Google" in the title

  @focus
  Scenario: Searching for something
    Given I open Google page
    And I search for "food"
    Then I see "food" results