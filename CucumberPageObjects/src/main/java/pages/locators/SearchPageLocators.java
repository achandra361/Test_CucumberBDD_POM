package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SearchPageLocators {
	
	@FindBy(how=How.NAME,using="query")
	public WebElement SearchElement;
	
	@FindBy(how=How.LINK_TEXT,using="JPMorgan Chase & Co.")
	public WebElement ClickEntity;
	
	@FindBy(how=How.PARTIAL_LINK_TEXT,using="Fitch Affirms JPMorg")
	public WebElement OpenRAC;
	
	

}
