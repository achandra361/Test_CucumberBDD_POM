package pages.action;

import org.openqa.selenium.support.PageFactory;

import pages.locators.InsightsPageLocators;
import utils.SeleniumDriver;

public class InsightsPageActions {

	InsightsPageLocators insightsPageLocators = null;
	public InsightsPageActions() {
		this.insightsPageLocators = new InsightsPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), insightsPageLocators);
	}
	public void clickBanks() {
		insightsPageLocators.Banks.click();
	}
	public void clickSectors() {
		insightsPageLocators.Sectors.click();
	}
	
	public void clickFundsandAssetManagers() {
		insightsPageLocators.FundsandAsstManagers.click();
	}
}
