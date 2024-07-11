import Basepage from "./base.page.ts";


class DashBoardPage extends Basepage {

    //TODO: upgrade this selector to make dynamic and be able to choose any
    //card available 
    get firstCard(){
        return $("a[href$='companies/35']");
      }

         /**
     * opens the pop up to choose the dashboard page to create a widget
     */
    public async openPopUpWidgets() {
        this.waitElementToBeDisplayed(await this.firstCard);
        await this.firstCard.click();
    }

    
}


const dashboardPage= new DashBoardPage();
export default dashboardPage;