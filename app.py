from flask import Flask, render_template, request, redirect, url_for, send_file
import mysql.connector


app = Flask(__name__)


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

@app.route('/register')
def register_page_load():
    return render_template("registration.html")

@app.route('/sport')
def sport_event():
    return render_template("sportevent.html")

@app.route('/gatherings')
def Gathering_page():
    return render_template("gathering.html")

@app.route('/admin')
def admin_panel():
    return render_template("adminspanel.html")




@app.route('/register', methods=['GET', 'POST'])
def register_page():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        student_email = request.form['student_email']
        phone_no = request.form['phone_no']
        transaction_status = request.form['transaction_status']
        reg_event = request.form['reg_event']

        cursor = db.cursor()
        query = """
            INSERT INTO registered_students
            (first_name, last_name, student_email, phone_no, transaction_status, reg_event)
            VALUES (%s, %s, %s, %s, %s, %s)
        """
        values = (first_name, last_name, student_email, phone_no, transaction_status, reg_event)
        cursor.execute(query, values)
        db.commit()

        return "<h1>Registration successful!</h1>"

    return render_template("registration.html")





@app.route('/Adminstool', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    cursor = db.cursor()
    query = "SELECT * FROM admins_info WHERE name = %s AND password = %s"
    cursor.execute(query, (username, password))
    result = cursor.fetchone()

    if result:
        return render_template("Admintools.html")
    else:
        return "<h1>Login Failed. Invalid credentials.</h1>"
    
if __name__ == '__main__':
    app.run(debug=True)
