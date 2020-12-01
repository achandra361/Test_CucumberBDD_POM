package pages.action;

import org.openqa.selenium.support.PageFactory;

import pages.locators.FitchHomePageLocators;
import utils.SeleniumDriver;

public class FitchHomePageActions {

	FitchHomePageLocators fitchHomePageLocators = null;
	public FitchHomePageActions()
	{
	
		this.fitchHomePageLocators = new FitchHomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), fitchHomePageLocators);
	}
	public void Insightsclick() {
		fitchHomePageLocators.Insights.click();
	}
	public void Searchclick() {
		fitchHomePageLocators.Search.click();
		
	}
}
