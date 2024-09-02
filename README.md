# Adaca Node Express API

This is a simple Node.js API built with Express and MongoDB, including error handling, validation, and unit tests. This project is designed to demonstrate best practices for creating a robust and maintainable API.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4 or higher)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/adaca-node-express.git
    cd adaca-node-express
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB database. You can use a local MongoDB instance or a cloud-based service like MongoDB Atlas. Update the MongoDB connection string in `app.js` if necessary.

## Running the Application

To start the application, run:

```bash
npm start
```


The API will be available at `http://localhost:3000/api`.

## API Endpoints

### Create a User

- **URL:** `/api/users`
- **Method:** `POST`
- **Request Body:**

    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30
    }
    ```

- **Success Response:**

    - **Code:** 201
    - **Content:**

        ```json
        {
          "_id": "60c72b2f9b1d8e1a4c8b4567",
          "name": "John Doe",
          "email": "john@example.com",
          "age": 30
        }
        ```

- **Error Responses:**

    - **Code:** 400
    - **Content:** `{ "error": "Validation error message" }`

    - **Code:** 400
    - **Content:** `{ "error": "Email already exists" }`

## Running Tests

To run the unit tests, use:

```bash
npm test
```


The tests are located in the `tests` directory and cover the main functionality of the API.

## Project Structure

- `app.js`: Main application file.
- `models/User.js`: Mongoose model for the User.
- `routes/index.js`: Express routes.
- `controllers/userController.js`: Controller for handling user-related requests.
- `tests/userController.test.js`: Unit tests for the user controller.

## License

This project is licensed under the ISC License.