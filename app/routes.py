from flask import flash, redirect, render_template, url_for
from flask_login import current_user, login_user, login_required

from app import app
from app.forms import LoginForm


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


@app.route('/secretadmin', methods=['GET', 'POST'])
def secretadmin():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password!')
            return redirect(url_for('login'))
        login_user(user)
        return redirect(url_for('index'))
    return render_template('secretadmin.html', title='SuperSecret', form=form)


@app.route('/edit_blogs')
@login_required
def edit_blogs():
    return render_template('edit_blogs.html', title='Edit Blogs')
