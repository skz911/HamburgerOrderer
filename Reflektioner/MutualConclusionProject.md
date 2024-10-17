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


## Experiences with the project

In summary it went well, but to dig deeper and understand our difficulties we have to tackle them one by one. What we all thought was good is that we were already 
friends from before so it made things easier to communicate and the barrier from being strangers to friends were already gone which meant we had an easier way of
communicating our skills and preferences and understanding eachother alongside projects timeline. However, we did run into some problems during the time. Since the
project was divided into three parts and we all were responsible for one part it made us all have to meet our deadlines in time, for example the backend had to be done
fairly quick so the frontend can gather data like ingredients etc. This was a good way of doing the project, but we all had personal problems during the project like
someone being sick or busy with other things in life which made the rest of the project be up on hold until that person was done. That was the only difficulty we can think of. What we could have done different is maybe have a schedule for everyones part of the project and use the trello that we created in the start abit more.

## Experiences with working with containers

In the start we had alot of problems with docker and we all find it not very beginner friendly. However, when you grasp the concept of dockers you start to realize that it is very useful when you work in a group and everyone has different configurations and add new packages. So when everything was up and running with the dockers, and we had all the containers ready, then we had a great experience with dockers and felt that it saved alot of issues with configurations with libraries etc. We also had problems like the backend trying to connect to the mysql database container before that one was up and running but we solved that by adding a check so we try to reconnect if it fails, so called "health check". What we could have done different is used the dockers more effectively by using mounts and binds so we could have more efficiently developed our project without having to restart the containers and rebuild everytime. 

