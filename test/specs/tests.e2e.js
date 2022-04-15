const MainPage = require('../pageobjects/main.page');


// MainPage.open() can be moved in to run before all tests

describe('Verify results match the search criteria for first page' , ()=>{

    it('should verify that all displayed properties for sale contain the selected location' , async()=>{
        // we use location as a variable so we can do some assertion
        let location = "Dubai Marina";
        // open main page
        await MainPage.open();
        // Select to buy in main form
        await MainPage.selectToBuy();
        // set the location
        await MainPage.setLocation(location);
        // search for properties
        await MainPage.search();
        // iterate through the first page articles for start 
        // check if location is in description of the article
    })
});



describe('Verify Popular Searches links work correctly' , ()=>{

    it('Validate links under Dubai apartments are functioning correctly' , async()=>{
        // open main page
        await MainPage.open();
        // select To Rent in Popular Searches

        // select view all

        // get list of all the links

        // iterate and check if links are valid

        
    })
});



describe('Verify results match the search criteria for all pages' , ()=>{

    it('should verify that all displayed properties for sale contain the selected location' , async()=>{
        // we use location as a variable so we can do some assertion
        let location = "Dubai Marina";
        // open main page
        await MainPage.open();
        // Select to buy in main form
        await MainPage.selectToBuy();
        // set the location
        await MainPage.setLocation(location);
        // search for properties
        await MainPage.search();
        // iterate through the all the articles for all pages 

        // check if location is in description of the article
    })
});