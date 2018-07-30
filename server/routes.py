# -*- coding: utf-8 -*-
from flask import send_file, send_from_directory


def add_routes(app):
    app.add_url_rule('/', view_func=index)
    app.add_url_rule('/<path:path>', view_func=index)


def index(path=None):
    return send_file('../dist/index.html', cache_timeout=-1)
