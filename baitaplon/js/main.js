

let displayAside = document.getElementById('list__product');
console.log(displayAside);

//displayAside.style.display = "none";



const listImage = document.querySelector('.image__list');
const imgs = document.querySelectorAll('.image__list img');

let current = 0;
let imgLength = imgs.length;
  //lay width   
let box1Width = imgs[0].offsetWidth;

const handleChangeImage = function(){
    if(current === imgLength - 1){
        current = 0;
 
    }else{
        current++;
      
    }
    

    document.querySelector('.active').classList.remove('active');
    document.querySelector('.image-index-' + current).classList.add('active');
    listImage.style.transform = `translateX(${100 * -1 * current}%)`;
}

let handleEventChangeSlide = setInterval(handleChangeImage, 5000);

const btnLeft = document.querySelector('.button__left');
const btnRight = document.querySelector('.button__right');
btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    handleChangeImage();
    handleEventChangeSlide = setInterval(handleChangeImage, 5000);
});
btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    if(current === 0){
        current = imgLength - 1;
 
    }else{
        current--;
      
    }
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.image-index-' + current).classList.add('active');
    listImage.style.transform = `translateX(${100 * -1 * current}%)`;
    handleEventChangeSlide = setInterval(handleChangeImage, 5000);

});


const deal = document.querySelectorAll(".selection.ticket__node--copy");
    
let lengthDeal = deal.length;

for(let i = 0; i < lengthDeal; i++){
    deal[i].onclick = function(e){
        e.target.textContent = "Đã sao chép";
        e.target.style.opacity = '0.5';
    }
}

const listType = document.querySelector('.box5 .Type');

const select1 = document.querySelector('.box5 .heading__type.kind-1');
const select2 = document.querySelector('.box5 .heading__type.kind-2');
const select3 = document.querySelector('.box5 .heading__type.kind-3');

const selectBox5 = function(event, name, number) {
    event.addEventListener('click', () => {
          document.querySelector(name + ' .active').classList.remove('active');
         event.classList.add('active');
        listType.style.transform = `translateX(${100 * -1 * number}%)`;
    });
}

selectBox5(select1, '.box5', 0);
selectBox5(select2, '.box5', 1);
selectBox5(select3, '.box5', 2);


const listTypeBox6 = document.querySelector('.box6 .Type');

const select1Box6 = document.querySelector('.box6 .heading__type.kind-1');
const select2Box6 = document.querySelector('.box6 .heading__type.kind-2');
const select3Box6 = document.querySelector('.box6 .heading__type.kind-3');

const selectBox6 = function(event, name, number) {
    event.addEventListener('click', () => {
          document.querySelector(name + ' .active').classList.remove('active');
         event.classList.add('active');
        listTypeBox6.style.transform = `translateX(${100 * -1 * number}%)`;
    });
}

selectBox6(select1Box6, '.box6', 0);
selectBox6(select2Box6, '.box6', 1);
selectBox6(select3Box6, '.box6', 2);

let shopping = document.querySelectorAll('.shopping');
console.log(shopping);

const lengthShopping = shopping.length;


for(let i = 0; i < lengthShopping; i++){
    shopping[i].addEventListener('click', () =>{
        const notiShopping = document.getElementById('notification');
        notiShopping.style = "display: block;";
       
        setTimeout(() =>{
            notiShopping.style.display = "none";
        }, 1000)
    });
}










