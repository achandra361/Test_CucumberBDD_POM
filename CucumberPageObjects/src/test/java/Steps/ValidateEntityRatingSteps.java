package Steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import pages.action.FitchHomePageActions;
import pages.action.SearchPageActions;

public class ValidateEntityRatingSteps {
	
	FitchHomePageActions fitchHomePageActions = new FitchHomePageActions();
	SearchPageActions searchPageActions = new SearchPageActions();
	@Then("^Click on Search button$")
	public void click_on_Search_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		fitchHomePageActions.Searchclick();
		
	    
	}

	@And("^Enter the \"([^\"]*)\"$")
	public void enter_the(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		searchPageActions.SearchElement();;
	}

	@And("^Click on Enter$")
	public void click_on_Enter() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    searchPageActions.clickEnter();
	}

	@And("^Click on Entity$")
	public void click_on_Entity() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		searchPageActions.clickSearchEntity();
	    
	}

	@Then("^Click on RAC Reports$")
	public void click_on_RAC_Reports() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    searchPageActions.openRAC();
	}



}
