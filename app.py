#Import necessary libraries
from distutils.log import debug
from flask import Flask, render_template, Response, url_for, request, redirect
import os
import numpy as np
import cv2
import random
#Initialize the Flask app
app = Flask(__name__)


app.config['TEMPLATES_AUTO_RELOAD'] = True


# camera = cv2.VideoCapture(0)
'''
for ip camera use - rtsp://username:password@ip_address:554/user=username_password='password'_channel=channel_number_stream=0.sdp' 
for local webcam use cv2.VideoCapture(0)
'''
@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/product')
def product():
    return render_template('product.html')

@app.route('/why')
def why():
    return render_template('why.html')

@app.route('/testimonial')
def testimonials():
    return render_template('testimonial.html')

@app.route('/start')
def start():
    return render_template('start.html')

@app.route('/results')
def results():
    return render_template('Results.html')

@app.route('/Bisecp_Curl')
def Bisep_video():
    return render_template('bicep.html')

@app.route('/shoulder_press')
def Shoulder_press_video():
    return render_template('shoulder_press.html')

# Bicep_Curl
def gen_frames():  
    cap = cv2.VideoCapture(0)
    while True:
        success, frame = cap.read()  # read the camera frame
        frame = cv2.flip(frame, 1)
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result

@app.route('/bicep_video')
def bicep_video():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

# Shoulder Press
def gen_frames1():
    cap = cv2.VideoCapture(0)
    while True:
        success, frame = cap.read()
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result

@app.route('/shoulder_press_video')
def shoulder_press_video():
    return Response(gen_frames1(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == "__main__":
    app.run(debug = True)