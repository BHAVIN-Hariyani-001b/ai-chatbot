from google import genai
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def chatbot_response(user_text):
    client = genai.Client(api_key="Gemini_Key")
    try:    
        response = client.models.generate_content(
            model="gemini-2.5-flash", 
            contents=user_text
        )
    except Exception as e:
        return f"Error : {e}"

    return response.text

@app.route("/")
def home():
    return render_template("index.html")
 
@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json["message"]
    bot_reply = chatbot_response(user_message)
    return jsonify({"reply": bot_reply})

if __name__ == "__main__":
    app.run(debug=True)

