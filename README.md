# HamburgerOrderer
A well designed product for customers who is interested in ordering hamburgers online.




# How to run the app

### commands    
cd .\Containers\  
docker-compose up


## view the project

the project should now be able to be viewn from localhost:3000 and localhost:3001


## generate jsdocs for client-view

cd .\Containers\BurgerOrderer\
npm install
npm run doc

### finding the docs

a directory will be generated in the directory called /docs. you can then open docs/index.html to view the documentation

## Unit-test

### move to the right directory, install npm and run the script called test

cd .\Containers\BurgerOrderer\
npm install
npm test

In the console you will now see the tests run, it will test the reducer function handling the cart functions for the orderpage on the client-view.

 npm test
`

> burgerorderer@1.0.0 test
> jest

 PASS  src/tests/reducer.test.js
  Order reducer (test the functionality of the reducer in the orderpage so that i can add and modify items in the users cart
    √ should add a burger to the cart (4 ms)                                                                                 
    √ should add a drink to the cart (1 ms)                                                                                  
    √ should add an extra item to the cart (1 ms)                                                                            
    √ should increase the quantity of an existing extra item (1 ms)                                                          
                                                                                                                             
Test Suites: 1 passed, 1 total                                                                                               
Tests:       4 passed, 4 total                                                                                               
Snapshots:   0 total
Time:        1.905 s, estima

`


