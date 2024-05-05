
describe('Fitterfly Diabetes Reversal Different Test Scenarios', () => {
 
  // BMI Scenarios ----->>>>>>>>>>
  
    it('Verifying BMI - Underweight at Diabetes Reversal Test', () => {
    
        cy.visit("https://www.fitterfly.com/reversal-calculator")
        cy.wait(2000)
        cy.get("#txtName").scrollIntoView().type('Test') // Input Name
        cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
        cy.get("#city").type('Sur')
        cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
       
        cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
        
    
        //Enter OTP
        cy.get("#first-main").type(1) 
        cy.get("#second-main").type(2)
        cy.get("#third-main").type(3)
        cy.get("#fourth-main").type(4)
    
    
        // You're one step away from your healthy future Page
        cy.get("input[placeholder='Years']").type(35)  //Age
        cy.get("#input").type("55")  //Weight
        cy.get("input[placeholder='cm']").type(170) //Height
        cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
        cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(6)  //HBA1C 
        cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
        cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
        cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
        cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
        cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
        cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
      
         
        cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
        cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
        cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
     
      
        // You are almost done page
        cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
        cy.xpath("(//span)[35]").click()  //Have you been stressed lately
        cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
        cy.xpath("(//span)[40]").click() // Are you physically active?
        cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button
    
       
        //Your score page
        cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
        cy.xpath("//span[normalize-space()='Underweight']").should('contain','Underweight')
        cy.xpath("//p[contains(text(),'We would be delighted to assist you in achieving a')]").scrollIntoView().should('contain','Healthy Weight')
    
      })
     

   
      it('Verifying BMI - Normal/Healthy at Diabetes Reversal Test', () => {
    
        cy.visit("https://www.fitterfly.com/reversal-calculator")
        cy.wait(2000)
        cy.get("#txtName").scrollIntoView().type('Test') // Input Name
        cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
        cy.get("#city").type('Sur')
        cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
       
        cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
        
    
        //Enter OTP
        cy.get("#first-main").type(1) 
        cy.get("#second-main").type(2)
        cy.get("#third-main").type(3)
        cy.get("#fourth-main").type(4)
    
    
        // You're one step away from your healthy future Page
        cy.get("input[placeholder='Years']").type(35)  //Age
        cy.get("#input").type("65")  //Weight
        cy.get("input[placeholder='cm']").type(170) //Height
        cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
        cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(6)  //HBA1C 
        cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
        cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
        cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
        cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
        cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
        cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
      
         
        cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
        cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
        cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
     
      
        // You are almost done page
        cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
        cy.xpath("(//span)[35]").click()  //Have you been stressed lately
        cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
        cy.xpath("(//span)[40]").click() // Are you physically active?
        cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button
    
       
        //Your score page
        cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
        cy.xpath("//span[normalize-space()='Healthy']").should('contain','Healthy')
        cy.get("body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > strong:nth-child(2)").should('contain','5 Kg')
    
      })




      it('Verifying BMI - Overweight at Diabetes Reversal Test', () => {
    
        cy.visit("https://www.fitterfly.com/reversal-calculator")
        cy.wait(2000)
        cy.get("#txtName").scrollIntoView().type('Test') // Input Name
        cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
        cy.get("#city").type('Sur')
        cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
       
        cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
        
    
        //Enter OTP
        cy.get("#first-main").type(1) 
        cy.get("#second-main").type(2)
        cy.get("#third-main").type(3)
        cy.get("#fourth-main").type(4)
    
    
        // You're one step away from your healthy future Page
        cy.get("input[placeholder='Years']").type(35)  //Age
        cy.get("#input").type("75")  //Weight
        cy.get("input[placeholder='cm']").type(170) //Height
        cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
        cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(6)  //HBA1C 
        cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
        cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
        cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
        cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
        cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
        cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
      
         
        cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
        cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
        cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
     
      
        // You are almost done page
        cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
        cy.xpath("(//span)[35]").click()  //Have you been stressed lately
        cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
        cy.xpath("(//span)[40]").click() // Are you physically active?
        cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button
    
       
        //Your score page
        cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
        cy.xpath("//span[normalize-space()='Overweight']").should('contain','Overweight')
        cy.get("body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > strong:nth-child(2)").should('contain','7 Kg')
    
      })


      it('Verifying BMI - Obese at Diabetes Reversal Test', () => {
    
        cy.visit("https://www.fitterfly.com/reversal-calculator")
        cy.wait(2000)
        cy.get("#txtName").scrollIntoView().type('Test') // Input Name
        cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
        cy.get("#city").type('Sur')
        cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
       
        cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
        
    
        //Enter OTP
        cy.get("#first-main").type(1) 
        cy.get("#second-main").type(2)
        cy.get("#third-main").type(3)
        cy.get("#fourth-main").type(4)
    
    
        // You're one step away from your healthy future Page
        cy.get("input[placeholder='Years']").type(35)  //Age
        cy.get("#input").type("85")  //Weight
        cy.get("input[placeholder='cm']").type(170) //Height
        cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
        cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(6)  //HBA1C 
        cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
        cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
        cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
        cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
        cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
        cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
      
         
        cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
        cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
        cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
     
      
        // You are almost done page
        cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
        cy.xpath("(//span)[35]").click()  //Have you been stressed lately
        cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
        cy.xpath("(//span)[40]").click() // Are you physically active?
        cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button
    
       
        //Your score page
        cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
        cy.xpath("//span[normalize-space()='Obese']").should('contain','Obese')
        cy.get("body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > strong:nth-child(2)").should('contain','10 Kg')
    
      })
      
 // HbA1C Secanrios ------>>>>>>>

   it('Verifying HbA1c - Fairly Controlled at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(35)  //Age
    cy.get("#input").type("85")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(7.5)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
    cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
    cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
    cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
    cy.xpath("(//span)[35]").click()  //Have you been stressed lately
    cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
    cy.xpath("(//span)[40]").click() // Are you physically active?
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.xpath("//span[normalize-space()='Fairly controlled']").scrollIntoView().should('contain','Fairly controlled')

  })


    it('Verifying HbA1c - Well Controlled at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(35)  //Age
    cy.get("#input").type("85")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(6)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
    cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
    cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
    cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
    cy.xpath("(//span)[35]").click()  //Have you been stressed lately
    cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
    cy.xpath("(//span)[40]").click() // Are you physically active?
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.xpath("//span[normalize-space()='Well controlled']").should('contain','Well controlled')

  })


    it('Verifying HbA1c - Poorly Controlled at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(35)  //Age
    cy.get("#input").type("85")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(9)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
    cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
    cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
    cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
    cy.xpath("(//span)[35]").click()  //Have you been stressed lately
    cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
    cy.xpath("(//span)[40]").click() // Are you physically active?
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.xpath("//span[normalize-space()='Poorly controlled']").should('contain','Poorly controlled')

  })


