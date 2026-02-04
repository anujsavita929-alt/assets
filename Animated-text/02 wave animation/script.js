const waveText = document.getElementById("waveText");
const text = waveText.textContent;

waveText.textContent = "";

text.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    waveText.appendChild(span);
});
