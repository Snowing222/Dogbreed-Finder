# Dogbreed-finder-app
A single page application to show random dog pictures to users using the Dog API https://dog.ceo/dog-api/documentation/breed
Built with React, JavaScript, and CSS.

# Project Status:
Under development
Testing in progress - Pending Feedback
# Project Overall
 - [x] Have a homepage that shows a list of all breeds available on the Dog API.
 - [x] Allow users to filter the list of breeds with simple substring matching.
 - [x] Allow users to click into each breed, and open a separate page showing four random pictures of dogs from that breed.
 - [x] Users is able to navigate back to the list page without reloading the app.. 

# Project Screen Shot(s)
![zoom_0 (1)](https://user-images.githubusercontent.com/62358655/128387709-c78ae675-6050-4cae-81f6-43206fce66b7.gif)

# Installation and Setup Instructions
## Clone down this repository. You will need node and npm installed globally on your machine.

Installation:
***npm install*** 

To Run Test Suite:
***npm test***

To Start Server:
***npm start***

To Visit App:
***localhost:3000***

# Project Review
This was a take-home assignment from Principles. Project goal is to not only meet all the functionality requirement, but also write good clean code with best practice.

After my first submit, I got feedback from the hiring team as below, and here is how I address them:

***1. One thing we expect from our team and accordingly grade submissions for is proper, valuable test coverage. Your submission is lacking tests for the functionality you developed.***

***Comment***
I understand how to wite class based components and test by shallow rendering them. I'm not familar with writing test for custom hook w/ fetching and functional component. This lead me to spend a few days on fiercely googling and reading, there is differenct opinions, but I couldnt find the satisfied doc to follow and figure out the proper testing stradegy for my code. 
Below is what I have so far. I hope the team can give me some feedback on this, and point me to the right direction.

User Story - What I want to test:

Homepage.test.js
- [] Home page should render search bar
- [] When page first load. Home page should render list of dogbreeds
- [] User should filter the list of breeds with simple substring matching.
- [] When search Term is empty. Homepage should return a list of dogbreeds.

Searchbar.test.js
- [] Search bar should change input

UseHomepage.test.js
- [] Should call url and fetch list of dogbreed.

useDogbreedImages.test.js
- [] Should call url and should fetch list of 4 images

DogbreedImages.test.js
- [] should render 4 images on the page

***2. Another thing we expect from ourselves and grade the submissions for is proper componentization and separation of concerns within our code. Some of your components are not properly separating concerns. You may find this blog post helpful in thinking about this feedback (https://felixgerschau.com/react-hooks-separation-of-concerns/).***

***Comment***
The blog that team sent me is very helpful for me to understand what's the team is looking for. As I didnt implement custom hook to seperating concerns in my previous projects. Although this is just a simple project, I can see the benefit of seperating hooks out of the presentational component. How this practice will benefit a more complex project.
Seperate custom hook useHomepge and useDogbreedImages.
Seperate seachbar component

***3. We hold our ourselves accountable to the ability to use the project readme to get up and running and being able to understand how to develop in the repository. The readme with your submission is 95% the default create react app readme, which may create the impression that it's not maintained. Please consider making clear and concise the information needed to know how to use your submission.***

***Comment***
Updated