// HbA1c Reduction Scenarios ---->>>>>


  it('Verifying 0.5% Reduction in HbA1c at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(35)  //Age
    cy.get("#input").type("85")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(6)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
    cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
    cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
    cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
    cy.xpath("(//span)[35]").click()  //Have you been stressed lately
    cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
    cy.xpath("(//span)[40]").click() // Are you physically active?
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.get("body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > strong:nth-child(2)").should('contain','0.5% points')

  })


  it('Verifying 0.6% Reduction in HbA1c at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(35)  //Age
    cy.get("#input").type("85")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(6.7)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
    cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
    cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
    cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
    cy.xpath("(//span)[35]").click()  //Have you been stressed lately
    cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
    cy.xpath("(//span)[40]").click() // Are you physically active?
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.get("body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > strong:nth-child(2)").should('contain','0.6% points')

  })

  it('Verifying 1% Reduction in HbA1c at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(35)  //Age
    cy.get("#input").type("85")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(9)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
    cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
    cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
    cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
    cy.xpath("(//span)[35]").click()  //Have you been stressed lately
    cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
    cy.xpath("(//span)[40]").click() // Are you physically active?
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.get("body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > strong:nth-child(2)").should('contain','1% points')

  })

  it('Verifying 1.5% Reduction in HbA1c at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(35)  //Age
    cy.get("#input").type("85")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(11)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(3) //Duration of diabetes
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
    cy.xpath("(//span[contains(@class,'checkmark')])[3]").click({force: true}) // Family History
    cy.xpath("(//span[contains(@class,'checkmark')])[5]").click({force: true}) // Insulin
    cy.get("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click({force: true}) // Doctor visit
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
    cy.xpath("(//span)[35]").click()  //Have you been stressed lately
    cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
    cy.xpath("(//span)[40]").click() // Are you physically active?
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.get("body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > strong:nth-child(2)").should('contain','1.5% points')

  })

// Score ------------>>>>>>>>

