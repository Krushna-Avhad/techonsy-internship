const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

textInput.addEventListener("input", updateCount);

function updateCount() {
    const text = textInput.value;
    charCount.textContent = text.length;

    const words = text.trim() === "" 
        ? 0
        : text.trim().split(/\s+/).length;

    wordCount.textContent = words;
}

function initializeText() {
    textInput.value = "";
    updateCount();
}

function capitalizeText() {
    if (textInput.value.length === 0) return;
    textInput.value = textInput.value.charAt(0).toUpperCase() + textInput.value.slice(1);
    updateCount();
}

function toUpperCaseText() {
    textInput.value = textInput.value.toUpperCase();
    updateCount();
}

function toLowerCaseText() {
    textInput.value = textInput.value.toLowerCase();
    updateCount();
}
