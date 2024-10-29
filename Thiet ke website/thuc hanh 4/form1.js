let checkSubmit = document.querySelector('button[type="submit"]');

console.log(checkSubmit)
const telephone = document.querySelector('input[name="telephone"]');
const textInput = document.querySelectorAll('input[name="string"]');
const numberInput = document.querySelectorAll('input[name="nguyen"]');
const DateInput = document.querySelectorAll('input[type="date"]');
console.log(DateInput);
console.log(numberInput);


let formIsValid = true;


checkSubmit.addEventListener('click', function(event){
    for(let i = 0; i < textInput.length; i++){   
        if(textInput[i].value.length <= 5){
            textInput[i].classList.add('error');
            formIsValid = false;
            event.preventDefault();
        }
    }
    for(let i = 0; i < numberInput.length; i++){   
        console.log(numberInput[i].value);
        if(!Number.isInteger(Number(numberInput[i].value)) || numberInput[i].value === ""){
            numberInput[i].classList.add('error');
            formIsValid = false;
            event.preventDefault();
        }
    }

    for(let i =0; i < DateInput.length; i++){
        const currentDate = new Date();
        const seDate = new Date(DateInput[i])
        if(seDate > currentDate || DateInput[i].value === ""){
            DateInput[i].classList.add('error');
        }
    }

    const phoneRegex = /^\d{4}-\d{3}-\d{3}$/;
    
    if (!phoneRegex.test(telephone.value)) {
        telephone.classList.add('error');
        alert('Số điện thoại phải có định dạng xxxx-xxx-xxx.');
        formIsValid = false;
    }
    if (!formIsValid) {
        event.preventDefault();
        alert('Du lieu khong hop le');
    } else {
        event.preventDefault();
        alert('Dữ liệu hợp lệ, form sẽ được gửi.');
}

})
for(let i = 0; i < textInput.length; i++){
    textInput[i].oninput = function(){
        if(textInput[i].value.length > 5){
            textInput[i].classList.remove('error');
            textInput[i].classList.add('success');
            formIsValid = true;
        }else{
            textInput[i].classList.remove('success')
            formIsValid = false;
        }
    }
}
telephone.oninput = function(){
    const phoneRegex = /^\d{4}-\d{3}-\d{3}$/;
    if(phoneRegex.test(telephone.value)){
        telephone.classList.remove('error');
        telephone.classList.add('success');
        formIsValid = true;
    }else{
        telephone.classList.remove('success');
        formIsValid = false;
    }

}
for(let i = 0; i < numberInput.length; i++){   
    numberInput[i].oninput = function(){
    if(Number.isInteger(Number(numberInput[i].value)) && numberInput[i].value !== ""){
        numberInput[i].classList.remove('error');
        numberInput[i].classList.add('success');
        formIsValid = true;
    }else{
        numberInput[i].classList.remove('success');
        formIsValid = false;
    }
}
}
