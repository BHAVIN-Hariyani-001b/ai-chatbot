const sendButton = document.getElementById("send-button");
const userInput = document.querySelector("#user-input");
const send_Message = document.querySelector("#sendmessage");
sendButton.addEventListener("click", sendMessage);

// enter button click and send ms
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !sendButton.disabled) {
    sendMessage();
    sendButton.disabled = true;
  }
});

// Move input container to bottom
function moveInputToBottom() {
  send_Message.classList.remove("center");
  send_Message.classList.add("bottom");
  userInput.focus();
}

// api fetch data and data is fill in the html container
async function sendMessage() {
  moveInputToBottom();

  let welcomeMessage = document.querySelector(".welcome");
  if(welcomeMessage){
    send_Message.removeChild(welcomeMessage);
  }

  let input = document.getElementById("user-input");
  let message = input.value;
  if (message.trim() === "") return;
  input.value = "";

  let chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div class="user">
                          <div class="user_chat">
                            ${message}
                          </div>
                        </div>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  // animation
  let animation = document.createElement("div");
  animation.innerHTML = `
    <div class="animation">
      <div class="sub"></div>
      <div class="sub"></div>
      <div class="sub"></div>
    </div>
  `;
  chatBox.appendChild(animation);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message }),
    });
    const data = await response.json();
    // console.log(data);
    chatBox.removeChild(animation);
    chatBox.innerHTML;
    chatBox.innerHTML += `<div class="bot">${data.reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    chatBox.removeChild(animation);
    chatBox.innerHTML += `<div class="bot">Try Again</div>`;
  }

  sendButton.disabled = false;
}
