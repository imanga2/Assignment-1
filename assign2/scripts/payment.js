/**
*Author     : Ishaan Manga (102878937)
*File name  : payment.js  
*Purpose    : Assignment 2 JavaScript addition
*Created    : 17/04/2021
*Last Updated: 24/04/2021
*/
"use strict";

 //  CANCEL ORDER DIRECT TO HOME PAGE   //


window.onload=function(){

document.getElementById("cancel").addEventListener('click',function(e){
 window.location.href = "index.html";
 localStorage.clear();
  
})

   //   RETRIEVING ITEMS THROUGH LOCAL STORAGE  //
   
document.getElementById("firstName").textContent = window.localStorage.getItem('firstName');
document.getElementById("lastName").textContent = window.localStorage.getItem('lastName');
document.getElementById("email").textContent = window.localStorage.getItem('email');
document.getElementById("street").textContent = window.localStorage.getItem('street');
document.getElementById("town").textContent = window.localStorage.getItem('town');
document.getElementById("phoneNo").textContent = window.localStorage.getItem('phoneNo');
document.getElementById("state").textContent = window.localStorage.getItem('state');
document.getElementById("postcode").textContent = window.localStorage.getItem('postcode');
document.getElementById("qty").value = window.localStorage.getItem('qty');
document.getElementById("totalPrice").value = window.localStorage.getItem('total');
document.getElementById("modelDetails").value = window.localStorage.getItem('model');


     // HIDDEN DATA  //
document.getElementById("hid1").value = window.localStorage.getItem('firstName');
document.getElementById("hid2").value = window.localStorage.getItem('lastName');
document.getElementById("hid3").value = window.localStorage.getItem('street');
document.getElementById("hid4").value = window.localStorage.getItem('town');
document.getElementById("hid5").value = window.localStorage.getItem('state');
document.getElementById("hid6").value = window.localStorage.getItem('postcode');
document.getElementById("hid7").value = window.localStorage.getItem('phoneNo');
document.getElementById("hid8").value = window.localStorage.getItem('email');


	
	//  CREDIT CARD TYPE //
	
	 var accptCard = "";
	 var cardError = "";
 var ac1 = document.getElementById('accptcard1');
  var ac2 = document.getElementById('accptcard2');
  var ac3 = document.getElementById('accptcard3');
 
  var ccNumber = document.getElementById('cardNumber');
   ac1.addEventListener('change', function (e) {
		accptCard = ac1.value;
       
    });
	ac2.addEventListener('change', function (e) {
		accptCard = ac2.value;
       
    });
	ac3.addEventListener('change', function (e) {
		accptCard = ac3.value;
       
    });
       
   
  ccNumber.addEventListener('change', function (e) {
            
			validateCreditNum();
        });

        
		function validateCreditNum(el){
            cardError = "";
            var creditNumInvalid = false;
         
            var text = "";
            if (accptCard === 'Visa'){
				text = ccNumber.value.substring(0,1);
				
                if(text !== '4' || ccNumber.value.length != 16) {
                    creditNumInvalid = true;
                }
   			} else if (accptCard === 'American Express'){
				text = ccNumber.value.substring(0,2);
                if(text !='34' && text != '37' || ccNumber.value.length != 15) {
                    creditNumInvalid = true;
                }
            } else if (accptCard === 'Mastercard'){
				text = ccNumber.value.substring(0,2);
                if(!(text >= '51' && text <= '55') || ccNumber.value.length != 16) {
                   creditNumInvalid = true;
                }
				
			}   
			if (creditNumInvalid) { 
			     cardError = "1";
			     document.getElementById('cardNumber-error').innerHTML = "Invalid creditcard number !";
				 
			} else {
				document.getElementById('cardNumber-error').innerHTML = "";
				
			}
		}  
		
		 const form = document.getElementById('paymentDetails');
    form.addEventListener('submit', function(e) {                       
            if (cardError.length > 0) {
                e.preventDefault();
                return false;
            } else {
                return true;
            }
    });
  
	} 