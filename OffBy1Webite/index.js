document.addEventListener("DOMContentLoaded", handleLoaded);

function handleLoaded() {
    submitButton.addEventListener("click", handleClick);
}

function handleClick() {
    let rawText = dateInput.value;
    let dateObject = new Date(rawText)
    let outputMessage = dateObject.toLocaleDateString();
    outputText.innerHTML = rawText + "<br><br>" + outputMessage;
}