let currentUserId = null;

function submitUser() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim(); // Fixed: it was 'number' before
  if (!name || !age) {
    alert("Please Enter This Information");
    return;
  }
  const userId = Date.now().toString();
  currentUserId = userId;
  const userData = { id: userId, name, age };
  localStorage.setItem("_user" + userId, JSON.stringify(userData));

  document.getElementById("user-form").style.display = "none";
  document.getElementById("bmi-section").style.display = "block";

  document.getElementById(
    "user-info"
  ).innerText = `Name: ${name} | Age: ${age} | ID: ${userId}`;
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!weight || !height) {
    alert("Please Enter Both Info");
    return;
  }

  const heightInM = height / 100;
  const bmi = (weight / (heightInM * heightInM)).toFixed(2);

  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 24.9) status = "Normal";
  else if (bmi < 29.9) status = "Overweight";
  else status = "Obese";

  const resultText = `Your BMI is ${bmi} (${status})`;
  document.getElementById("bmi-result").innerText = resultText;

  const saved = JSON.parse(localStorage.getItem("_user" + currentUserId));
  saved.bmi = { value: bmi, status, weight, height };
  localStorage.setItem("_user" + currentUserId, JSON.stringify(saved));
}
