
describe('Fitterfly All Pages', () => {
 
  it('Verify Fitterfly Homepage ', () => {
    cy.visit('www.fitterfly.com')
    cy.get("section[class='banner-home-carousel'] div:nth-child(2) div:nth-child(2) span:nth-child(1)").should('have.text','ISO 27001 & 13485 Certified')
    cy.get("div[class='section-intro'] span[class='gradient-title']").scrollIntoView().should('have.text','Getting started is easy')
    cy.wait(2000)
    cy.get("div[class='section-intro mb26 desktop-view'] span[class='gradient-title']").scrollIntoView().should('have.text','Help You Achieve Health Goals')
    cy.wait(2000)
    cy.get("section[class='section programs-section'] span[class='gradient-title']").scrollIntoView().should('have.text','Based on science, Crafted with love')
    cy.wait(2000)
    cy.get("div[class='section-intro'] h4").scrollIntoView().should('have.text','We’re super proud to be backed by leading investors')
    cy.wait(2000)
    cy.get("div[class='section-info'] h4[class='sec-head']").scrollIntoView().should('have.text',"Fitterfly's Digital Therapeutics (DTx) Program Suite")


    //cy.get(':nth-child(1) > .panel1 > .footer-links > :nth-child(1) > a').invoke('removeAttr','target').click()
    //cy.url().should('include','https://www.fitterfly.com/fitterfly-diabetes-care-plan')
 })

 
 it("Verify Click on Fitterfly logo at Home Page", ()=>{

  cy.visit("https://www.fitterfly.com/")
  cy.get("div[class='mob-main-header'] a").invoke('removeAttr','target').click({force: true})
  cy.url().should('include','fitterfly')
  cy.xpath("//h5[normalize-space()='PROGRAM OUTCOMES']").should('contain','PROGRAM OUTCOMES')
  cy.xpath("//a[contains(@class,'footer-logo')]//img[contains(@title,'Fitterfly HealthTech Pvt Ltd Logo')]").should('be.visible')

 })

 
// OUR PROGRAMS >> 

 it('Verify Our Programs > Fitterly Diabetes Prime Page ', () => {
    cy.visit("https://www.fitterfly.com/fitterfly-diabetes-care-plan")

    cy.get("div[class='col-lg-6'] div:nth-child(2) div:nth-child(2) span:nth-child(1)").should('have.text','ISO 27001 & 13485Certified')
    cy.get("section[class='section program-inclusion-sec'] h2").should('have.text',"What's in the Diabetes Prime program?")
    cy.get("body > div:nth-child(6) > section:nth-child(4) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > span:nth-child(1)").should('have.text','The Fitterfly Promise')


 })



 it('Verify Our Programs > Fitterfly Weight loss Page ', () => {
  cy.visit("https://www.fitterfly.com/fitterfly-weight-loss-program")

  cy.get("section[class='banner weight-loss-banner'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) span:nth-child(1)").should('have.text','ISO 27001 & 13485 Certified')
  cy.get("section[class='section program-inclusion-sec'] h2").should('have.text','How is the Fitterfly Weight Loss program different?')
  cy.get("section[id='pricing-sec'] h2:nth-child(1)").should('have.text','Lose weight with confidence!Fitterfly Weight Loss Program')


})

it.only('Verify Our Programs > Fitterfly Fit Heart Page ', () => {
  cy.visit("https://www.fitterfly.com/heart-health-program")

  cy.xpath("//h2[normalize-space()='Who is the FitHeart Program for?']").should('have.text','Who is the FitHeart Program for?')
  cy.xpath("//h2[normalize-space()='How to enroll in the FitHeart Program']").should('have.text','How to enroll in the FitHeart Program')
  cy.xpath("//h2[normalize-space()='Clinically Proven Outcomes of FitHeart Program']").should('have.text','Clinically Proven Outcomes of FitHeart Program')


})
  
// BLOG 
  
it('Verify Blog > Blog Home Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/")

  cy.get("h3[class='sec-title']").should('have.text','Trending Posts')
  cy.get("h4[class='sec-title']").should('have.text','Video Tutorials')


})

it('Verify Blog > Diabetes Management Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/diabetes-management/")

  cy.get("div[class='col-lg-12 first-fold col-sm-12 col-xs-12'] h6[class='category-name'] a:nth-child(1)").should('have.text','Diabetes Management')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')

})


