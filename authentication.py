from flask import Flask, render_template, request, redirect, url_for, send_file
import mysql.connector
import css

app = Flask(__name__)

# 🔗 Connect to MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="#SAR1807",
    database="college_event"
)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/event')
def event():
    return render_template("eventpage.html")

@app.route('/admin')
def admin_panel():
    return render_template("adminspanel.html")

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    cursor = db.cursor()
    query = "SELECT * FROM admins_info WHERE name = %s AND password = %s"
    cursor.execute(query, (username, password))
    result = cursor.fetchone()

    if result:
        return "<h1>Login Successful! Welcome, Admin.</h1>"
    else:
        return "<h1>Login Failed. Invalid credentials.</h1>"
    
if __name__ == '__main__':
    app.run(debug=True)
