# -*- coding: utf-8 -*-
import os
from flask import Flask
from routes import add_routes
from google.appengine.api import users


class Server(object):
    def __init__(self):
        self.flask = Flask(__name__)
        self.flask.config.from_object(ServerConfiguration)
        add_routes(self.flask)

    def start(self, port):
        self.flask.run(port=port)

    def __call__(self, environ, start_response):
        return self.flask.wsgi_app(environ, start_response)


class ServerConfiguration(object):
    DEBUG = os.environ.get('env', 'dev') == 'dev'
    SECRET_KEY = u'\x14\xc8\x85\x80\xf8\xbd\xc3\x9b\x1f\x89\xa0\xd9\xe4C4\xf1&\xdb\xb6\xf8\xf6\x02l\xf6'
