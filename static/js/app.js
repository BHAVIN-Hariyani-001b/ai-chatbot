const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", sendMessage);

document.querySelector('#user-input').addEventListener("keydown",(event)=>{
  if(event.key === "Enter"){
    sendMessage();
  }
});

async function sendMessage() {
  let input = document.getElementById("user-input");
  let message = input.value;
  if (message.trim() === "") return;
  input.value = "";

  let chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div class="user">You: ${message}</div>`;

  const response = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: message }),
  });

  const data = await response.json();
  // console.log(data);

  chatBox.innerHTML += `<div class="bot">Bot: ${data.reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

