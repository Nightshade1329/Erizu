document.addEventListener("DOMContentLoaded", () => {
    const messageForm = document.getElementById("message-form");
    const messageInput = document.getElementById("message-input");
    const messagesContainer = document.getElementById("messages");
    const usersContainer = document.getElementById("users");

    // Função para adicionar uma mensagem ao chat
    function addMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerText = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Função para adicionar um usuário à lista de usuários online
    function addUser(user) {
        const userElement = document.createElement("li");
        userElement.innerText = user;
        usersContainer.appendChild(userElement);
    }

    // Evento de envio do formulário de mensagem
    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = messageInput.value;
        if (message.trim()) {
            addMessage(message);
            messageInput.value = "";
            messageInput.focus();
        }
    });

    // Exemplo de usuários online (pode ser substituído por dados reais)
    const users = ["Alice", "Bob", "Charlie"];
    users.forEach(user => addUser(user));
});