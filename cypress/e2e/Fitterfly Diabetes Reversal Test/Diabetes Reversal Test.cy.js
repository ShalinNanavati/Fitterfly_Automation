
describe('Fitterfly Diabetes Reversal Test', () => {
 
  
  it('Verify Diabetes Reversal Test', () => {
  
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
    cy.get("#input").type("70")  //Weight
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
    cy.get(".default-text").scrollIntoView().should('contain','Your Health Summary')


  })
  


    it('Verify Fitterfly Diabetes Prevention Test', () => {

    cy.visit("https://www.fitterfly.com/hybrid-reversal-calculator-blog")
    cy.get("#txtName").type("TEST")
    cy.get("#txtEmail").type('TEST@gmail.com')
    cy.get("#numMobileNo").type(9428632838)
    cy.get("#city").type('Surat')
    cy.xpath("//a[normalize-space()='CONTINUE']").click()

    
    //OTP Verification Page
    cy.get("#first-main").type(1)
    cy.get("#second-main").type(2)
    cy.get("#third-main").type(3)
    cy.get("#fourth-main").type(4)


    //Find your chances of reducing or stopping diabetes medicines

    // 3-Checkbox selection
    cy.xpath("//span[@ng-class=\"{'active': person.modyOption}\"]").click()  
    cy.xpath("//span[@ng-class=\"{'active': person.femaleOption}\"]").click()
    cy.xpath("//span[@ng-class=\"{'active' : person.otherOption}\"]").click()

    cy.xpath("//div[@class='form-field-set']//input[@id='input']").type(35)  //Age
    cy.xpath("//div[contains(text(),'Male')]").click()  //Gender selection -male
    cy.xpath("//div[contains(@class,'form-field-second')]//select[contains(@class,'select-icon ng-pristine ng-untouched ng-valid ng-scope ng-empty')]").select(10) //5.7 option
    cy.xpath("(//input[@id='input'])[2]").type(70)
    cy.xpath("(//select[@class='select-icon ng-pristine ng-untouched ng-valid ng-scope ng-empty'])[1]").select(3)  //I don't know option -HbA1c
    cy.xpath("//div[@class='form-field-set second']//select[@class='select-icon ng-pristine ng-untouched ng-valid ng-empty']").select(1) // Duration of diabetes - <1 year
    cy.xpath("//div[@class='form-field-set third']//select[@class='select-icon ng-pristine ng-untouched ng-valid ng-empty']").select(6) //medicine - None
    cy.xpath("//div[contains(text(),'No')]").click() // History - No selection
    cy.xpath("//select[contains(@class,'select-icon ng-pristine ng-untouched ng-valid ng-empty')]").select(1) // Pressure selction - No idon't option

     cy.xpath("//a[normalize-space()='GET REVERSAL REPORT']").click() // Get Reversal Report button  
     cy.wait(10000)

     // Final Page 
     cy.xpath("//h3[contains(text(),'Thanks for taking the assessment for your diabetes')]").should('contain','Thanks for taking the assessment for your diabetes goals')
     cy.xpath("//img[@src='/campaign/image/check-logo.svg']").should('be.visible')
     cy.xpath("//div[@class='email-report-info']//h3[1]").should('contain','The report has been emailed to')

 
 })
   

 
})
