# Names
Linus, Kevin and Casper

### link to our project
Link to the project repository: https://github.com/skz911/HamburgerOrderer/


# The test

## what we tested

### why?
We chose to test a function in the client application handling the cart functions, specifically the adding to the cart.
We did this because the function is important for the project to work.

### how often?

This test is made to be done before any commit in the client-page to check if the current branch is working as it should.

### if it doesnt work?

If the tests come back unsuccessful we know that something in the project doesnt work. This is great since we can pause the commit and not push it up to the repo before it is fixed.


## how we tested

To do our unit tests we downloaded the Javascript testing framework called Jest, we didnt put in much thought when we chose the framework, we just chose the first one we found on google.

### example test:

 npm test

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
Time:        1.905 s, estimated 2 s
Ran all test suites.

# conclusion

Using Jest was pretty straight forward and simple. you import a function from your project by putting "export" and then importing it in the testing file.

what went a little less good was typing out the tests manually so we asked our good friend ChatGPT to help us since its a tedious task to do by hand. We ofcourse looked over the tests afterwards to see what they did was what we wanted them to do.

What we didnt manage to do was to test more of the project since we didnt have a lot of time left for the project. To help with this we have learnt that using a testing framework since the beginning to more quickly move through the development process is the way to do it.






