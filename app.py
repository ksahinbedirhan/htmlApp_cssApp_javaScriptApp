from flask import Flask

app = Flask(__name__)

@app.route("/")
def index();
    return "Selam"

if __name__ =="main":
    app.run(debug = True)