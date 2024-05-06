const currency = amt => "$" + amt.toFixed(2);
const percent = p => (p * 100).toFixed(0) + "%";
document.addEventListener("DOMContentLoaded", () => {
    debugger
    navigationBar.innerHTML =`
    <a href="./index.html">Home</a>
    <a href="./activities.html">Acitivities</a>
    <a href="./dining.html">Dining</a>
    <a href="./overnight.html">Overnight</a>
    <a href="./about.html">About</a>`

    document.getElementById("estimate").addEventListener("click", () => {
        let total = 0;
        const name = document.getElementById("guestName").value;
        const email = document.getElementById("guestEmail").value;
        const checkInDate = new Date(document.getElementById("checkInDate").value);
        const numOfNights = Number(document.getElementById("nights").value);

        //TODO ROOM TYPES
        let room = "queen";
        if (document.getElementById(`king`).checked) {
            room = "king";
        } else if (document.getElementById(`suite`).checked) {
            room = "suite";
        }
        const adults = Number(document.getElementById("adults").value);
        const children = Number(document.getElementById("children").value);

        let discount = 0;
        if (document.getElementById("discountAAASenior").checked) {
            discount = .10
        } else if (document.getElementById("discountMilitary").checked) {
            discount = .20;
        }

        //TODO CALCULATE TOTAL
        const m = checkInDate.getMonth()
            const JUNE = 5;
            const AUGUST = 7;
            let peakSeason = (m >= JUNE && m <= AUGUST);


        let roomRate = 150;
        if(peakSeason && room=="suite"){
            roomRate = 350
        }else if(room=="suite" && !peakSeason){
            roomRate = 210
        }else if(peakSeason){
            roomRate = 250;
        }

        total = numOfNights * roomRate
        const discountAmount = total * discount
        const discountedTotal = total - discountAmount


        const text = `
        Name: ${name}
        Email: ${email}
        Date:${checkInDate.toLocaleDateString()}
        Is Peak Season: <span class="title">${peakSeason}</span>
        Nights: ${numOfNights}
        Room: <span class="title">${room}</span>
        Adults: ${adults}
        Children: ${children}

        Subtotal: ${currency(total)}

        Discount Percent: ${percent(discount)}
        Discount Amount: ${currency(discountAmount)}

        Discounted Total: ${currency(discountedTotal)}
        `;
        output.innerHTML = text

    });
}); //END LOADED