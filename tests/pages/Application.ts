import { PageHolder } from "./AbstractClasses";
import { BasePage } from "./BasePage";
import { FrontendPage } from "./Frontend";

export class Application extends PageHolder {
    public basePage = new BasePage(this.page);
}

export class FrontendApp extends Application {
    public frontendPage = new FrontendPage(this.page);
}
