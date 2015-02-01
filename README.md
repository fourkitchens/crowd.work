# Crowd Work
Team discussion organization tool, built on Meteor.

# Getting Started

## Installing meteor (unix-based machines):

* Run: `curl https://install.meteor.com | /bin/sh`

## Running crowd.work
* Change your current directory to the src subdirectory, like: `cd /path/to/crowd.work/src`.
* Run meteor inside of meteor's root: `meteor`
* Meteor will initialize itself, install it's dependencies, and tell you when it's finished.
* When Meteor has finished initializing itself, open `http://localhost:3000` in your browser. Of course, you can put it on any port you would like, but by default Meteor takes over port 3000.

## Coding Standards
This project contains a tool that enforces coding standards. Before code is merged into the project, it must meet these standards, which are defined in the `.jscsrc` and `.jshintrc` files in the project root. 

To run the coding standards sniffer, you need to do the following:

* Run `npm install` from the project's root directory (not Meteor's directory). This will install the node modules needed to run gulp, gulp-jscs, and gulp-jshint.
* When you want to scan the codebase for errors, run `gulp cs` from a console in the project root. An error report will then be generated in your console. You should fix the errors, and re-run the sniffer until no errors are reported.

