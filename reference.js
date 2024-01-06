function sendMessage() {
    // Get user input
    const mail = document.getElementById('mail').innerText.trim();
    const text = document.getElementById('text').value.trim();

    // Display alert message
    const alertMessage = `Name: ${mail}\nMessage: ${text}\n\n MESSAGE SENT!!`;
    alert(alertMessage);
}

