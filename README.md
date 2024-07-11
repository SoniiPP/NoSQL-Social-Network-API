# NoSQL-Social-Network-API
As a social media startup I want an API for my social network that uses a NoSQL database so that  my website can handle large amounts of unstructured data.
## Description 
NoSQL Social Network API is a Node.js application programming interface (API) that allows users to perform CRUD operations on social networking data models using a NoSQL database. The data models include friends, users, thoughts, and reaction data models, and they can be retrieved by ID or all of them. This API is built using Node.js and Mongoose, and it provides a simple and scalable way to handle social networking data without the restrictions of traditional relational databases.
## The Challenge
The challenge was to build a RESTful API that allows a social media startup to perform CRUD operations on users, thoughts, and reactions data models using a NoSQL database. The API must be built using Node.js and Mongoose and must provide endpoints that can handle large amounts of unstructured data.

API must allow users to:

- Create and delete user accounts.
- Create, read, update, and delete thoughts.
- Add and remove reactions to thoughts.
- Add and remove friends to a user's friend list.

Test API: use Insomnia or a similar tool to send HTTP requests to the API endpoints and verify that the responses are correct.

#### Available Endpoints:

Each endpoint must include the necessary data in the request body or URL parameters as specified in the acceptance criteria.

1. GET /api/users - get all users
2. GET /api/users/:userId - get a single user by ID
3. POST /api/users - create a new user
4. PUT /api/users/:userId - update a user by ID
5. DELETE /api/users/:userId - delete a user by ID
6. GET /api/thought - get all thought
7. GET /api/thought/:thoughtId - get a single thought by ID
8. POST /api/thought - create a new thought
9. PUT /api/thought/:thoughtId - update a thought by ID
10. DELETE /api/thought/:thoughtId - delete a thought by ID
11. POST /api/thought/:thoughtId/reactions - add a reaction to a thought
12. DELETE /api/thought/:thoughtId/reactions/:reactionId - remove a reaction from a thought
13. POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
## link for the demo
https://drive.google.com/file/d/1JFnzY0vMr1YwUvQBYmZwmoujJ9J3FSNb/view

## Build with
Json, Dynamic JavaScript, Mongoose, Express, Node.js, Insomnia 
![Screenshot 2024-07-12 020219](https://github.com/SoniiPP/NoSQL-Social-Network-API/assets/157616916/6c2a9a2a-0456-4798-9871-9c81900c6400)![Screenshot 2024-07-12 020246](https://github.com/SoniiPP/NoSQL-Social-Network-API/assets/157616916/15f1a8b6-3409-424e-add6-cf81b1f050c7)![Screenshot 2024-07-12 020321](https://github.com/SoniiPP/NoSQL-Social-Network-API/assets/157616916/be0fc7df-47c6-4681-91e1-baa945ce3575)




15. DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list

## Insta

