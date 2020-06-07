from flask import render_template, url_for

from app import app


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Home')


@app.route('/blogs')
def blogs():
    return render_template('blogs.html', title='Blogs')


@app.route('/potw')
def potw():
    return render_template('potw.html', title='Photos')


@app.route('/resume')
def resume():
    return render_template('resume.html', title='Resume')
