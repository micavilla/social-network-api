# Social-Network-API

## Description
This social network API provides a space where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and the Moment.js node package to format timestamps. Once the user enters `node server.js` in their integrated terminal, the server starts and the Mongoose models are synced to the MongoDB database. Then, the user can test any of the following routes using Insomnia:

NOTE: FOR ANYTHING IN `()`, REPLACE THE `()` AS WELL AS THE MESSAGE INSIDE!

GET: localhost:3001/api/users - To view all users

GET: localhost:3001/api/users/(userId) - To view a user related to the ID

GET: localhost:3001/api/thoughts - To view all thoughts

GET: localhost:3001/api/thoughts/(thoughtId) - To view the thought related to the ID


POST: localhost:3001/api/users - To create a user
 `{
    "username": "(ENTER USERNAME HERE)",
    "email": "(ENTER EMAIL HERE)"
  }`

POST: localhost:3001/api/users/(userId)/friends/(friendId) - To add a friend

POST: localhost:3001/api/thoughts - To create a thought
 `{
    "thoughtText": "(ENTER THOUGHT TEXT HERE)",
    "username": "(ENTER USERNAME ASSOCIATED WITH THOUGHT HERE.)"
  }`

POST: localhost:3001/api/thoughts/(thoughtId)/reactions - To post a reaction to a thought
 `{
    "reactionBody": "(ENTER REACTION HERE)",
    "username": "(ENTER USERNAME ASSOCIATED WITH REACTION HERE)"
  }`


PUT: localhost:3001/api/users/(userId) - To update a user
  `{
    "username": "(ENTER USERNAME HERE)",
    "email": "(ENTER EMAIL HERE)"
  }`

PUT: localhost:3001/api/users/thoughts/(thoughtId) - To update a thought
 `{
    "thoughtText": "(ENTER THOUGHT TEXT HERE)",
    "username": "(ENTER USERNAME ASSOCIATED WITH THOUGHT HERE.)"
  }`


DELETE: localhost:3001/api/users/(userId) - To delete a user

DELETE: localhost:3001/api/users/(userId)/friends/(friendId) - To remove a friend

DELETE: localhost:3001/api/thoughts/(thoughtId) - To delete a thought

DELETE: localhost:3001/api/thoughts/(thoughtId)/reactions/(reactionId) - To delete a reaction

## Credit
Thank you to my classmates; May Pham and Joey Lee; for partnering with me to work on this challenge. Here are their GitHub profiles-- 

May Pham: https://github.com/mayphamx 

Joey Lee: https://github.com/Rockojoe2

## License
This repository is licensed by MIT. See https://mit-license.org/ to learn more.

## Usage
Walk this walkthrough video: 