package pages.action;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import pages.locators.BanksPageLocators;
import utils.SeleniumDriver;

public class BanksPageActions {
	
	BanksPageLocators banksPageLocators = null;
	
	public BanksPageActions() {
		this.banksPageLocators = new BanksPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), banksPageLocators);
	}
	public void clickbankInsights() {
		
		
		banksPageLocators.bankInsights.click();
	}
	public void clickmoreInsights() {
		//WebDriverWait wait = new WebDriverWait(SeleniumDriver.getDriver(),60);
		//wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='insights']/div/div[3]/div/div/a"))).click();
		banksPageLocators.moreInsights.click();
	}
	public void clickdataview() {
		banksPageLocators.dataview.click();
	}
	public void clicknewreports() {
		banksPageLocators.newreports.click();
		
	}
}