it.skip('Verifying Excellent Score (17-20) at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(35)  //Age
    cy.get("#input").type("65")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(5.1)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(4) //Duration of diabetes <1
    cy.wait(5000)
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(4) //No.of Medicine dropdown
    cy.wait(2000) //0
    cy.xpath("(//span)[11]").click({force: true}) // Family History
    cy.wait(2000)
    cy.xpath("(//span)[14]").click({force: true}) // Insulin
    cy.wait(2000)
    cy.xpath("(//label[contains(@class,'radio-box')][normalize-space()='No'])[3]").click({force: true}) // Doctor visit
    cy.wait(2000)
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.wait(2000)
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.wait(2000)
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2) //Once or twice
    cy.xpath("(//span)[35]").click()  //Have you been stressed lately
    cy.wait(2000)
    cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
    cy.wait(2000)
    cy.xpath("(//span)[40]").click() // Are you physically active?
    cy.wait(2000)
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.xpath("//div[@class='speedo-info']").scrollIntoView().should('contain','Congrats! You have an excellent chance of achieving diabetes remission (popularly known as reversal)')

 })


  it.skip('Verifying Good Score (12-16) at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(35)  //Age
    cy.get("#input").type("65")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(5.1)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(2) //Duration of diabetes
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(2) //No.of Medicine dropdown
    cy.xpath("(//span)[11]").click({force: true}) // Family History
    cy.xpath("(//span)[14]").click({force: true}) // Insulin
    cy.xpath("(//label[contains(@class,'radio-box')][normalize-space()='No'])[3]").click({force: true}) // Doctor visit
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
    cy.xpath("(//span)[35]").click()  //Have you been stressed lately
    cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
    cy.xpath("(//span)[40]").click() // Are you physically active?
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.xpath("//div[@class='speedo-info']").should('contain','Congrats! You have a good chance of achieving diabetes remission (popularly known as reversal)')

  })


  it('Verifying Average Score (5-12) at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(35)  //Age
    cy.get("#input").type("65")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(5.1)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(1) //Duration of diabetes
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(1) //No.of Medicine dropdown
    cy.xpath("(//span)[11]").click({force: true}) // Family History
    cy.xpath("(//span)[13]").click({force: true}) // Insulin
    cy.xpath("(//label[contains(@class,'radio-box')][normalize-space()='Yes'])[3]").click({force: true}) // Doctor visit
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(2)
    cy.xpath("(//span)[35]").click()  //Have you been stressed lately
    cy.xpath("(//span)[37]").click() //Do you get quality 7-8 hours sleep everyday
    cy.xpath("(//span)[40]").click() // Are you physically active?
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.xpath("//div[@class='speedo-info']").should('contain','Congrats! Your health profile reveals that you have an excellent chance to reduce the number')

  })


    it('Verifying Poor Score (0-5) at Diabetes Reversal Test', () => {
    
    cy.visit("https://www.fitterfly.com/reversal-calculator")
    cy.wait(2000)
    cy.get("#txtName").scrollIntoView().type('Test') // Input Name
    cy.get("#numMobileNo").scrollIntoView().type(9428632838)  // Input Number
    cy.get("#city").type('Sur')
    cy.xpath("//li[contains(text(),'Surendranagar')]").click().wait(2000)
   
    cy.xpath("//div[@id='banner-form']//div[contains(@class,'form-container')]//div//div[contains(@class,'button-block')]//div[contains(@class,'button')]").click({force: true})  //Proceed Button
    

    //Enter OTP
    cy.get("#first-main").type(1) 
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    // You're one step away from your healthy future Page
    cy.get("input[placeholder='Years']").type(65)  //Age
    cy.get("#input").type("55")  //Weight
    cy.get("input[placeholder='cm']").type(170) //Height
    cy.xpath("//label[normalize-space()='Male']").click()  // Gender select
    cy.get("input[placeholder='e.g. 5.1, 6, 7.3']").type(5.1)  //HBA1C 
    cy.get("select[ng-model='person.diabetes_duration']").select(1) //Duration of diabetes
    cy.xpath("//select[@class='select tabbable-select ng-pristine ng-untouched ng-valid ng-empty']").select(1) //No.of Medicine dropdown
    cy.xpath("(//span)[11]").click({force: true}) // Family History
    cy.xpath("(//span)[13]").click({force: true}) // Insulin
    cy.xpath("(//label[contains(@class,'radio-box')][normalize-space()='Yes'])[3]").click({force: true}) // Doctor visit
    cy.xpath("//div[contains(@ng-show,'showHealthProfileForm')]//div[contains(@class,'button md-button')]").click({force: true}) // Proceed button
  
     
    cy.xpath("(//span[contains(@class,'checkmark-box')])[6]").click() // Other medical conditon option
    cy.xpath("(//span[contains(@class,'checkmark-box')])[13]").click() // Which of the following applies to you?
    cy.xpath("(//div[contains(@class,'button md-button')])[2]").click() // Proceed button
 
  
    // You are almost done page
    cy.get(".select.ng-pristine.ng-untouched.ng-valid.ng-empty").select(1)
    cy.xpath("(//span)[34]").click()  //Have you been stressed lately
    cy.xpath("(//span)[38]").click() //Do you get quality 7-8 hours sleep everyday
    cy.xpath("(//span)[41]").click() // Are you physically active?
    cy.xpath("(//div[contains(@class,'button md-button')])[3]").click() //Proceed button
    cy.wait(2000)

   
    //Your score page
    cy.get(".speedo-title").scrollIntoView().should('contain','Your Score')
    cy.xpath("//div[@class='speedo-info']").should('contain','Congrats! Your health profile reveals that you have a good chance to reduce the number')

  })


})
