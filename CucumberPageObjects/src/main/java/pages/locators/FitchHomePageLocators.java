package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class FitchHomePageLocators {
	
	@FindBy(how=How.XPATH,using="//span[contains(text(),'People')]")
	public WebElement People;
	
	@FindBy(how=How.XPATH,using="//span[contains(text(),'Product')]")
	public WebElement Product;
	
	@FindBy(how=How.XPATH,using="//*[@id=\"back-to-top\"]/div/div[2]/nav/ul/li[3]/span")
	public WebElement Insights;
	
	@FindBy(how=How.CLASS_NAME,using="overlay__search")
	public WebElement Search;
	
	
}
