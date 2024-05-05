import jsPath from 'jspath';

describe('On Testing', () => {


    it('Chips Selection Functionality', ()=>{
       cy.visit("https://www.fitterfly.com/blog/diabetes-management/") ///////
       cy.wait(2000)
       cy.get(".cat-item.cat-item-402").click()
       cy.url().should('contain','diabetes-sleep-and-stress')
    
   })


    it('Search Functionality',()=>{
        cy.visit("https://www.fitterfly.com/blog/weight-loss-success-story-monica-aroras-weight-loss-victory/")
        cy.wait(2000)
        cy.get("div[id='ajaxsearchlite4'] input[placeholder='Search the blog...']").dblclick().wait(3000).type('victory').wait(3000)
        cy.get("div[id='ajaxsearchlite4'] span[class='innericon']").click({force: true})
        cy.wait(1000)
        cy.url().should('contain','s=victory')
        
        
    })


    it.only('FitHeart Calculator Test Case-1',()=> {

        cy.visit("https://www.fitterfly.com/heart-health-program")
        cy.xpath("//a[@class='button']").invoke('removeAttr','target').click({force: true})
        //cy.visit("https://www.fitterfly.com/heart-age-calculator")
        //cy.xpath("//div[@class='sticky-btn-block']//span[contains(text(),'Check your heart age')]").click() //
    
        cy.xpath("//input[@id='txtName']").type('TEST')  // Name
        cy.xpath("//input[@id='numMobileNo']").type(9428632838) // Mobile
        cy.xpath("//span[normalize-space()='Start Heart Health Test']").click() // Button click
        cy.wait(1000)
    
        //STEP-1 FORM
    
        cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
        cy.xpath("//input[@placeholder='Years']").type(65)  // Age
        cy.xpath("//label[normalize-space()='Male']").click() // Gender selection-Male
        cy.xpath("//input[@id='input']").type(90) // Weigth
        cy.xpath("//input[@placeholder='cm']").type(165) //Height
        cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
        cy.wait(1000)
    
        //STEP-2 FORM
    
        cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
        cy.xpath("//label[contains(text(),'I mostly choose high-carb foods, ocassional vegeta')]").click() //a
        cy.xpath("//label[normalize-space()='0 minutes']").click() //a
        cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click()  // Proceed Button
        cy.wait(1000)
    
    
        //STEP-3 FORM
    
        cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
        cy.xpath("//label[normalize-space()='I was a smoker and have quit recently']").click() //c
        cy.wait(1000)
        cy.xpath("//label[normalize-space()='Around 5 to 6 hours']").click() //c
        cy.wait(1000)
        cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Button
        cy.wait(1000)
    
    
        //STEP-4 FORM
    
        cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
        cy.wait(1000)
        cy.xpath("(//input)[36]").type(120) // Total Cholestrol
        cy.xpath("(//input)[37]").type(165) // LDL
        cy.xpath("(//input)[38]").type(55) //HDL
        //cy.xpath("//label[normalize-space()='No']").click()
        cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
        cy.wait(1000)
    
        //STEP-5 FORM
    
        cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
        cy.xpath("//label[normalize-space()='I have diabetes']").click({force: true})
        cy.wait(1000)
        cy.xpath("(//input)[42]").type(120) // Fasting bloos glucose
        cy.xpath("//input[contains(@placeholder,'%')]").type(7.5) // HbA1c
        cy.xpath("//input[contains(@ng-model,'person.systolic')]").type(135)  //Systolic Value
        cy.xpath("//input[contains(@ng-model,'person.diastolic')]").type(92) //Diastolic value
        cy.xpath("//span[normalize-space()='Finish']").click() //Finish button
        cy.wait(1000)
    
        // Final Result Page
    
        cy.xpath("//div[@class='calcul-score-title']").should('contain','Cardiovascular Score')
        cy.xpath("//strong[normalize-space()='35']").should('contain',35) // CV score
        cy.xpath("//div[@class='calcul-tag risk']").should('contain','High risk') // High Risk
        cy.xpath("//h2[normalize-space()='Thank You for Your Response!']").should('contain','Thank You for Your Response!')
        cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/strong[1]").should('contain','79 years')
        cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/strong[1]").should('contain','>56%')
        cy.xpath("(//div[@class='report-title'])[1]").should('contain','Your heart age is')
        cy.xpath("(//div[@class='report-title'])[2]").should('contain','Your risk for heart disease is')
        cy.xpath("//strong[normalize-space()='Insights']").should('contain','Insights')
        cy.xpath("//strong[normalize-space()='Top 3 Risk Contributors']").should('contain','Top 3 Risk Contributors')
        cy.xpath("//h2[normalize-space()='Fitterfly FitHeart Program']").should('contain','Fitterfly FitHeart Program')
    
     })
  
})
