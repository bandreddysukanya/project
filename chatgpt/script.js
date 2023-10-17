function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;

    if (message.trim() === "") {
        return;
    }

    var chatMessages = document.getElementById("chat-messages");
    var userMessageElement = document.createElement("div");
    userMessageElement.className = "message user-message";
    userMessageElement.innerText = message;
    chatMessages.appendChild(userMessageElement);

    // Simulate a response from the chatbot
    var chatbotMessageElement = document.createElement("div");
    chatbotMessageElement.className = "message chatbot-message";
    chatbotMessageElement.innerText = "I'm just a simple example. You can customize my responses!";
    chatMessages.appendChild(chatbotMessageElement);

    // Clear the message input
    messageInput.value = "";

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}