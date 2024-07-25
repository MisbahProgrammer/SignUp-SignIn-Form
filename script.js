let signUpBtn = document.getElementById('signUp');
let signInBtn = document.getElementById('signIn');
let nameField = document.getElementById('namefield');
let title = document.getElementById('title');

signInBtn.onclick = function(){
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    signUpBtn.classList.add('disabled');
    signInBtn.classList.remove('disabled');
}

signUpBtn.onclick = function(){
    nameField.style.maxHeight = '65px';
    title.innerHTML = 'Sign Up';
    signUpBtn.classList.remove('disabled');
    signInBtn.classList.add('disabled');
}