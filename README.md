Here's the complete `README.md` file with more detailed sections for your To-Do List API:

```markdown
# ToDoList API

This is a simple RESTful API for managing a To-Do list, built with **Node.js**, **Express.js**, and **MongoDB**. It supports all basic CRUD operations to create, read, update, and delete tasks.

## Features

- Create, retrieve, update, and delete tasks.
- Store tasks in a MongoDB database.
- API built using Express.js for routing and Mongoose for MongoDB interaction.
- Environment variables for configuration (using dotenv).

## Technologies Used

- **Node.js**: JavaScript runtime for executing server-side code.
- **Express.js**: Web framework for building APIs and handling HTTP requests.
- **MongoDB**: NoSQL database used to store task data.
- **Mongoose**: MongoDB object modeling library for managing schema and interactions with MongoDB.
- **dotenv**: For managing environment variables.

## Prerequisites

Before you start, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [MongoDB](https://www.mongodb.com/try/download/community) (either locally or use a cloud service like MongoDB Atlas)

## Installation

Follow these steps to set up and run the application locally:

### 1. Clone the repository

```bash
git clone https://github.com/Umerashaik281/InnomaticsInternshiptask9.git
cd InnomaticsInternshiptask9
```

### 2. Install dependencies

Make sure you have [Yarn](https://classic.yarnpkg.com/en/docs/install/) installed. Run the following command to install the required packages:

```bash
yarn install
```

This will install the project dependencies as specified in the `package.json` file.

### 3. Set up environment variables

Create a `.env` file in the root of the project directory. This file will store your environment variables, including your MongoDB URI and the port the server will listen on.

Sample `.env` file:

```
MONGO_URI=mongodb://localhost:27017/todolist
PORT=3000
```

- `MONGO_URI`: The MongoDB connection URI. If you're using a cloud MongoDB service (like MongoDB Atlas), replace this with your connection string.
- `PORT`: The port on which your server will run locally (default is 3000).

### 4. Start the application

To start the server, run:

```bash
yarn start
```

The API will start running on `http://localhost:3000`.

## API Endpoints

### `GET /tasks`

Retrieve all tasks from the database.

**Response**:

```json
[
  {
    "id": "1",
    "title": "Task 1",
    "completed": false
  },
  {
    "id": "2",
    "title": "Task 2",
    "completed": true
  }
]
```

### `POST /tasks`

Create a new task.

**Request Body**:

```json
{
  "title": "New Task",
  "completed": false
}
```

**Response**:

```json
{
  "id": "3",
  "title": "New Task",
  "completed": false
}
```

### `PUT /tasks/:id`

Update an existing task.

**Request Body**:

```json
{
  "title": "Updated Task",
  "completed": true
}
```

**Response**:

```json
{
  "id": "1",
  "title": "Updated Task",
  "completed": true
}
```

### `DELETE /tasks/:id`

Delete a task.

**Response**:

```json
{
  "message": "Task deleted"
}
```

## Testing

To test the API locally, you can use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/).

### Example of testing endpoints with Postman:

1. **GET `/tasks`**: Retrieve all tasks.
2. **POST `/tasks`**: Create a new task by sending a POST request with a JSON body.
3. **PUT `/tasks/:id`**: Update a task by sending a PUT request with the task ID in the URL and the updated data in the body.
4. **DELETE `/tasks/:id`**: Delete a task by sending a DELETE request with the task ID in the URL.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/) - Web framework for Node.js.
- [MongoDB](https://www.mongodb.com/) - NoSQL database used to store tasks.
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool.
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a `.env` file.
- [Node.js](https://nodejs.org/) - JavaScript runtime for building the backend.

## Contributing

Feel free to fork this project, submit issues, or create pull requests if you want to contribute to improving the functionality of this API.

If you encounter any issues, please feel free to [open an issue](https://github.com/Umerashaik281/InnomaticsInternshiptask9/issues).

## Author

Developed by **Shaik Umera** - [GitHub](https://github.com/Umerashaik281)
```

### Key Sections in the `README.md`:
1. **Project Overview**: Describes what the API does and its main features.
2. **Technologies Used**: Lists all the key technologies used in the project.
3. **Installation Instructions**: Step-by-step guide on how to set up the project on a local machine.
4. **API Endpoints**: Describes the API endpoints, including method type, input, and response.
5. **Testing Instructions**: Provides an overview of how to test the API.
6. **License**: Mentions the licensing information for the project.
7. **Contributing**: Details about contributing to the project if needed.
8. **Author Information**: Credits the author and provides a link to their GitHub profile.

This is a comprehensive `README.md` template. You can adjust the details according to your exact implementation.
