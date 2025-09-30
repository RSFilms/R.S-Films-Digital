# Yeh file aapke server par run hogi (e.g., app.py)

from flask import Flask, render_template

app = Flask(__name__)

# Home Page (index.html) ko load karne ke liye
@app.route('/')
def home():
    # Aap yahan dynamic data (jaise ki testimonials) load kar sakte hain
    # current_testimonials = load_testimonials_from_db() 
    return render_template('index.html') # index.html file ko render karega

if __name__ == '__main__':
    # Debug=True se aap code changes turant dekh sakte hain
    app.run(debug=True)
