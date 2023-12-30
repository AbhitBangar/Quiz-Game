const questions = [
    "History",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology"
];

const colors = ["#000", "#000"];

const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spin-button");
const result = document.getElementById("result");

spinButton.addEventListener("click", () => {
    const randomAngle = Math.floor(Math.random() * 360);
    const degrees = 3600 + randomAngle;
    const rotationTime = 5 + (randomAngle / 360) * 5;

    wheel.style.transition = `transform ${rotationTime}s ease-out`;
    wheel.style.transform = `rotate(${degrees}deg)`;

    spinButton.disabled = true;
    spinButton.style.cursor = "not-allowed";

    setTimeout(() => {
        const questionIndex = Math.floor(randomAngle / 72);
        result.innerText = questions[questionIndex];
        result.style.color = colors[questionIndex];

        spinButton.disabled = false;
        spinButton.style.cursor = "pointer";

        wheel.style.transition = "none";
        wheel.style.transform = "rotate(0deg)";
    }, rotationTime * 1000);
});