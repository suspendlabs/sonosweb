import os, sys

from flask import Flask, request, redirect, url_for, \
    abort, render_template, jsonify, send_from_directory, \
    Response, g, Blueprint, current_app

import sonos-web

site = Blueprint('site', __name__)

@site.route('/humans.txt')
def humans():
    return send_from_directory(os.path.join(current_app.root_path, 'public'),
        'humans.txt', mimetype='text/plain')

@site.route('/robots.txt')
def robots():
    return send_from_directory(os.path.join(current_app.root_path, 'public'),
        'robots.txt', mimetype='text/plain')

@site.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(current_app.root_path, 'public'),
        'favicon.ico', mimetype='image/vnd.microsoft.icon')

@site.route('/', defaults={'path': 'index'})
@site.route('/<path:path>')
def index(path):
    return render_template('index.html')
