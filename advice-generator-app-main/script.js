const adviceText = document.querySelector(".quote");
const loader = document.querySelector(".loader");
const adviceBtn = document.querySelector(".advice-generator-btn");
const number = document.querySelector("#advice-number");
const url = "https://api.adviceslip.com/advice";
const fetchedadvice = document.querySelector(".fetched-advice-container")


window.addEventListener("load", function(){
    setTimeout(() => {
        loader.style.cssText= "display: none;"
    }, 1500);  
    setTimeout(() => {
        fetchedadvice.style.cssText= "display: flex;" 
    }, 1500);   

})

adviceBtn.addEventListener("click", 

function loadAdvice (){
        loader.style.cssText= "display: flex;"
        fetchedadvice.style.cssText= "display: none;" 

    setTimeout(() => {
        loader.style.cssText= "display: none;"
    }, 1500);  
    setTimeout(() => {
        fetchedadvice.style.cssText= "display: flex;" 
    }, 1500);   
}

)

async function getAdvice(){
    const res =  await fetch(url);
    const {slip: {id,advice}} = await res.json();
    number.innerHTML = id;
    adviceText.textContent = advice;
}

getAdvice()
adviceBtn.addEventListener("click", getAdvice)
