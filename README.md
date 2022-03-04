# Air Quality Assessment

An interactive project where users will select an Indian city and have their local air quality displayed in cigarettes and particulate matter.

# Requirements

You need to have [Node.js](https://nodejs.org) installed (which will install ``npm``).

# Local development

Run ``npm install`` to install the dependencies needed by this project.

Visit the ``index.html`` on your browser to view the site. Any changes you make need to be rebuilt; so run ``npm run build`` and reload to see your changes.

# How to build for production

In the root of this project, run ``npm run build``, which will generate the required static files in the ``dist`` directory.

As a side note, please copy the ``index.html`` file manually to the dist folder, and make sure to change the css import at the head to point to ``./main.css``, and the js import at the end of the body to point to ``./bundle.js``.

# To do

1. Add tests
2. Refactor
