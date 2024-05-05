
describe('Fitterfly Diabetes Reversal Test', () => {
 
  
  it('Verify Prediabetes Risk Test', () => {
  

    //Main Page 
    cy.visit("https://www.fitterfly.com/prediabetes-risk-test")
    cy.get("div[class='banner-info'] a[class='btn calc-btn']").should('have.text','Check Now ').click()
    cy.get("body > section:nth-child(5) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > span:nth-child(1)").click()
    
    //Gender selection page
    cy.get(".btn.btn-arrow.calc-btn").should('contain','Next').click()  // Man-women selection
    cy.wait(2000)
    


    //BMI Page
    cy.get("#myForm > div > div.ques-head.default > div.g-cols.offset_default.selection-block > div:nth-child(1) > select").select("object:33")
    cy.get("input[placeholder='In Kg']").type(70)
    cy.xpath("//i[normalize-space()='Normal']").should('contain','Normal')
    cy.get(".btn.btn-arrow.calc-btn").should('contain','Next').click() 
    cy.wait(2000)

    //Age Page
    cy.get("#input").type(35)
    cy.get(".btn.btn-arrow.calc-btn").should('contain','Next').click() 
    cy.wait(2000)

    //Origin Page
    cy.xpath("//div[@class='question-block ng-scope']//div[1]//div[1]//div[1]//span[1]").click()
    cy.get(".btn.btn-arrow.calc-btn").should('contain','Next').click()
    cy.wait(2000)


    //Family history page
    cy.xpath("//div[contains(@class,'single-que bb')]//div[1]//span[1]").click()
    cy.get(".btn.btn-arrow.calc-btn").should('contain','Next').click() 
    cy.wait(2000)


    //Blood Pressure page
    cy.xpath("//div[contains(@class,'single-que bb')]//div[1]//span[1]").click()
    cy.xpath("//a[normalize-space()='Next']").should('contain','Next').click() 
    cy.wait(2000)

    
    //Excercie page
    cy.xpath("//div[contains(@class,'single-que bb')]//div[1]//span[1]").click()
    cy.xpath("//a[normalize-space()='Next']").should('contain','Next').click() 
    cy.wait(2000)

    //Final page
    cy.xpath("//span[@class='score-head']").should("contain",'your score')
    cy.xpath("//a[normalize-space()='Get my results']").scrollIntoView().should('contain','Get my results')
  })
  
   
//////////////////////////////////////////////////////////////////////////////////////////////////

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
  

})

  
  