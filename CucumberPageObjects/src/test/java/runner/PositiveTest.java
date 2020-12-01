package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        plugin = {"json:target/positive/cucumber.json", "pretty", "html:target/positive/cucumber.html"},
        features = "src/test/resources/features",
        glue = "Steps",
        monochrome = true,
        tags = {"@ValidateReports"}        
        )
public class PositiveTest extends AbstractTestNGCucumberTests {
	
	
}
