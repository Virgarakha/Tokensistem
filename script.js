const characters = [
  "RW42XJDK",
  "QW40LWRN",
  "AL192FIS",
  // Add more characters as needed
];

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function pullGacha() {
  const resultContainer = document.getElementById("result");
  const result = getRandomCharacter();
  resultContainer.innerHTML = `<p>Your Token : <strong>${result}</strong></p>`;
}

const validCodes = ["RW42XJDK", "QW40LWRN", "AL192FIS"]; // Add valid codes as needed

function redeemCode() {
    const codeInput = document.getElementById("codeInput").value.toUpperCase();
    const resultContainer = document.getElementById("result");

    if (validCodes.includes(codeInput)) {
      alert("Token Benar!" , document.getElementById("rakha").click());
    } else {
        resultContainer.innerHTML = `<p>Invalid code. Please try again.</p>`;
    }
}
