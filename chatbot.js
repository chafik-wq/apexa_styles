const chatContainer = document.getElementById("chatContainer");
const chatBox = document.getElementById("chatBox");
const chatOptions = document.getElementById("chatOptions");

const conversation = {
  "Bonjour ! Comment puis-je vous aider ?": {
    response: "Bienvenue ! Voici quelques options :"
  },
  "Nos services": {
    response: "Nous proposons du développement web, du support technique, et d'autres services."
  },
  "Contact": {
    response: "Vous pouvez nous contacter par email : support@exemple.com ou par téléphone : 0123456789."
  },
  "Horaires": {
    response: "Nos bureaux sont ouverts du lundi au vendredi de 9h à 18h. Fermés le week-end."
  }
};

function toggleChat() {
  chatContainer.style.display = chatContainer.style.display === "none" || chatContainer.style.display === "" ? "flex" : "none";
  if (chatContainer.style.display === "flex") {
    startChat();
  }
}

function startChat() {
  chatBox.innerHTML = "";
  chatOptions.innerHTML = "";
  addBotMessage("Bonjour ! Comment puis-je vous aider ?");
  showOptions();
}

function addBotMessage(text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("chat-message", "bot-message");
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showOptions() {
  const options = ["Nos services", "Contact", "Horaires"];
  chatOptions.innerHTML = "";
  options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => handleUserResponse(option);
    chatOptions.appendChild(button);
  });
}

function handleUserResponse(choice) {
  const userMsg = document.createElement("div");
  userMsg.classList.add("chat-message");
  userMsg.style.alignSelf = "flex-start";
  userMsg.style.background = "#e6f0ff";
  userMsg.textContent = `✅ ${choice}`;
  chatBox.appendChild(userMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    const nextStep = conversation[choice];
    if (nextStep) {
      addBotMessage(nextStep.response);
    } else {
      addBotMessage("Merci de votre visite !");
    }
    showOptions();
  }, 500);
}
