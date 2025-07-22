function calculateAge() {
  const birthInput = document.getElementById("birthdate").value;
  const resultDiv = document.getElementById("result");

  if (!birthInput) {
    resultDiv.innerHTML = "⚠️ Please enter a valid date.";
    return;
  }

  const birthDate = new Date(birthInput);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.innerHTML = `
    <p>🎂 You are:</p>
    <p><b>${years}</b> years <b>${months}</b> months <b>${days}</b> days old</p>
  `;
}
