package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BanksPageLocators {
	
	@FindBy(how=How.XPATH,using="//*[@id=\"gatsby-focus-wrapper\"]/div/div/main/article/div/div[2]/div[1]/div[1]/ul/li[2]/a/span[2]")
	public WebElement bankInsights;
	
	@FindBy(how=How.XPATH,using="//*[@id='insights']/div/div[3]/div/div/a")
	public WebElement moreInsights;
	
	@FindBy(how=How.PARTIAL_LINK_TEXT,using = "Ratings")
	public WebElement newreports;
	
	@FindBy(how=How.XPATH,using="//span[contains(text(),'- Data View')]")
	public WebElement dataview;
	
}
