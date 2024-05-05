describe('Fitterfly Fit-Heart Calculator', () => {
   
   it('FitHeart Calculator Test Case-1',()=> {

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
      cy.xpath("(//input)[42]").type(120) // Fasting blood glucose
      cy.xpath("//input[contains(@placeholder,'%')]").type(7.5) // HbA1c
      cy.xpath("//input[contains(@ng-model,'person.systolic')]").type(135)  //Systolic Value
      cy.xpath("//input[contains(@ng-model,'person.diastolic')]").type(92) //Diastolic value
      cy.xpath("//span[normalize-space()='Finish']").click() //Finish button
      cy.wait(2000)
   
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

   ///////////////////////////////////////////////////////////////////////////////////////////////

 it('FitHeart Calculator Test Case-2',()=> {

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
   cy.xpath("//input[@placeholder='Years']").type(20)  // Age
   cy.xpath("//label[normalize-space()='Male']").click() // Gender selection-Male
   cy.xpath("//input[@id='input']").type(50) // Weigth
   cy.xpath("//input[@placeholder='cm']").type(160) //Height
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
   cy.wait(1000)

   //STEP-2 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[contains(text(),'I limit or restrict high-carb foods most of the ti')]").click() //c
   cy.xpath("//label[normalize-space()='60-89 minutes']").click() //d
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click()  // Proceed Button
   cy.wait(1000)


   //STEP-3 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I smoke occasionally']").click() //d
   cy.wait(1000)
   cy.xpath("//label[normalize-space()='Around 9 to 10 hours']").click() //f
   cy.wait(1000)
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Button
   cy.wait(1000)


   //STEP-4 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.wait(1000)
   cy.xpath("//label[@class='checkbox-item radio-box']//span[@class='checkmark-box']").click() // I dont know 
   cy.wait(2000)
   cy.xpath("//label[normalize-space()='No']").click() //b
   //cy.xpath("//label[normalize-space()='No']").click()
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
   cy.wait(1000)

   //STEP-5 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I do not have diabetes']").click({force: true})
   cy.wait(1000)
   cy.xpath("//input[contains(@ng-model,'person.systolic')]").type(125)  //Systolic Value
   cy.xpath("//input[contains(@ng-model,'person.diastolic')]").type(82) //Diastolic value
   cy.xpath("//span[normalize-space()='Finish']").click() //Finish button
   cy.wait(2000)

   // Final Result Page

   cy.xpath("//div[@class='calcul-score-title']").should('contain','Cardiovascular Score')
   cy.xpath("//strong[normalize-space()='74']").should('contain',74) // CV score
   cy.xpath("//div[@class='calcul-tag warning']").should('contain','Moderate risk') // Moderate Risk
   cy.xpath("//h2[normalize-space()='Thank You for Your Response!']").should('contain','Thank You for Your Response!')
   cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/strong[1]").should('contain','22 years')
   cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/strong[1]").should('contain','4%')
   cy.xpath("(//div[@class='report-title'])[1]").should('contain','Your heart age is')
   cy.xpath("(//div[@class='report-title'])[2]").should('contain','Your risk for heart disease is')
   cy.xpath("//strong[normalize-space()='Insights']").should('contain','Insights')
   cy.xpath("//strong[normalize-space()='Top 3 Risk Contributors']").should('contain','Top 3 Risk Contributors')
   cy.xpath("//h2[normalize-space()='Fitterfly FitHeart Program']").should('contain','Fitterfly FitHeart Program')

})

/////////////////////////////////////////////////////////////////////////////////////////////////



it('FitHeart Calculator Test Case-3',()=> {

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
   cy.xpath("//input[@placeholder='Years']").type(70)  // Age
   cy.xpath("//label[normalize-space()='Female']").click() // Gender selection-Female
   cy.xpath("//input[@id='input']").type(70) // Weigth
   cy.xpath("//input[@placeholder='cm']").type(155) //Height
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
   cy.wait(1000)

   //STEP-2 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[contains(text(),'I choose both high and low carb foods equally with')]").click() //b
   cy.xpath("//label[normalize-space()='30-59 minutes']").click() //d
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click()  // Proceed Button
   cy.wait(1000)


   //STEP-3 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I have never smoked']").click() //a
   cy.wait(1000)
   cy.xpath("//label[normalize-space()='Around 6 to 7 hours']").click() //d
   cy.wait(1000)
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Button
   cy.wait(1000)


   //STEP-4 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.wait(1000)
   cy.xpath("//label[@class='checkbox-item radio-box']//span[@class='checkmark-box']").click() // I dont know 
   cy.wait(2000)
   cy.xpath("//label[normalize-space()='Yes']").click() //a
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
   cy.wait(1000)

   //STEP-5 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I have diabetes']").click({force: true})
   cy.wait(1000)
   cy.xpath("(//input)[42]").type(120) // Fasting bloos glucose
   cy.xpath("//input[contains(@placeholder,'%')]").type(8.5) // HbA1c
   cy.xpath("//input[contains(@ng-model,'person.systolic')]").type(135)  //Systolic Value
   cy.xpath("//input[contains(@ng-model,'person.diastolic')]").type(95) //Diastolic value
   cy.xpath("//span[normalize-space()='Finish']").click() //Finish button
   cy.wait(1000)

   // Final Result Page

   cy.xpath("//div[@class='calcul-score-title']").should('contain','Cardiovascular Score')
   cy.xpath("//div[@class='total-calcul-score warning']//strong[contains(text(),'55')]").should('contain',55) // CV score
   cy.xpath("//div[@class='calcul-tag warning']").should('contain','Moderate risk') // Moderate Risk
   cy.xpath("//h2[normalize-space()='Thank You for Your Response!']").should('contain','Thank You for Your Response!')
   cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/strong[1]").should('contain','82 years')
   cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/strong[1]").should('contain','15%')
   cy.xpath("(//div[@class='report-title'])[1]").should('contain','Your heart age is')
   cy.xpath("(//div[@class='report-title'])[2]").should('contain','Your risk for heart disease is')
   cy.xpath("//strong[normalize-space()='Insights']").should('contain','Insights')
   cy.xpath("//strong[normalize-space()='Top 3 Risk Contributors']").should('contain','Top 3 Risk Contributors')
   cy.xpath("//h2[normalize-space()='Fitterfly FitHeart Program']").should('contain','Fitterfly FitHeart Program')

})


///////////////////////////////////////////////////////////////////////////

it('FitHeart Calculator Test Case-4',()=> {

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
   cy.xpath("//input[@placeholder='Years']").type(25)  // Age
   cy.xpath("//label[normalize-space()='Female']").click() // Gender selection-Female
   cy.xpath("//input[@id='input']").type(40) // Weigth
   cy.xpath("//input[@placeholder='cm']").type(155) //Height
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
   cy.wait(1000)

   //STEP-2 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I choose a balanced diet all the time']").click() //d
   cy.xpath("//label[normalize-space()='> 150 minutes']").click() //g
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click()  // Proceed Button
   cy.wait(1000)


   //STEP-3 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I have never smoked']").click() //a
   cy.wait(1000)
   cy.xpath("//label[normalize-space()='Around 7 to 9 hours']").click() //e
   cy.wait(1000)
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Button
   cy.wait(1000)


   //STEP-4 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.wait(1000)
   cy.xpath("(//input)[36]").type(120) // Total Cholestrol
   cy.xpath("(//input)[37]").type(140) // LDL
   cy.xpath("(//input)[38]").type(47) //HDL
   //cy.xpath("//label[normalize-space()='No']").click()
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
   cy.wait(1000)

   //STEP-5 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I have never tested for diabetes']").click({force: true}) //b
   cy.wait(1000)
   cy.xpath("//input[contains(@ng-model,'person.systolic')]").type(145)  //Systolic Value
   cy.xpath("//input[contains(@ng-model,'person.diastolic')]").type(78) //Diastolic value
   cy.xpath("//span[normalize-space()='Finish']").click() //Finish button
   cy.wait(1000)

   // Final Result Page

   cy.xpath("//div[@class='calcul-score-title']").should('contain','Cardiovascular Score')
   cy.xpath("//strong[normalize-space()='84']").should('contain',84) // CV score
   cy.xpath("//div[@class='calcul-tag normal']").should('contain','Low risk') // Low Risk
   cy.xpath("//h2[normalize-space()='Thank You for Your Response!']").should('contain','Thank You for Your Response!')
   cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/strong[1]").should('contain','26 years')
   cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/strong[1]").should('contain','2%')
   cy.xpath("(//div[@class='report-title'])[1]").should('contain','Your heart age is')
   cy.xpath("(//div[@class='report-title'])[2]").should('contain','Your risk for heart disease is')
   cy.xpath("//strong[normalize-space()='Insights']").should('contain','Insights')
   cy.xpath("//strong[normalize-space()='Top 3 Risk Contributors']").should('contain','Top 3 Risk Contributors')
   cy.xpath("//h2[normalize-space()='Fitterfly FitHeart Program']").should('contain','Fitterfly FitHeart Program')

})

/////////////////////////////////////////////////////////////////////////////////////////////////


it('FitHeart Calculator Test Case-5',()=> {

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
   cy.xpath("//input[@placeholder='Years']").type(45)  // Age
   cy.xpath("//label[normalize-space()='Female']").click() // Gender selection-Female
   cy.xpath("//input[@id='input']").type(65) // Weigth
   cy.xpath("//input[@placeholder='cm']").type(155) //Height
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
   cy.wait(1000)

   //STEP-2 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I have irregular dietary patterns']").click() //e
   cy.xpath("//label[normalize-space()='30-59 minutes']").click() //c
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click()  // Proceed Button
   cy.wait(1000)


   //STEP-3 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I was a smoker and have quit recently']").click() //c
   cy.wait(1000)
   cy.xpath("//label[normalize-space()='Around 7 to 9 hours']").click() //e
   cy.wait(1000)
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Button
   cy.wait(1000)


   //STEP-4 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.wait(1000)
   cy.xpath("(//input)[36]").type(120) // Total Cholestrol
   cy.xpath("(//input)[37]").type(165) // LDL
   cy.xpath("(//input)[38]").type(37) //HDL
   //cy.xpath("//label[normalize-space()='No']").click()
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
   cy.wait(1000)

   //STEP-5 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I have never tested for diabetes']").click({force: true}) //b
   cy.wait(1000)
   cy.xpath("//input[contains(@ng-model,'person.systolic')]").type(135)  //Systolic Value
   cy.xpath("//input[contains(@ng-model,'person.diastolic')]").type(98) //Diastolic value
   cy.xpath("//span[normalize-space()='Finish']").click() //Finish button
   cy.wait(1000)

   // Final Result Page

   cy.xpath("//div[@class='calcul-score-title']").should('contain','Cardiovascular Score')
   cy.xpath("//strong[normalize-space()='45']").should('contain',45) // CV score
   cy.xpath("//div[@class='calcul-tag risk']").should('contain','High risk') // High Risk
   cy.xpath("//h2[normalize-space()='Thank You for Your Response!']").should('contain','Thank You for Your Response!')
   cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/strong[1]").should('contain','57 years')
   cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/strong[1]").should('contain','15%')
   cy.xpath("(//div[@class='report-title'])[1]").should('contain','Your heart age is')
   cy.xpath("(//div[@class='report-title'])[2]").should('contain','Your risk for heart disease is')
   cy.xpath("//strong[normalize-space()='Insights']").should('contain','Insights')
   cy.xpath("//strong[normalize-space()='Top 3 Risk Contributors']").should('contain','Top 3 Risk Contributors')
   cy.xpath("//h2[normalize-space()='Fitterfly FitHeart Program']").should('contain','Fitterfly FitHeart Program')

})



////////////////////////////////////////////////////////////////////////////////////

it('FitHeart Calculator Test Case-6',()=> {

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
   cy.xpath("//input[@placeholder='Years']").type(60)  // Age
   cy.xpath("//label[normalize-space()='Male']").click() // Gender selection-Male
   cy.xpath("//input[@id='input']").type(65) // Weigth
   cy.xpath("//input[@placeholder='cm']").type(160) //Height
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
   cy.wait(1000)

   //STEP-2 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I choose a balanced diet all the time']").click() //d
   cy.xpath("//label[normalize-space()='120-149 minutes']").click() //f
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click()  // Proceed Button
   cy.wait(1000)


   //STEP-3 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I smoke occasionally']").click() //d
   cy.wait(1000)
   cy.xpath("//label[normalize-space()='Around 6 to 7 hours']").click() //d
   cy.wait(1000)
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Button
   cy.wait(1000)


   //STEP-4 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.wait(1000)
   cy.xpath("//label[@class='checkbox-item radio-box']//span[@class='checkmark-box']").click() // I dont know 
   cy.wait(2000)
   cy.xpath("//label[normalize-space()='Yes']").click() //a
   cy.xpath("//div[@class='form-content']//span[contains(text(),'Proceed')]").click() //Proceed Butoon
   cy.wait(1000)

   //STEP-5 FORM

   cy.xpath("//a[normalize-space()='Exit']").should('be.visible')
   cy.xpath("//label[normalize-space()='I have diabetes']").click({force: true})
   cy.wait(1000)
   cy.xpath("(//input)[42]").type(112) // Fasting bloos glucose
   cy.xpath("//input[contains(@placeholder,'%')]").type(7.5) // HbA1c
   cy.xpath("//input[contains(@ng-model,'person.systolic')]").type(140)  //Systolic Value
   cy.xpath("//input[contains(@ng-model,'person.diastolic')]").type(95) //Diastolic value
   cy.xpath("//span[normalize-space()='Finish']").click() //Finish button
   cy.wait(1000)

   // Final Result Page

   cy.xpath("//div[@class='calcul-score-title']").should('contain','Cardiovascular Score')
   cy.xpath("//div[@class='total-calcul-score warning']//strong[contains(text(),'55')]").should('contain',55) // CV score
   cy.xpath("//div[@class='calcul-tag warning']").should('contain','Moderate risk') // Moderate Risk
   cy.xpath("//h2[normalize-space()='Thank You for Your Response!']").should('contain','Thank You for Your Response!')
   cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/strong[1]").should('contain','71 years')
   cy.xpath("//body[1]/div[3]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/strong[1]").should('contain','33%')
   cy.xpath("(//div[@class='report-title'])[1]").should('contain','Your heart age is')
   cy.xpath("(//div[@class='report-title'])[2]").should('contain','Your risk for heart disease is')
   cy.xpath("//strong[normalize-space()='Insights']").should('contain','Insights')
   cy.xpath("//strong[normalize-space()='Top 3 Risk Contributors']").should('contain','Top 3 Risk Contributors')
   cy.xpath("//h2[normalize-space()='Fitterfly FitHeart Program']").should('contain','Fitterfly FitHeart Program')

})


})

