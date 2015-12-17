GENERAL INSTRUCTION AND INTRODUCTION TO THIS PROJECT.

This project focus on:
    1) How to use best practices which has to be used in the NodeJS-Express API application.
    2) How to design a modular application.
    3) How to have different tiers in your application.

This project does not focus on:
    1) Frontend design, However front end design is done using AngularJS.


This project is a very good start for any complex enterprise level application. it has the following features like:
    1) Error logging.
    2) Mongodb connection.
    3) Modules can be easily decoupled. for egs any other db can be plugged in without much code change
    4) Session timeout for every REST call.
    5) It has demo CRUD API's for  a user.


This project has a frontend part developed in angularjs which is a Login and Register new user screen,
and upon logged in you can play around with the API's you have created.


STEPS TO START THE PROJECT
1) Install NodeJS
2) Install MongoDB
3) Start MongoDB server
4) Go to the project directory and run the command 'npm install'. This will install all the node dependencies
5) Go to the project directory and run the command  'grunt'. This will start the server
6) Go to the browser and open http://localhost:3000


INTRODUCTION TO THE FOLDER STRUCTURE:
/config             -it contains all the configuration files related to the project.
/controllers        -it contains all the controllers which is nothing but the exposed REST end points
/helpers            -it contains files which server utility functions throughout the application
/logs               -it contains files that has logs
/middlewares        -it contains all the custom middleware layers on express framework
/models             -it contains files which actually talks to the db
/public             -it contains all the static files which are exposed as a Static Folder
/tests              -it contains all the unit test files