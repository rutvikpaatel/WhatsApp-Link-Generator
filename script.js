function generateLink() {
  const countryCode = document.getElementById("countryCode").value;
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const format = document.getElementById("format").value;

  const errorBox = document.getElementById("error");
  const outputBox = document.getElementById("output");

  // Clear previous error and result
  errorBox.style.display = "none";
  errorBox.innerText = "";
  outputBox.innerHTML = "";

  if (!phone) {
    errorBox.innerText = "❗ Please enter a phone number.";
    errorBox.style.display = "block";
    return;
  }

  const fullPhone = countryCode + phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  let link = "";

  if (format === "wa.me") {
    link = `https://wa.me/${fullPhone}?text=${encodedMessage}`;
  } else {
    link = `https://api.whatsapp.com/send?phone=${fullPhone}&text=${encodedMessage}`;
  }

  outputBox.innerHTML = `
    <div class="result">
      <strong>Generated Link:</strong>
      <p>${link}</p>
      <a href="#" class="button-link copy" onclick="copyToClipboard('${link}')">📋 Copy Link</a>
      <a href="${link}" class="button-link open" target="_blank">🔗 Open Link</a>
    </div>
  `;
}
