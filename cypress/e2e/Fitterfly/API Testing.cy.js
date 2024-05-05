 describe('API Testing', () => {
        
      
       it('POPUP-Sign up for our free newsletter API', () => {
          
          cy.request({
            method: 'POST',
            url: 'https://ftx-api.ffly.in/pwp/hooks/send_data_to_sendgrid',
            headers: {
              'Content-Type': 'application/json'
            },
      
            body: {
              email: 'test123@gmail.com',
              event_name: "newsletter_popup",
              
            }
      
          }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.have.property('contents');
            expect(response.body.status).to.eq('success');

          });
        });



        // 2)

        it('OTP Generate at Daibetes Reversal Test', () => {
          
          cy.request({
            method: 'POST',
            url: 'https://site-website.fitterfly.com//calculator/generate_otp',
            headers: {
              'Content-Type': 'application/json'
            },
      
            body: {
              mobile: '9428632838',
              source: "cms",
              
            }
      
          }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body.status).to.equal('success');
            expect(response.body.message).to.equal('OTP generated succssfully!');
            //expect(response.body).to.have.property('message');
            //expect(response.body).to.have.property('status');

          });
        });




      // 3)

        it('OTP Validation at Daibetes Reversal Test', () => {
          
          cy.request({
            method: 'POST',
            url: 'https://site-website.fitterfly.com//calculator/validate_otp',
            headers: {
              'Content-Type': 'application/json'
            },
      
            body: {
              mobile: '9428632838',
              otp: "1234",
              
            }
      
          }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body.status).to.eq('success');
            expect(response.body.message).to.eq('OTP validated successfully');

          });
        });

  // 4)

  it('Talk to a Program Advisor form', () => {
          
    cy.request({
      method: 'POST',
      url: 'https://ftx-api.ffly.in/pwp/hooks/create_lead',
      headers: {
        'Content-Type': 'application/json'
      },

      body: {
        
          mobile: "9428632838",
          api_key: "a592872a-3bb5-4f9c-ba24-735d0000c1c3",
          full_name: "TEST",
          email: "test123@gmail.com",
          category_name: "Manage Diabetes",
          blog_url: "https://www.fitterfly.com/blog/diabetes-success-story-aastha-kaushik-if-a-14-year-old-can-beat-diabetes-you-too-can/"
      
        
      }

    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body.status).to.eq('success');
      

    });
  });


  // 5)

  it('Fitterfly Diabetes Prime Program form Ad', () => {
          
    cy.request({
      method: 'POST',
      url: 'https://ftx-api.ffly.in/pwp/hooks/create_lead',
      headers: {
        'Content-Type': 'application/json'
      },

      body: {
        
        mobile: "9428632838",
        api_key: "a592872a-3bb5-4f9c-ba24-735d0000c1c3",
        full_name: "TEST",
        category_name: "Dharmendra Tewari Reversal",
        blog_url: "https://www.fitterfly.com/blog/improve-insulin-sensitivity-and-reduce-insulin-resistance/"
        
      }

    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body.status).to.eq('success');
      

    });
  });


  //6)

  it('Fitterfly enhance your practice and improve patient outcomes form', () => {
          
    cy.request({
      method: 'POST',
      url: 'https://ftx-api.ffly.in/pwp/hooks/create_doctor_in_lsq',
      headers: {
        'Content-Type': 'application/json'
      },

      body: {
        
       
        mobile: "9428632838",
        api_key: "a592872a-3bb5-4f9c-ba24-735d0000c1c3",
        name: "test",
        speciality: "other",
        city: "surat",
        category_name: {},
        blog_url: "https://www.fitterfly.com/blog/beyond-a1c-new-metrics-and-tech-supported-goals/"
    
  }

    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body.status).to.eq('success');
      expect(response.body.message).to.eq('Doctor Added Successfully....')
      

    });
  });


  //7)


         it('POPUP-Lower Your HbA1c By An Avg. 1.96 Points* In 3 Months', () => {
          
          cy.request({
            method: 'POST',
            url: 'https://www.fitterfly.com/landing_page_lead',
            headers: {
              'Content-Type': 'application/json'
            },
      
            body: {
              name: "TEST",
              mobile: "9428632838",
              campaign_short_code: "Popup_CwPyY"
              
            }
      
          }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body.contents).to.eq('success');
            expect(response.body.status).to.eq('success');

          });
        });

// 8)

         it('POPUP-Lose upto 10 kg* in 3 months and sustain it!', () => {
          
          cy.request({
            method: 'POST',
            url: 'https://www.fitterfly.com/landing_page_lead',
            headers: {
              'Content-Type': 'application/json'
            },
      
            body: {
              name: "TEST",
              mobile: "9428632838",
              campaign_short_code: "Popup_15KgK"
              
            }
      
          }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body.contents).to.eq('success');
            expect(response.body.status).to.eq('success');

          });
        });

  //9)

  it('POPUP-Subscribe to receive the latest Doctors Digest blogs in your email inbox!', () => {
          
    cy.request({
      method: 'POST',
      url: 'https://ftx-api.ffly.in/pwp/hooks/send_data_to_sendgrid',
      headers: {
        'Content-Type': 'application/json'
      },

      body: {
        email: 'test123@gmail.com',
        event_name: "subscribe_doctors",
        
      }

    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body.contents).to.have.property('job_id');
      expect(response.body.status).to.eq('success');

    });
  });



})