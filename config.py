import os


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'RIP-no-secret-key'
    TEMPLATES_AUTO_RELOAD = True
