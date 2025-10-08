from flask import Flask

def create_app():
    app = Flask(__name__)

    from app.routes.response import response_bp

    app.register_blueprint(response_bp)

    return app