package Steps;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.action.BanksPageActions;
import pages.action.FitchHomePageActions;
import pages.action.InsightsPageActions;
import utils.SeleniumDriver;

public class ValidateBankReportSteps {
	
		FitchHomePageActions fitchHomePageActions = new FitchHomePageActions();
		InsightsPageActions  insightsPageActions = new InsightsPageActions();
		BanksPageActions banksPageActions = new BanksPageActions();
	@Given("^I am on the Homepage \"([^\"]*)\" of Fitch website$")
	public void i_am_on_the_Homepage_of_Fitch_website(String WebsiteURL) throws Throwable {
		SeleniumDriver.openPage(WebsiteURL);
	}

	@And("^Click on menu from different Page Menus$")
	public void click_on_from_different_Page_Menus(List<String>	list) throws Throwable {
	    list.get(3);
	    fitchHomePageActions.Insightsclick();
	}

	@And("^Click on Sectors from Insights Menu$")
	public void click_on_Sectors_from_Insights_Menu() throws Throwable {
	    insightsPageActions.clickSectors();
	}

	@Then("^Click on Banks from Financial Institution$")
	public void click_on_Banks_from_Financial_Institution() throws Throwable {
	    insightsPageActions.clickBanks();
	}

	
	/*@And("^Click on Insights from Address Bar$")
	public void click_on_Insights_from_Address_Bar() throws Throwable {
	    //banksPageActions.clickbankInsights();
	    banksPageActions.clickmoreInsights();
	}*/
	
	@And("^Click on Insights from Banks Page$")
	public void click_on_Insights_from_Banks_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    WebDriverWait wait = new WebDriverWait(SeleniumDriver.getDriver(), 50);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='insights']/div/div[3]/div/div/a"))).click();
	}

	@Then("^Click on \\\"([^\\\"]*)\\\" from Insights$")
	public void click_on_from_Insights(String link) throws Throwable {
		
		banksPageActions.clickdataview();
	}

	/*@Then("^Very the Result is Displaying$")
	public void very_the_Result_is_Displaying() throws Throwable {
		banksPageActions.clicknewreports();
		String newlink = SeleniumDriver.getDriver().getTitle();
		System.out.println(newlink);
		//assertEquals("Coronavirus", "Coronavirus");*/
		
		@Then("^Print the link that is Displaying$")
		public void print_the_link_that_is_Displaying() throws Throwable {
		
			banksPageActions.clicknewreports();
			String newlink = SeleniumDriver.getDriver().getTitle();
			System.out.println(newlink);
		    
		}
		
	}




