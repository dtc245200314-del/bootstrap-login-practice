'use strict';
document.querySelector('#login-form').addEventListener('submit',event=>{
  event.preventDefault();
  document.querySelector('#result').textContent='Form is valid. This demonstration does not authenticate an account.';
  document.querySelector('#password').value='';
});
