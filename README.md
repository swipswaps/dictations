# Dictations

Experimental progressive web application for dictations. Only the English and
French languages are currently supported.

## Disclaimer & contributions

__This modest application is more a proof of concept than a true dedicated
application__, but it remains usable. However, this repo remains open to any
pull request, such as a better logo or better dictation texts.

## Screenshots

![Application screenshots](/data/screenshots.png?raw=true)

## Development & build
This software requires the installation of `npm` to be built, then go to the
root of the project and run this:

    npm install

For a development session:

    npm start

For a production build:

    npm run build

To deploy the application, don't forget to change the value of the homepage in
the package.json so that it matches the url of your web application:

    npm run deploy

## Technical notes

This application is based on the Pico open source voice synthesizer for its good
performances while keeping a reduced size, while waiting for a better
alternative free software.
