const shape = document.getElementById("shape");
const inputsDiv = document.getElementById("inputs");
const result = document.getElementById("result");

shape.addEventListener("change", () => {
    inputsDiv.innerHTML = "";
    result.innerText = "";

    switch (shape.value) {

        case "square":
            inputsDiv.innerHTML = `
                <input type="number" id="side" placeholder="Enter side">
            `;
            break;

        case "rectangle":
            inputsDiv.innerHTML = `
                <input type="number" id="length" placeholder="Enter length">
                <input type="number" id="breadth" placeholder="Enter breadth">
            `;
            break;

        case "circle":
            inputsDiv.innerHTML = `
                <input type="number" id="radius" placeholder="Enter radius">
            `;
            break;

        case "triangle":
            inputsDiv.innerHTML = `
                <input type="number" id="base" placeholder="Enter base">
                <input type="number" id="height" placeholder="Enter height">
            `;
            break;

        default:
            inputsDiv.innerHTML = "";
    }
});

function calculate() {
    let area;

    switch (shape.value) {

        case "square":
            let side = Number(document.getElementById("side").value);
            area = side * side;
            result.innerText = `Area of Square = ${area}`;
            break;

        case "rectangle":
            let l = Number(document.getElementById("length").value);
            let b = Number(document.getElementById("breadth").value);
            area = l * b;
            result.innerText = `Area of Rectangle = ${area}`;
            break;

        case "circle":
            let r = Number(document.getElementById("radius").value);
            area = Math.PI * r * r;
            result.innerText = `Area of Circle = ${area.toFixed(2)}`;
            break;

        case "triangle":
            let base = Number(document.getElementById("base").value);
            let height = Number(document.getElementById("height").value);
            area = 0.5 * base * height;
            result.innerText = `Area of Triangle = ${area}`;
            break;

        default:
            result.innerText = "⚠️ Please select a shape and enter values";
    }
}
