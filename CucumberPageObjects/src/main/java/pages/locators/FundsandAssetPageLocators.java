package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class FundsandAssetPageLocators {
	
	@FindBy(how=How.XPATH,using="//a[@class='button button--action button--action-2']")
	public WebElement moreInsightsfunds;
	
	@FindBy(how=How.XPATH,using="//span[contains(text(),'- Data View')]")
	public WebElement GridView;
	
	@FindBy(how=How.XPATH,using="//a[contains(text(),'Thai Investment Management Dashboard: 1H20')]")
	public WebElement morereports;
}
