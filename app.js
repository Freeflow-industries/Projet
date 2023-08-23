document.addEventListener("DOMContentLoaded", () => {
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navLinks = document.querySelector(".links");

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu');
    });

    const submit = document.querySelector("#submit");

    submit.addEventListener("click", () => {
        const item1number = document.querySelector("#number-item1")
        const item2number = document.querySelector("#number-item2")
        const item3number = document.querySelector("#number-item3")
        const item4number = document.querySelector("#number-item4")
        const item1value = 500
        const item2value = 300
        const item3value = 2000
        const item4value = 3000
        
        
        const value1 = parseInt(item1number.value)
        const value2 = parseInt(item2number.value) 
        const value3 = parseInt(item3number.value)
        const value4 = parseInt(item4number.value)
        
        
        const Total_price = (value1*item1value)+(value2*item2value)+(value3*item3value)+(value4*item4value)
        //console.log(Total_price)
        const display =document.querySelector("#display")
        if (Total_price === NaN) {
            display.innerHTML = `0 FCFA`
        }else{
             display.innerHTML = `${Total_price} FCFA`
        }
        
       
    });
});



   