from app import app
from flask import render_template, request, flash
import neural_net

import pyrebase

config = {
    "apiKey": "AIzaSyA9ztSjoWR9ZJrX5o8VaJacyika26-xxkg",
    "authDomain": "fuelforthought-fb7ed.firebaseapp.com",
    "databaseURL": "https://fuelforthought-fb7ed.firebaseio.com",
    "projectId": "fuelforthought-fb7ed",
    "storageBucket": "fuelforthought-fb7ed.appspot.com",
    "messagingSenderId": "622592343203",
    "appId": "1:622592343203:web:33aef1692ca30630731316"
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

@app.route('/index')
@app.route('/')
def index():
	return render_template('main.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
	if request.method == 'POST':
		email = request.form['email']
		password = request.form['pw']
		if request.form["action"] == "login":
			try:
				auth.sign_in_with_email_and_password(email, password)
				return 'Login Successful'
			except:
				return 'Login failed'
		elif request.form["action"] == "signup":
			try:
				user = auth.create_user_with_email_and_password(email, password)
				if (user):
					print(user['idToken'])
				else:
					print(user['error']['message'])
			except Exception as e:
				print("ERROR")
				print(type(e))
				# print(user)

			return render_template('main.html')
		else:
			assert(0)

@app.route('/dashboard')
def dashboard():
	return render_template('dashboard.html')

@app.route('/game')
def game():
	return render_template('game.html')


@app.route('/algo')
def algo():
    return neural_net.model(0, 1, 2, 3, 4)
