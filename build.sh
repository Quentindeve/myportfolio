#!/bin/env sh

npm install
npm run webpack
npm tailwindcss -i ./static/css/tailwind_input.css -o ./static/css/app.css
zola build
