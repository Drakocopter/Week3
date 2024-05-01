
function handleClick() {
    let rawText = dateInput.value;
    let dateObject = new Date(rawText)
    let outputMessage = dateObject.toLocaleDateString();
    outputText.innerHTML = rawText + "<br><br>" + outputMessage;

}
function handleLoaded() {
    submitButton.addEventListener("click", handleClick);
}

document.addEventListener("DOMContentLoaded", handleLoaded);




