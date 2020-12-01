package Steps;

import cucumber.api.java.en.Then;
import pages.action.FundsandAssetPageAction;
import pages.action.InsightsPageActions;

public class ValidateFundandAsstMangerSteps {
	
	InsightsPageActions  insightsPageActions = new InsightsPageActions();
	FundsandAssetPageAction fundsandAssetPageAction = new FundsandAssetPageAction();
	
	@Then("^Click on Funds and Asset Manager from Financial Institution$")
	public void click_on_Funds_and_Asset_Manager_from_Financial_Institution() throws Throwable {
	   insightsPageActions.clickFundsandAssetManagers();
	}
	
	@Then("^Click on Insights from Asset Page$")
	public void click_on_Insights_from_Asset_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		fundsandAssetPageAction.clickmoreInsightsfunds();
	    }

	@Then("^Click on \"([^\"]*)\" from Funds and Asset Managers Insights Page$")
	public void click_on_from_Funds_and_Asset_Managers_Insights_Page(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    fundsandAssetPageAction.clickGridView();
	}
	
	@Then("^Validate the report displaying on Assets Page$")
	public void validate_the_report_displaying_on_Assets_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    fundsandAssetPageAction.clickmorereports();
	}



}
