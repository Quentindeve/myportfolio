#!/bin/env sh

npm install
npx webpack
npx tailwindcss -i ./static/css/tailwind_input.css -o ./static/css/app.css
zola build
