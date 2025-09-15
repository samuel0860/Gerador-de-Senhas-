const lengthInput = document.getElementById("length");
const lettersInput = document.getElementById("letters");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

function generatePassword() {
  const length = parseInt(lengthInput.value);
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let chars = "";
  if (lettersInput.checked) chars += letters;
  if (numbersInput.checked) chars += numbers;
  if (symbolsInput.checked) chars += symbols;

  if (chars === "") {
    alert("Selecione pelo menos uma opção!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (passwordField.value) {
    navigator.clipboard.writeText(passwordField.value);
    copyBtn.textContent = "✅ Copiado!";
    setTimeout(() => (copyBtn.textContent = "📋 Copiar"), 2000);
  }
});
