let btnIncrease = document.querySelector(".increase");
let btnDecrease = document.querySelector(".decrease");
let showQuantity = document.querySelector(".showQuantity");
let costPrice = document.querySelector(".cost");
let product =document.querySelector(".product")
let searchProduct = document.querySelector(".search-product");
let search = document.querySelector("#search")

let cost =costPrice.innerHTML;

let textData=1;
btnIncrease.addEventListener("click",()=>{
  textData++;
  costPrice.innerHTML=textData*cost;
  showQuantity.innerHTML=textData;
});

btnDecrease.addEventListener("click",()=>{
    if(showQuantity.innerHTML>1){
     textData--;
     costPrice.innerHTML-=cost;
     showQuantity.innerHTML=textData;
    }
});

let foodMenu =[["Fried Catfish","Biscuits & Gravy","Louisiana-Style Red Beans & Rice"],["20$","15$","20$"]];

search.addEventListener("click",()=>{
  if(searchProduct.value==="Fried Catfish"||"Biscuits & Gravy"||"Louisiana-Style Red Beans & Rice"){
    product.classList.remove("delete");
    if(searchProduct.value ==="Fried Catfish"){
      costPrice.innerHTML=20;
    }
    else if(searchProduct.value ==="Biscuits & Gravy"){
      costPrice.innerHTML=15;
    }
  }else{
    product.classList.add("delete");
  }
})

