package pages.action;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import pages.locators.FundsandAssetPageLocators;
import utils.SeleniumDriver;

public class FundsandAssetPageAction {
	FundsandAssetPageLocators fundsandAssetPageLocators = null;
	
	public FundsandAssetPageAction() {
		this.fundsandAssetPageLocators = new FundsandAssetPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), fundsandAssetPageLocators);
	}
	
	public void clickmoreInsightsfunds() {
		WebDriverWait wait = new WebDriverWait(SeleniumDriver.getDriver(),30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='button button--action button--action-2']")));
		fundsandAssetPageLocators.moreInsightsfunds.click();
	}
	public void clickGridView() {
		fundsandAssetPageLocators.GridView.click();
	}
	public void clickmorereports() {
		WebDriverWait wait = new WebDriverWait(SeleniumDriver.getDriver(),30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[contains(text(),'Thai Investment Management Dashboard: 1H20')]")));
		fundsandAssetPageLocators.morereports.click();
	}
}
