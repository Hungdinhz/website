// coding implementation
// end coding implementation

let email = document.getElementById('email');
let comment = document.getElementById('com');
let rate = document.getElementById('rate');
const submit = document.getElementById('submit');

console.log(email, comment, rate);

var check = true;

let isNumber = /^[0-9]$/ ;

var isEmail = function(e){
    if(e.search('@gmail.com') !== -1){
        return true;
    }
    else {
        return false;
    }
}
submit.addEventListener('click', (event) =>{
    check = true;
    if(email.value == ""){
        alert('Vui long nhap email');
        email.classList.add('error');
        email.focus();
        check = false;
    }
    if(comment.value == "" && check === true){
        alert('Vui long nhap comment');
        comment.focus();
        check = false;
    }
    if(rate.value == "" && check === true){
        alert('Vui long nhap rate');
        rate.focus();
        check = false;
    }
    if(!isNumber.test(rate.value) && check === true){
        alert('Rate phai la so(tu 0 - 9)');
        rate.focus();
        check = false;
    }
    if(!isEmail(email.value) && check === true){
        alert('Email phai co dang abc@gmail.com');
        rate.focus();
        check = false;
    }

    if(check === true){
        alert('Yeu cau cua ban da duoc gui');
    }else{
        event.prevenDefault();
    }

})



