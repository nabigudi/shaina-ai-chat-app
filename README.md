# Shaina Chat AI - Renaiss AI Chat App

## The project
Shaina Chat AI is a simple chat app where you can send any question, and an AI will answer it. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can access the repo here: [GitHub Repo](https://github.com/nabigudi/renaiss-ai-chat-app)

### This project was a Frontend Challenge 
As Shaina Chat AI was a frontend challenge, here is part of the requirements and restrictions:
- The designs are on Figma; here are the screenshots.
- I must use OpenAI API.
- I must use React and Typescript, but I can choose which framework or library to use. I choose NextJS.
- The application must have a specific section to configure the system indicator for Open AI, and the model must respond according to the configuration of said indicator.
- There should be an area for the chat history. Each history should have as its title the first message sent through the chat. Clicking on such a history should retrieve all the messages it contains.
- A maximum of 1000 tokens is allowed. As the user types their message, it will show how many tokens they have left.
- The user must select a search or create a new one to start using the chat.
- The chat must adapt the content sent and structure it accordingly. For example, if the chat sends me an image or a piece of code, the chat must be prepared to display that content accurately.
- The web app must be responsive, but the client does not give the Responsive design.
- There are some buttons that the client doesn't explain their specific functionality, so I decided to give them any functionality, so there are no buttons without functionality.
- The project must be deployed on any platform. I choose Vercel. 


## The skeleton
The tooling and criteria used for this project were:
* NextJS (create-next-app)
* Typescript
* TailwindCSS
* Axios
* EsLint
* Responsive Web Design
* OpenAI (AI API)
* Vercel (to deploy)

## How to run the app?
`npm run dev` runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

Additionally, you can visit [https://renaiss-ai-chat-app.vercel.app](https://renaiss-ai-chat-app.vercel.app) to see a live version of the app.

## How it works?
You say your name and then set a system criteria, for example, "You are a javascript developer." then you can ask the IA any question you have, for example, "I need a code to sum two numbers." finally, the AI will answer you with the code.

## Next steps
* **Add new models:** like the image model DALL-E, also from OpenAI.