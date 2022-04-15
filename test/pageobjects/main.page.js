const Page = require("./page");



// /**
//  * a class to contain all the selectors and methods to the main page
//  */
const page = new Page;



class MainPage extends Page{



    // select Purpose div by class
    get inputPurpose()
    {
        return $('.e7c6503c');
    }

    // select Location input by class
    get inputLocation()
    {
        return $('.a41c4dcc._6a3a3de9');
    }
    
    // select the find a by class
    get findRedirect()
    {
        return $('a=Find');
    }

    // get the ul element containing all the articles if display is grid view
    get propertiesParentUlElementList()
    {
        return $('._357a9937');
    }

    // get ul element for properties pages
    get lisOfPagesForTheProperties (){
        return $('._92c36ba1');
    }


    // Div to select to rent for popular searches
    get popularSearchesToRentToSelect(){
        return $('.d8530318=ToRent');
    }

    // ul element containing all the Dubai Apartments in the To Rent in Popular Searches in the UAE
    get listOfDubaiApartments(){
        return $('._22762832');
    }

    // method to set the location
    async setLocation(location){
        await this.inputLocation.setValue(location);
    }


    // Press the find button/a link href
    async search()
    {
        await this.findRedirect.click();
    }

    // select purpose to buy
    async selectToBuy(){
        await this.$('.e7c6503c').click().$('_933a9a61._5dd5033c');
    }


    //select purpose to sell
    async selectToRent(){
        await this.$('.e7c6503c').click().$('_933a9a61._5dd5033c._8bfc3747');
    }
}

module.exports = new MainPage();