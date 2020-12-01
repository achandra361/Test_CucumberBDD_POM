package pages.action;

import org.openqa.selenium.Keys;
import org.openqa.selenium.support.PageFactory;

import pages.locators.BanksPageLocators;
import pages.locators.SearchPageLocators;
import utils.SeleniumDriver;

public class SearchPageActions {
	SearchPageLocators searchPageLocators = null;
	
	public SearchPageActions() {
		this.searchPageLocators = new SearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), searchPageLocators);
	}
	
	public void SearchElement() {
		searchPageLocators.SearchElement.sendKeys("JP Morgan");
		
	}
	
	public void clickEnter() {
		searchPageLocators.SearchElement.sendKeys(Keys.ENTER);
	}
	
	public void clickSearchEntity() {
		searchPageLocators.ClickEntity.click();
	}
	
	public void openRAC() {
		searchPageLocators.OpenRAC.click();
	}
	
}
