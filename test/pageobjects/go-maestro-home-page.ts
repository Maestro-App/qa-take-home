import Basepage from "./base.page.ts";


class GoMaestroHomePage extends Basepage {

get emailInpunt() {
    return $("[type=email]");
}
get passwordInpunt() {
  return $("[type=password]");
}

get loginButton(){
  return $("[type=submit]");
}

get maestroLogo(){
  return $("[alt=Maestro]");
}

get iconAvatar(){
  return $('[data-testid="avatar"]');
}

  
     /**
   *  Open the go maestro page
   */
     async openGoMaestroPage() {
        this.open("https://public.test-go-maestro.com/");
        browser.pause(120000);
    }

    /**
     * login into the page taking the correct credentials from json file
     */
    public async sendKeysAndLogin() {
      this.waitElementToBeDisplayed(await this.emailInpunt);
      this.waitElementToBeDisplayed(await this.passwordInpunt);
      await this.emailInpunt.setValue("syance6@gmail.com");
      await this.passwordInpunt.setValue("123456Ad");
      await this.loginButton.click();
  }
/**
     * login into the page taking the correct credentials from json file
     */
public async validateUserIsLoginIntoMaestro() {
  this.waitElementToBeDisplayed(await this.maestroLogo);
  this.waitElementToBeDisplayed(await this.iconAvatar);
 
}

}

const goMaestroHomePage= new GoMaestroHomePage();
export default goMaestroHomePage;