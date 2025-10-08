from flask import Blueprint, render_template, request, jsonify
from google import genai
import re
import markdown

response_bp = Blueprint('response',__name__)

@response_bp.route("/")
def home():
    return render_template("index.html")
 

def chatbot_response(user_text):
    client = genai.Client(api_key="AIzaSyDTNBYoHPakg9wF0nnx1dlFJpNXPCPx3o8")
    try:    
        response = client.models.generate_content(
            model="gemini-2.5-flash", 
            contents=user_text
        )
    except Exception as e:
        return f"Error : {e}"
 
    # return response.text
    return format_response(response.text)


def format_response(raw_text):
    formatted = raw_text.strip()

    # your regex cleanup (optional)
    formatted = raw_text.strip()
    formatted = re.sub(r"^\s*(\d+)\.\s*", r"## 🔹 \1. ", formatted, flags=re.MULTILINE)
    formatted = re.sub(r"^\s*-\s*", r"- ", formatted, flags=re.MULTILINE)
    formatted = re.sub(r"([.!?])\s+", r"\1\n\n", formatted)

    return markdown.markdown(formatted)

@response_bp.route("/chat", methods=["POST"])
def chat():
    user_message = request.json["message"]
    bot_reply = chatbot_response(user_message)
    return jsonify({"reply": bot_reply})
