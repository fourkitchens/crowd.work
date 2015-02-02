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
This project contains multiple tools for enforcing coding standards and checking for errors within the codebase. Before code is merged into the project, it must meet the standards defined in the `.jscsrc` and `.jshintrc` files in the project root. An [EditorConfig](http://editorconfig.org/) file is provided for convenience.

### Installation

* Change directory to the crowd.work directory, like: `cd /path/to/crowd.work`
* Run `npm install` to retrieve dependencies.

### Checking

To check your local codebase, run `gulp cs` from a console in the project root. An error report, if any, will be generated in the console. If errors are reported, they should be fixed and the Coding Standards checks should be executed until all errors are eliminated.
