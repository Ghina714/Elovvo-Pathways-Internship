const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const message = document.createElement("p");
    message.textContent = " Message sent successfully!";
    message.style.color = "#00ff88";
    message.style.textAlign = "center";
    message.style.marginTop = "15px";
    message.style.fontWeight = "bold";
    message.classList.add("success-message");

    form.appendChild(message);

  
    form.reset();
});