import os, sys, string
import json

from flask import Flask, redirect, url_for, abort, jsonify, g

PROJECT_ROOT = os.path.dirname(os.path.realpath(__file__))

app = Flask(__name__, static_folder=os.path.join(PROJECT_ROOT, 'public'),
        static_url_path='/public')

app.config.from_object('sonosweb.config.DefaultConfig')

def register_blueprint(app):
    from sonosweb.views.site import site
    app.register_blueprint(site)

register_blueprint(app)
