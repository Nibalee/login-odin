const firstName = document.getElementById('first-name');
const helpFirstName = document.querySelector("p.help-first-name");
const lastName = document.getElementById('last-name');
const helpLastName = document.querySelector('p.help-last-name');
const email = document.getElementById('mail');
const helpEmail = document.querySelector('p.help-email');
const tel = document.getElementById('tel');
const helpTel = document.querySelector('p.help-tel');
const pwd = document. getElementById('pwd');
const pwd2 = document.getElementById('pwd2');
const pwdHelp = document.querySelector('p.help-pwd');
const btn = document.querySelector('.btn');
const myForm = document.querySelector('form');

btn.addEventListener('click', ()=>{
  myForm.submit();
});

//Check validity for first name
firstName.addEventListener('focusin',()=>{
  if(firstName.classList.contains("invalid")){
    firstName.classList.remove("invalid");
  }
});

firstName.addEventListener("focusout", ()=>{
  if(firstName.checkValidity()){
    helpFirstName.classList.add("hidden");
  }
  else{
    helpFirstName.classList.remove('hidden');
    firstName.classList.add("invalid");
  }
});


//check validity for last name
lastName.addEventListener('focusin',()=>{
  if(lastName.classList.contains("invalid")){
    lastName.classList.remove("invalid");
  }
});

lastName.addEventListener("focusout", ()=>{
  if(lastName.checkValidity()){
    helpLastName.classList.add("hidden");
  }
  else{
    helpLastName.classList.remove('hidden');
    lastName.classList.add("invalid");
  }
});

//check validity for email

email.addEventListener('focusin',()=>{
  if(email.classList.contains("invalid")){
    email.classList.remove("invalid");
  }
});

email.addEventListener("focusout", ()=>{
  if(email.checkValidity()){
    helpEmail.classList.add("hidden");
  }
  else{
    helpEmail.classList.remove('hidden');
    email.classList.add("invalid");
  }
});

//check validity for phone number

tel.addEventListener('focusin',()=>{
  if(tel.classList.contains("invalid")){
    tel.classList.remove("invalid");
  }
});

tel.addEventListener("focusout", ()=>{
  if(tel.checkValidity()){
    helpTel.classList.add("hidden");
  }
  else{
    helpTel.classList.remove('hidden');
    tel.classList.add("invalid");
  }
});

//check validity for password
/*pwd.addEventListener('focusin',()=>{
  if(pwd.classList.contains("invalid")){
    pwdHelp.classList.remove("invalid");
  }
});

pwd.addEventListener("focusout", ()=>{
  if(pwd.value === pwd2.value){
    pwdHelp.classList.add("hidden");
  }
  else{
    pwdHelp.classList.remove('hidden');
    pwd.classList.add("invalid");
    pwd2.classList.add("invalid");
  }
});
*/

pwd2.addEventListener("focusout", ()=>{
  if(pwd.value === pwd2.value){
    pwdHelp.classList.add("hidden");
    pwd.classList.remove('invalid');
    pwd2.classList.remove("invalid");
  }
  else{
    pwdHelp.classList.remove('hidden');
    pwd.classList.add("invalid");
    pwd2.classList.add("invalid");
  }
});

pwd2.addEventListener('focusin',()=>{
  if(pwd2.classList.contains("invalid")){
    pwdHelp.classList.remove("invalid");
  }
});