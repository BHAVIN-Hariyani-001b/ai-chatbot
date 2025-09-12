# Chatbot with Flask & Gemini API

This project is a simple **AI-powered chatbot** built using **Flask** (Python web framework) and **Google Gemini API** for natural language conversations.  
The web interface is created with **HTML, CSS, and JavaScript**, and Flask handles the backend integration with the Gemini API.

---

## 🚀 Features
- Chat with an AI model using Gemini API  
- Flask backend with REST API endpoint  
- Frontend built using HTML/CSS/JS  
- Responsive chatbot UI  
- Easy to deploy (works on local server or cloud)

---

## 🛠 Project Structure
```
chatbot/
│── app.py # Flask backend
│── templates/
│ └── index.html # Frontend UI
│── static/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── script.js
│ └── img/
│   └── ...
```


---

## ⚙️ Setup Instructions

1. Clone the repository:
    ```bash
   git clone https://github.com/BHAVIN-Hariyani-001b/ai-chatbot.git
   cd ai-chatbot
    ```
2. Create and activate a virtual environment:
    ```
    python -m venv venv
    source venv/bin/activate   # Linux/Mac
    venv\Scripts\activate      # Windows
    ```
3. Install dependencies:
    ```
    pip install -r requirements.txt
    ```

4. Set up your Gemini API Key:

    - Get your API key from [Google AI Studio](https://aistudio.google.com/)
    ```
    api_key="enter_your_key"
    ```
5. Run the Flask app:
    ```
    python app.py
    ```
6. Open your browser at:
    ```
    http://127.0.0.1:5000/
    ```
---
## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---


