
class Request {

    constructor() {
        this.showSelectorValue()
    }

    showSelectorValue() {


        let ourForm = document.querySelector(".myForm")
        let selector1 = document.querySelector(".selector1")
        let totalField = document.getElementById("totalField")
        let styleValue = document.myForm.style.value
        let tipValue = document.myForm.tip.value
        let price = styleValue * tipValue
        let ourHTML = `<p id="testClear" class="general-content--centered-w-margin general-content--larger testClear" onload="showSelectorValue">Total: $${price.toFixed(2)}</p>`
                    
        totalField.insertAdjacentHTML("beforebegin", ourHTML)


            
        ourForm.addEventListener("change", function(e) {
        
            let styleValue = document.myForm.style.value
            let tipValue = document.myForm.tip.value
            let totalField = document.getElementById("totalField")
            let price = styleValue * tipValue
            let ourHTML = `<p id="testClear" class="general-content--centered-w-margin general-content--larger testClear" onload="showSelectorValue">Total: $${price.toFixed(2)}</p>`
            let testClear = document.getElementById("testClear")
            e.preventDefault()
            
            testClear.innerHTML = ourHTML
            
            
            
        })
    }

   
}





export default Request