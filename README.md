# sps-project  
  
wow!!

## Getting Started
1. `git clone https://github.com/soraeee/sps-project` clone repo 
2. 'cd event-digger' go to project folder 
3. `npm i` install npm packages
4. `npm i --save material-ui-search-bar --force`
`npm i react-router-dom` install two necessary npm package that's not included in the default
5. `npm run client` for client side; `npm run server` for server side

## To run it on cloudshell
1. go to cloudshell editor, follow all five steps in [Getting Started]
2. enter 'y' when the terminal asks you whether to run on another port
3. go to preview on top right, instead of 'preview on port 8080', click change port and type in '3001'
4. click 'preview on port 3001'
5. a new tab should be opened and you can see the app running (nice!)

Enable service for Google Datastore
(You can skip this if you don't test backend.)
Change URL to local machine public ip address (e.g. 74.219.18.3:8080/form, be sure to include server port) in src/icons/AddCard.js
Change Datastore Id to your account id (e.g. qzhu-sps-summer22) in server/index.js

## To delpoy it on AppEngine
1. Enable service for Google Datastore and Google AppEngine, and you will be able to find the project ID in AppEngine web page
2. Change URL to your project id (e.g. https://qzhu-sps-summer22.ue.r.appspot.com) in src/icons/AddCard.js
3. Change Datastore Id to your account id (e.g. qzhu-sps-summer22) in server/index.js
4. `npm run build` organize static files, make AppEngine better manage it
5. `gcloud init` initialize gcloud 
6. `gcloud app delpoy` deploy the local code and/or configuration of your app to App Engine

ps. the app is showing slightly different layout on different browser (prefer chrome over safari), i suggest work on the project where the layout look nicer.

if the terminal run into any unexpected error, try copy pasting the error message to google search, usually the first answer on stack overflow works!

thanks ᕦ(ò_óˇ)ᕤ 

## deploy
deployed website: https://sps-diego-event-digger.netlify.app
instuction on how to deploy will be updated later..
