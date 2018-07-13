package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
//Data Table with List Object
public class DealStepDefinitions {
	
//WebDriver driver;
//	
//	@Given("^user already on login page$")
//	public void user_already_on_login_page() {
//		System.setProperty("webdriver.chrome.driver", "C:\\Selenium Libs\\chromedriver\\chromedriver.exe");
//	    driver=new ChromeDriver();
//		driver.get("https://www.freecrm.com");
//	}
//
//	@SuppressWarnings("deprecation")
//	@When("^title of login page is Free CRM software in the cloud powers sales and customer service$")
//	public void title_of_login_page_is_Free_CRM_software_in_the_cloud_powers_sales_and_customer_service(){
//	    String title=driver.getTitle();
//	    System.out.println(title);
//	    Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
//	}
//
//	
//	@Then("^user enters username and password$")
//	public void user_enters_username_and_password(DataTable credentials) {
//		List<List<String>> data=credentials.raw();
//	    driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
//	    driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//	    
//	    
//	}
//
//	@Then("^user clicks login button$")
//	public void user_clicks_login_button()  {
//		WebElement loginBtn=driver.findElement(By.xpath("//input[@value='Login']"));
//		JavascriptExecutor js=(JavascriptExecutor)driver;
//		js.executeScript("arguments[0].click();",loginBtn );
//		
//	}
//
//	@SuppressWarnings("deprecation")
//	@Then("^user is on home page$")
//	public void user_is_on_home_page(){
//		String title=driver.getTitle();
//	    System.out.println(title);
//	    Assert.assertEquals("CRMPRO", title);
//	}
//	
//	@Then("^user moves to Deals tab$")
//	public void user_moves_to_Deals_tab(){
//	    driver.switchTo().frame("mainpanel");
//	    WebElement contacts=driver.findElement(By.xpath("//a[text()='Deals']"));
//	    Actions act=new Actions(driver);
//	    act.moveToElement(contacts).build().perform();
//	    
//	}
//
//	@Then("^user clicks new deal$")
//	public void user_clicks_new_deal() {
//		driver.findElement(By.linkText("New Deal")).click();
//	}
//
//	@Then("^user inputs deal details$")
//	public void user_inputs_and(DataTable dealDetails) {
//		List<List<String>> data=dealDetails.raw();
//		driver.findElement(By.id("title")).sendKeys(data.get(0).get(0));
//	    driver.findElement(By.id("amount")).sendKeys(data.get(0).get(1));
//	    driver.findElement(By.id("probability")).sendKeys(data.get(0).get(2));
//	    driver.findElement(By.id("commission")).sendKeys(data.get(0).get(3));
//	    
//	}
//
//	@Then("^user clicks save button$")
//	public void user_clicks_save_button() {
//	    driver.findElement(By.xpath("//input[@value='Save']")).click();
//	}
//
//	
//	@Then("^user closes browser$")
//	public void user_closes_browser(){
//	   driver.quit();
//	}
//
//

}
