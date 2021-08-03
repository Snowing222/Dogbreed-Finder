# Dogbreed-finder-app

A single page application to show random dog pictures to users using the Dog API https://dog.ceo/dog-api/documentation/breed
Built with React, JavaScript, and CSS.

# Project Overall
 - [x] Have a homepage that shows a list of all breeds available on the Dog API.
 - [x]Allow users to filter the list of breeds with simple substring matching.
 - [x] Allow users to click into each breed, and open a separate page showing four random pictures of dogs from that breed.
 - [x]Users is able to navigate back to the list page without reloading the app.. 

# Project Screen Shot(s)
![Project screen shot 1](https://i.ibb.co/k2BS59H/Capture.jpg)
![Project screen shot 2](https://i.ibb.co/Ksk275y/Capture3.jpg)

# Installation and Setup Instructions
## Clone down this repository. You will need node and npm installed globally on your machine.

Installation:
***npm install*** 

To Run Test Suite:
***npm test***

To Start Server:
***npm start***

To Visit App:
localhost:3000

Reflection
What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
What did you set out to build?
Why was this project challenging and therefore a really good learning experience?
What were some unexpected obstacles?
What tools did you use to implement this project?
This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.
Example:
This was a take-home assignment from Principles. Project goal is to not only meet all the functionality requirement, but also write good clean code with best practice.

After my first submit, I got feedback from the hiring team as below:

1. One thing we expect from our team and accordingly grade submissions for is proper, valuable test coverage. Your submission is lacking tests for the functionality you developed.

2. Another thing we expect from ourselves and grade the submissions for is proper componentization and separation of concerns within our code. Some of your components are not properly separating concerns. You may find this blog post helpful in thinking about this feedback (https://felixgerschau.com/react-hooks-separation-of-concerns/).

3. We hold our ourselves accountable to the ability to use the project readme to get up and running and being able to understand how to develop in the repository. The readme with your submission is 95% the default create react app readme, which may create the impression that it's not maintained. Please consider making clear and concise the information needed to know how to use your submission.



One of the main challenges I ran into was . This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the create-react-app boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a webpack.config.js file to more fully understand the build process.

