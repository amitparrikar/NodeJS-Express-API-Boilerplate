<h2>NodeJS Express API Application Boilerplate</h2>

<h5>General instruction and introduction to this project.</h5>
<b>This project focus on:</b>
        <ul>
                <li>How to use best practices in the NodeJS-Express API application.</li>
                <li>How to design a modular application.</li>
                <li>How to have different tiers in your application.</li>
        </ul>

<b>This project does not focus on:</b>
        <ul>
                <li>Frontend design, However front end design is done using AngularJS.</li>
        </ul>

<b>This project is a very good start for any complex enterprise level application. It has the following features like:</b>
        <ul>
                <li>Error logging.</li>
                <li>Mongodb connection.</li>
                <li>Modules can be easily decoupled. for egs any other db can be plugged in without much code change</li>
                <li>Session timeout for every REST call.</li>
                <li>Node clustering and auto recovery when a node dies</li>
                <li>It has demo CRUD API's for a user.</li>
        </ul>

<b>Steps to get Up & Running</b>
        <ul>
                <li>Install NodeJS</li>
                <li>Install MongoDB</li>
                <li>Start MongoDB server</li>
                <li>Go to the project directory and run the command <code>npm install</code>. This will install all the node dependencies</li>
                <li>Go to the project directory and run the command  <code>grunt</code>. This will start the server</li>
                <li>Go to the browser and open <code>http://localhost:3000</code></li>
        </ul>
        
<p>The landing page has a login section and register a new user section. Create a sample user and try login with it. Upon successful login a panel will be shown from where you can configure your REST calls for demo purpose. This project has a frontend part developed in Angularjs.</p>

<b>Introduction to the project folder structure</b>
        <ul>
                <li><code></code></li>
                <li><code></code></li>
                <li><code></code></li>
                <li><code></code></li>
                <li><code></code></li>
                <li><code></code></li>
                <li><code></code></li>
                <li><code></code></li><li><code></code></li>
        </ul>
/config             -it contains all the configuration files related to the project.
/controllers        -it contains all the controllers which is nothing but the exposed REST end points
/helpers            -it contains files which server utility functions throughout the application
/logs               -it contains files that has logs
/middlewares        -it contains all the custom middleware layers on express framework
/models             -it contains files which actually talks to the db
/public             -it contains all the static files which are exposed as a Static Folder
/tests              -it contains all the unit test files
