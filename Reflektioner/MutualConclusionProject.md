# Reflections upon our work during the project

## Names

Kevin,Linus,Casper

## Link to the github

https://github.com/skz911/HamburgerOrderer/

## Conclusion of implementation

### The project 
We have done a burgerorderer website where we have a frontend where clients are able to order their own burger and modify to to their own liking. We then have a database
where we store the hamburger and menu choices they made and they later on get sent to the kitchenview. We had great discussions how to manage this project. We decided to
divice the following project into three different tasks, where Linus took the client frontend, Kevin took the backend, Casper took the kitchenview frontend. This worked
great for us and we managed to collaborate in a very efficient way. 

### Containers

#### The backend container + mysql container
This container is responsible for all the backend code such as establishing a connection to the database and also handling data
from get and post requests. The backend container was built upon using JavaScript for the backend and handling all the connections. The sql container is the container
where the database is located and handled. This container is very reliant on the database to be working since most connections and data handled are being worked together
with the mysql container, so both have to be running for this container to be working without errors.

#### client contianer
This container is responible for hosting the client frontend where they can order burgers. It fetches data from the server which gets the ingredients and other items from the database and displays it on the pages. It also has the functionality for the users to create their own burger from scratch and also order extra items and drinks. It then sends a post request with this data to the server which then inserts the order into the database through a Rest request. 

### Modules




