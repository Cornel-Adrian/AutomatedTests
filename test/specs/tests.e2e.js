const MainPage = require('../pageobjects/main.page');


// MainPage.open() can be moved in to run before all tests

describe('Verify results match the search criteria' , ()=>{

    it('should verify that all displayed properties for sale contain the selected location' , async()=>{
        // we use location as a variable so we can do some assertion
        let location = "Dubai";
        await MainPage.open();
        await MainPage.selectToBuy();
        await MainPage.setLocation(location);
        await MainPage.search();
    })
});



describe('Verify Popular Searches links work correctly' , ()=>{

    it('Validate links under Dubai apartments are functioning correctly' , async()=>{
        await MainPage.open();
        
    })
});