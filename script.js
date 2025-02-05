 document.getElementById("generate-btn").addEventListener("click", () => {
    let randomColor = getRandomColor();
    document.getElementById("color-code").innerText = randomColor;
    document.getElementById("color-box").style.backgroundColor = randomColor;
    document.getElementById("color-box").style.color = "#fff"; // Change text color for contrast
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
