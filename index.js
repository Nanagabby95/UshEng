
// SignUp button
const btns = document.querySelectorAll("#footer-btn, #open-form, #hero-btn");
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');



btns.forEach(btn => {
  btn.addEventListener("click", function() {
    popup.style.display = "block";
  });
});

closeBtn.addEventListener('click', () => {
	popup.style.display = 'none';
});


const createAccountBtn = document.getElementById('create-account-btn');
const popupForm = document.getElementById('divOne');
const closeBttn = document.getElementById('close-icon');

createAccountBtn.addEventListener('click', function(event) {
  event.preventDefault();
  popupForm.style.display = 'block';
});

closeBttn.addEventListener('click', () => {
	popupForm.style.display = 'none';
});

createAccountBtn.addEventListener('click',function(){
  popup.style.display='none';
});

const otpBtn = document.getElementById('OTP-btn');
const OTPform = document.getElementById('OTPform');

otpBtn.addEventListener('click', function(event) {
  event.preventDefault();
  OTPform.style.display = 'block';
  alert('An OTP code has been sent to your registered mail');
});

otpBtn.addEventListener('click', function(){
  divOne.style.display='none';
});

const OTPclose=document.getElementById('OTPclose');

OTPclose.addEventListener('click', function(){
  OTPform.style.display='none';
});
