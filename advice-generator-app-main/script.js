const adviceText = document.querySelector(".quote");
const loader = document.querySelector(".loader");
const adviceBtn = document.querySelector(".advice-generator-btn");
const number = document.querySelector("#advice-number");
const url = "https://api.adviceslip.com/advice";
const fetchedadvice = document.querySelector(".fetched-advice-container")


window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.cssText= "display: none;"
        fetchedadvice.style.cssText= "display: flex;" 
    }, 1500);   

    getAdvice()
})

adviceBtn.addEventListener("click", () => {
    loader.style.cssText= "display: flex;"
    fetchedadvice.style.cssText= "display: none;" 

    setTimeout(() => {
        loader.style.cssText= "display: none;"
        fetchedadvice.style.cssText= "display: flex;" 
    }, 1500);  
    
    getAdvice()
})

async function getAdvice(){
    const res =  await fetch(url);
    const {slip: {id,advice}} = await res.json();
    number.innerHTML = id;
    adviceText.textContent = advice;
}
