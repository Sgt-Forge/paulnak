import os


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'RIP-no-secret-key'
    SQLALCHEMY_DATABASE_URI = 'postgres://{user}:{pw}@{url}/{db}'.format(
        user=os.environ.get('POSTGRES_USER'),
        pw=os.environ.get('POSTGRES_PW'),
        url=os.environ.get('POSTGRES_URL'),
        db=os.environ.get('POSTGRES_DB'))
    SQLALCHEMY_TRACK_MODIFICATIONS = False
