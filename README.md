<h2>NodeJS-Express API Application Boilerplate</h2>

<h4>General instruction and introduction to this project.</h4>
<p>This is an advanced boilerplate. i assume that you have a basic knowledge of NodeJS, Express API framework, How to install node module, Basics of mongodb database, How to import and export module.</p>

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
                <li>MVC pattern</li>
                <li>Error logging</li>
                <li>Mongodb connection</li>
                <li>Modules can be easily decoupled. for example any other database can be plugged in without much code change</li>
                <li>Session timeout for REST call</li>
                <li>Node clustering and auto recovery when a node dies</li>
                <li>It has a sample CRUD API's for a user model</li>
        </ul>

<b>Steps to get Up & Running</b>
        <ul>
                <li>Install NodeJS</li>
                <li>Install Grunt</li>
                <li>Install MongoDB</li>
                <li>Start MongoDB server</li>
                <li>Go to the project directory and run the command <code>npm install</code>. This will install all the node dependencies</li>
                <li>Go to the project directory and run the command  <code>grunt</code>. This will start the server</li>
                <li>Go to the browser and open <code>http://localhost:3000</code></li>
        </ul>
        
<p>The landing page has a login section and register a new user section. Create a sample user and try login with it. Upon successful login a panel will be shown from where you can configure your REST calls for demo purpose.</p>

<b>Introduction to the project folder structure</b>
        <ul>
                <li><code>/config</code>&nbsp;&nbsp;&nbsp;All the configuration files related to the project</li>
                <li><code>/controllers</code>&nbsp;&nbsp;&nbsp;All the controllers which is nothing but the exposed REST end points</li>
                <li><code>/helpers</code>&nbsp;&nbsp;&nbsp;Files which serve utility functions throughout the application</li>
                <li><code>/logs</code>&nbsp;&nbsp;&nbsp;Files that has real time application logs</li>
                <li><code>/middlewares</code>&nbsp;&nbsp;&nbsp;All the custom middleware layers on express framework</li>
                <li><code>/models </code>&nbsp;&nbsp;&nbsp;Files which actually talks to the db</li>
                <li><code>/public</code>&nbsp;&nbsp;&nbsp;Static files which are exposed as a Static Folder</li>
                <li><code>/tests</code>&nbsp;&nbsp;&nbsp;All the unit test files</li>
        </ul>

<h2>License</h2>
<p>MIT</p>
