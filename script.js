var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector("button");
var body = document.getElementById("gradient");

console.log(css.textContent);

// color1.addEventListener("change", color1Changed);
// color2.addEventListener("change", color2Changed);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", generateColors);

function setGradient()
{
    body.style.background = "linear-gradient(to right, "
                            + color1.value
                            + ", "
                            + color2.value
                            + ")";
    
    css.textContent = body.style.background + ";";
}

function generateColors()
{
    body.style.background = "linear-gradient(to right, "
                            + "rgb("
                            + rColorV()
                            + ", "
                            + rColorV()
                            + ", "
                            + rColorV()
                            + "), "
                            + "rgb("
                            + rColorV()
                            + ", "
                            + rColorV()
                            + ", "
                            + rColorV()
                            + "))";
    css.textContent = body.style.background + ";";
}

function rColorV()
{
    return Math.floor(Math.random() * 255);
}