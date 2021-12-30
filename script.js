const errorMsg = document.getElementById('errorMsg');
const btn = document.getElementById('btn');
const email = document.getElementById('email');


btn.addEventListener('click', alertFnc);

function alertFnc(e){
    e.preventDefault();

    if(email.value === ""){
        errorMsg.innerHTML = 'Please Enter your Email';
    } else{
        email.value = "";
        errorMsg.innerHTML = 'Your Email has been Sent';
    }
   

    setTimeout(function(){
        errorMsg.innerHTML = '';
    }, 2000)

}

// Quote form
const name1 = document.getElementById('name1');
const emailMsg = document.getElementById('emailMsg');
const textarea = document.getElementById('textarea');
const btn2 = document.getElementById('btn2');
const quoteMsg = document.getElementById('quoteMsg');



btn2.addEventListener('click', quoteMessage);

function quoteMessage(e){
    e.preventDefault();

    if(name1.value === "" || emailMsg.value === "" || textarea.value === "" ) {
        quoteMsg.innerHTML = 'Please Enter all Inputs';
    } else{
        quoteMsg.innerHTML = 'Your Quote has been sent';
        name1.value = "";
        emailMsg.value = "";
        textarea.value = "";

    }

    setTimeout(function(){
        quoteMsg.innerHTML = '';
    }, 2000)

}
