function calculateBMI() {
    const age = parseFloat(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    const bmi = weight / (height * height);
    const bmiStatus = getBMIStatus(bmi);
    const healthyBMIRange = "18.5 - 24.9";
    const healthyWeightRange = `${18.5 * height * height} - ${24.9 * height * height}`;
    const bmiToReach = 24.9;
    const weightToLose = weight - bmiToReach;
    const bmiPrime = bmi / 25;
    const ponderalIndex = weight / (height * height * height);

    document.getElementById("bmiResult").innerText = bmi.toFixed(2);
    document.getElementById("bmiStatus").innerText = bmiStatus;
    document.getElementById("healthyBMIRange").innerText = healthyBMIRange;
    document.getElementById("healthyWeightRange").innerText = healthyWeightRange;
    document.getElementById("weightToLose").innerText = weightToLose.toFixed(2);
    document.getElementById("bmiToReach").innerText = bmiToReach.toFixed(2);
    document.getElementById("bmiPrime").innerText = bmiPrime.toFixed(2);
    document.getElementById("ponderalIndex").innerText = ponderalIndex.toFixed(2);
}

function getBMIStatus(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

function resetForm() {
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "male";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";

    document.getElementById("bmiResult").innerText = "-";
    document.getElementById("bmiStatus").innerText = "-";
    document.getElementById("healthyBMIRange").innerText = "-";
    document.getElementById("healthyWeightRange").innerText = "-";
    document.getElementById("weightToLose").innerText = "-";
    document.getElementById("bmiToReach").innerText = "-";
    document.getElementById("bmiPrime").innerText = "-";
    document.getElementById("ponderalIndex").innerText = "-";
}
