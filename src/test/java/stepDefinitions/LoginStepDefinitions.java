package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class LoginStepDefinitions {
	
	WebDriver driver;
	@Given("^user already on login page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium Libs\\chromedriver\\chromedriver.exe");
	    driver=new ChromeDriver();
		driver.get("https://www.freecrm.com");
	}

	@SuppressWarnings("deprecation")
	@When("^title of login page is Free CRM software in the cloud powers sales and customer service$")
	public void title_of_login_page_is_Free_CRM_software_in_the_cloud_powers_sales_and_customer_service(){
	    String title=driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() {
	    driver.findElement(By.name("username")).sendKeys("tiny06");
	    driver.findElement(By.name("password")).sendKeys("tiny06");
	    
	    
	}

	@Then("^user clicks login button$")
	public void user_clicks_login_button()  {
		WebElement loginBtn=driver.findElement(By.xpath("//input[@value='Login']"));
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();",loginBtn );
		
	}

	@SuppressWarnings("deprecation")
	@Then("^user is on home page$")
	public void user_is_on_home_page(){
		String title=driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("CRMPRO", title);
	}



}