it('Verify Blog > Weight loss Management Page  ', () => {
  cy.visit("https://www.fitterfly.com/blog/weight-loss-management/")

  cy.xpath("//a[@href='https://www.fitterfly.com/blog/make-exercise-a-habit/'][normalize-space()='Read this post']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})

it('Verify Blog > Know More Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/know-more/")

  
  cy.get("div[class='col-lg-7 s-left col-sm-7 col-xs-12'] a[class='read btn btn-secondary-blue']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})

it('Verify Blog > Diabetes Management > Diabetes Reversal Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/diabetes-management/diabetes-reversal/")

  
  cy.get("body > section:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > a:nth-child(2)").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})

it('Verify Blog > Diabetes Management > Nutrition Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/diabetes-management/diabetes-nutrition/")

  
  cy.get("div[class='col-lg-7 s-left col-sm-7 col-xs-12'] a[class='read btn btn-secondary-blue']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})

it('Verify Blog > Diabetes Management > Fitness Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/diabetes-management/diabetes-exercise/")

  
  cy.get("div[class='col-lg-7 s-left col-sm-7 col-xs-12'] a[class='read btn btn-secondary-blue']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})

it('Verify Blog > Diabetes Management > Sleep & Strees Management Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/diabetes-management/diabetes-sleep-and-stress/")

  
  cy.get("div[class='col-lg-7 s-left col-sm-7 col-xs-12'] a[class='read btn btn-secondary-blue']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})


it('Verify Blog > Diabetes Management > Medical Management Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/diabetes-management/medical-management-diabetes-management/")

  
  cy.get("div[class='col-lg-7 s-left col-sm-7 col-xs-12'] a[class='read btn btn-secondary-blue']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})


it('Verify Blog > Diabetes Management > Digital Therapy Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/diabetes-management/digital-therapy/")

  
  cy.get("div[class='col-lg-7 s-left col-sm-7 col-xs-12'] a[class='read btn btn-secondary-blue']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})


it('Verify Blog > Weight loss Management > Diet Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/weight-loss-management/nutrition-and-diet/")

  
  cy.get("div[class='col-lg-7 s-left col-sm-7 col-xs-12'] a[class='read btn btn-secondary-blue']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})

it('Verify Blog > Weight loss Management > Exercise Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/weight-loss-management/weight-loss-fitness/")

  
  cy.get("div[class='col-lg-7 s-left col-sm-7 col-xs-12'] a[class='read btn btn-secondary-blue']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})

it('Verify Blog > Weight loss Management > Mental Wellness Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/weight-loss-management/mental-wellness/")

  
  cy.xpath("//a[@href='https://www.fitterfly.com/blog/make-exercise-a-habit/'][normalize-space()='Read this post']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})

it('Verify Blog > Weight loss Management > PCOS Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/weight-loss-management/pcos/")

  
  cy.get("div[class='col-lg-7 s-left col-sm-7 col-xs-12'] a[class='read btn btn-secondary-blue']").should('have.text','Read this post ')
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
})



it('Verify Blog > Know More > Video Library Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/video-library/")
  cy.wait(1000)
  
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h1").should('have.text','Video Library')
  cy.get(".read.btn.btn-secondary-blue.btn-sm.btn-outline").should('have.text','View More Videos')
})

it("Verify Blog > Know More > Doctor's Digest Page" , () => {
  cy.visit("https://www.fitterfly.com/blog/know-more/doctors-digest/")

  
  cy.get("div[class='col-lg-12 col-sm-12 col-xs-12'] h2").should('have.text','Check Out Our Calculators')
  cy.get("div[class='col-lg-7 s-left col-sm-7 col-xs-12'] a[class='read btn btn-secondary-blue']").should('have.text','Read this post ')
})

// COMPANY >> 

it('Verify Company > About Us Page ', () => {
  cy.visit("https://www.fitterfly.com/about-us")

  cy.get("section[id='expert'] h2").should('have.text','Fitterfly in Numbers')
  cy.get("section[class='section expert-sec founding-core-team-sec'] h2:nth-child(1)").should('have.text','We are FitterflyThe team to get us there')
  cy.get("div[class='section-intro mb20'] h5").should('have.text',"Partners we collaborate with")
})

it('Verify Company > Careers and Culture Page ', () => {
  cy.visit("https://www.fitterfly.com/careers-and-culture")

  cy.get(".italic-text").should('have.text','Join us in a fulfilling & crazy ride!')
  cy.get("div[class='wrapper-fluids'] h2").should('have.text','Life at Fitterfly')
  cy.get(".gradient-title").should('have.text','Dive into the Employee Buzz About Us')

})

it('Verify Company > Reasearch Page ', () => {
  cy.visit("https://www.fitterfly.com/research/list")
  cy.wait(1000)

  cy.get("div[class='research-head'] h1").should('have.text','Research Centres')
  cy.get("div[class='search-filter-pad'] div[class='search-filter-list'] h5").should('have.text','Filter by')

})

it('Verify Company > Physician Partnership Page ', () => {
  cy.visit("https://www.fitterfly.com/diabetes-doctors")

  cy.get(".gradient-heading").should('have.text','Helping Patients Achieve Treatment Goals')
  cy.get(".dr-sub-text.mb-60").should('have.text','Nationwide Top Doctors Recommend FitterFly For Their Patients')

})


it('Verify Company > Corporate Wellness Page ', () => {
  cy.visit("https://www.fitterfly.com/diabetes-corporates")

  cy.get(".gradient-heading").should('have.text','A Smart Diabetes  Care Solution')
  cy.get("div[class='row flex-center mt-50'] h2").should('have.text','How Does This Benefit You?')

})


// ASSESSMENT TOOLS >> 

it('Verify Assessment Tools > Diabetes Reversal Calculator Page ', () => {
  cy.visit("https://www.fitterfly.com/reversal-calculator")

  cy.get("h1:nth-child(1)").should('have.text','Can you Reverse Diabetes*?')
  cy.get("div[class='section-intro left-align'] h2").should('have.text','What is Diabetes Reversal?')
  cy.get("section[id='review'] h2").should('have.text','What our members are saying about the reversal program')

})


it('Verify Assessment Tools > Pre- Diabetes Risk Calculator Page ', () => {
  cy.visit("https://www.fitterfly.com/prediabetes-risk-test")

  cy.get("div[class='banner-info'] h2").should('have.text','Are you at risk for')
  cy.get("div[class='l-subsection-h prediabets-msg pb0'] h2").should('have.text','Why is it important to Manage Prediabetes?')
  cy.get("div[class='l-subsection-h prediabets-msg'] h2").should('have.text','About The Prediabetes Risk Test')

})


it('Verify Assessment Tools > Weight loss Calculator Page ', () => {
  cy.visit("https://www.fitterfly.com/weight-loss-calculator")
  
  cy.get("div[class='banner-info'] h2").should('have.text','Will your weight keep you')
  cy.get("div[class='l-subsection-h prediabets-msg pb0'] h2").should('have.text','Do you think your weight is a healthy range?')

})


// SUCCESS STORIES >> 


it('Verify Success Stories > Diabetes Success Stories Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/diabetes-success-story-aastha-kaushik-if-a-14-year-old-can-beat-diabetes-you-too-can/")

  cy.get("div[class='col-lg-12 trending-sec popular col-sm-12 col-xs-12'] h3").should('have.text','Trending Posts')
  cy.xpath("//div[@class='like-sec-head']").should('have.text','You may also like')
  cy.xpath("//h3[@id='reply-title']").should('have.text','Leave a Reply Cancel reply')
})


it('Verify Success Stories > Weight loss Success Stories Page ', () => {
  cy.visit("https://www.fitterfly.com/blog/weight-loss-success-story-how-i-lost-12-kg-of-post-pregnancy-weight-and-regained-my-lost-confidence/")

  
   cy.get("div[class='col-lg-12 trending-sec popular col-sm-12 col-xs-12'] h3").should('have.text','Trending Posts')
   cy.xpath("//div[@class='like-sec-head']").should('have.text','You may also like')
   cy.xpath("//h3[@id='reply-title']").should('have.text','Leave a Reply Cancel reply')

})



// WEBINAR >> 


// it('Verify Webinar for Members Page ', () => {
//   cy.visit("https://www.fitterfly.com/webinar")

//   cy.get("div[class='ban-text'] h1").should('have.text','Webinars')
//   cy.get("div[class='search-filter-pad'] h5").should('have.text','Sort by')
   
// })


// FOOTER SECTION LINKS >> 

it('Verify Stress Management Page ', () => {
  cy.visit("https://www.fitterfly.com/health/psychological-well-being")

  cy.get("div[class='sec-head align-left desk-view'] h2").should('have.text','Is Diabetes secretly causing you distress?')
  cy.get("section[class='l-subsection patient-journey-mod'] h2").should('have.text','6 areas where a Psychologist can help you')
  cy.get("section[class='l-subsection media-mod'] h2[class='align-center']").should('have.text','Recognition of Our Work in Leading Media')

})


it('Verify Fitness Management Page ', () => {
  cy.visit("https://www.fitterfly.com/health/physiotherapy-fitness-and-well-being")

  cy.get("div[class='one-half'] div[class='sec-head'] h2").should('have.text','About our programs')
  cy.get("div[id='ele2505'] h2").should('have.text','Our program offers')
  cy.get("section[class='l-subsection outcome-mod dynamic-outcome-mod'] h2[class='align-center']").should('have.text','Scientifically Proven Outcomes')
})

it('Verify Refer and Earn Page ', () => {
  cy.visit('www.fitterfly.com')
  cy.wait(1000)
  cy.get("a[title='Refer and Earn']").invoke('removeAttr','target').click({force: true})
  //cy.visit("https://www.fitterfly.com/referral")

  cy.get("section[class='banner-sec referral-banner'] h2:nth-child(1)").should('have.text','Refer and Earn ₹1000 on every referral')
  cy.get("div[class='section-head text-center'] h2").should('have.text','How it works?')
  cy.get("div[class='stu-main-form referral-form card'] h1").should('have.text','Refer a friend or family member')
})

it('Verify Terms and Coniditon Page ', () => {
  cy.visit('www.fitterfly.com')
  cy.wait(1000)
  cy.get("a[title='Terms & condition']").invoke('removeAttr','target').click({force: true})

  cy.get("div[class='pad-baned'] h1").should('have.text','Terms Of Service')
  cy.get("div[class='cta-block'] h2").should('have.text','If you have any queries?')
  
})

it('Verify Privacy Policy Page ', () => {
  cy.visit('www.fitterfly.com')
  cy.wait(1000)
  cy.get("a[title='Privacy policy']").invoke('removeAttr','target').click({force: true})

  cy.get("div[class='pad-baned'] h1").should('have.text','Privacy Policy')
  cy.get("div[class='cta-block'] h2").should('have.text','If you have any queries?')
})

// Social Media Platform links >> 

it('Verify Google Play Page ', () => {
  cy.visit("https://play.google.com/store/apps/details?id=com.FitterFly.Wellness")

  
  cy.xpath("//span[normalize-space()='google_logo Play']").should('be.visible')
  cy.xpath("//h1[normalize-space()='Fitterfly: Metabolic Health']").should('have.text','Fitterfly: Metabolic Health')
  cy.xpath("//span[normalize-space()='Install']").should('have.text','Install')
})


it('Verify Apple Store Page ', () => {
  cy.visit("https://apps.apple.com/in/app/fitterfly-metabolic-health/id1492561575")

  
  cy.xpath("//span[@class='we-localnav__title__product']").should('have.text','App Store')
  cy.get(".link[href='https://apps.apple.com/in/developer/fitterfly-healthtech-private-limited/id1677293431']").should('contain','Fitterfly HealthTech Private Limited')
  cy.xpath("//h2[normalize-space()='Screenshots']").should('have.text','Screenshots')
})



it('Verify Facebook Platform Page ', () => {
  cy.visit("https://www.facebook.com/fitterfly/")
  cy.wait(2000)

  cy.get("div[class='x6s0dn4 x78zum5 x1iyjqo2 x1n2onr6']").should('contain','Facebook')
  cy.url().should('include','facebook.com/fitterfly/')
})
  
it('Verify Instalgram Platform Page ', () => {
  cy.visit("http://www.instagram.com/_fitterfly_/")
  cy.wait(1000)

  //cy.xpath("//span[@aria-label='Close']").click()
  //cy.xpath("//div[@class='_aagx']//*[name()='svg']").should('be.visible')
  //cy.url().should('inlcude','instagram.com/_fitterfly_/')


})

it('Verify Twitter Platform Page ', () => {
cy.visit("https://twitter.com/Fitter_Fly")

})


it('Verify Youtube Platform Page ', () => {
cy.visit("https://www.youtube.com/channel/UCqcXfVQHWrKUNdZkhSTVwwQ")
cy.wait(2000)

//cy.xpath("//div[@id='inner-header-container']//yt-formatted-string[@id='text']").should('have.text','Fitterfly Wellness & DTx')
cy.xpath("//span[normalize-space()='Fitterfly Wellness & DTx']").should('have.text','Fitterfly Wellness & DTx')

})

it('Verify Get a Call Back Option in Sidebar', () => {

  cy.visit("https://www.fitterfly.com/speak-to-us?utm_source=Organic&utm_medium=website&utm_campaign=diabetesbookacall")
  cy.xpath("//h1[normalize-space()='Speak To Us']").should('have.text','Speak To Us')
  cy.xpath("//input[@name='commit']").should('be.visible')
})

 



})
