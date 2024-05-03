document.addEventListener("DOMContentLoaded", () => {

    function updateDisplay() {
        if (cupElement.checked) {
            toppings.classList.remove("hidden")
        }else{
            toppings.classList.add("hidden")
        }
    }

    coneElement.onclick = updateDisplay;
    cupElement.onclick = updateDisplay;
    // submitOrder.onClick()

    submitOrder.addEventListener("click", () => {
        //CONVERT ELEMENT VALUES TO LOCAL JS VARIABLES

        //LOCAL JAVASCRIPT INPUT VARIABLES
        const scoops = Number(scoopsElement.value);

        const cone = coneElement.checked;
        const cup = cupElement.checked;

        const sprinkles = sprinklesElement.checked;
        const whipped = whippedElement.checked;
        const fudge = fudgeElement.checked;
        const cherry = cherryElement.checked;
        //LOCAL JAVASCRIPT OUTPUT VARIABLES
        let basePrice = 0;
        let tax = 0;
        let total = 0;

        //START LOGIC
        basePrice = 2.25;
        if (scoops > 1) {
            basePrice += 1.25 * (scoops - 1);
        }
        if (cup) {
            if (sprinkles) {
                basePrice += 0.50
            }
            if (whipped) {
                basePrice += 0.25
            }
            if (fudge) {
                basePrice += 1.25
            }
            if (cherry) {
                basePrice += 0.25
            }
        }
        tax = basePrice * 0.08
        total = basePrice + tax


        //UPDATE DISPLAY
        basePriceElement.innerText = "$" + basePrice.toFixed(2);
        taxElement.innerText = "$" + tax.toFixed(2);
        totalElement.innerText = "$" + total.toFixed(2);


    });


});