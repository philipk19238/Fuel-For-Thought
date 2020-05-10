
from flask import render_template

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

email = input('email')
pw = input('pw')

user = auth.create_user_with_email_and_password(email, pw)
user = auth.sign_in_with_email_and_password(email, pw)

print(auth.get_account_info(user['idToken']))