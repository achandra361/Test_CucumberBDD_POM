package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class InsightsPageLocators {
	
	@FindBy(how=How.XPATH,using="//*[@id=\"gatsby-focus-wrapper\"]/div/div[2]/div/div[2]/ul/li[1]/ul/li[3]/ul/ul/li[1]/a")
	public WebElement Banks;
	
	@FindBy(how=How.XPATH,using="//span[@class='active']")
	public WebElement Sectors;
	
	@FindBy(how=How.XPATH,using="//a[contains(text(),'Fund & Asset Managers')]")
	public WebElement FundsandAsstManagers;
}
