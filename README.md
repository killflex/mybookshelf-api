# 📚 MyBookshelf API

MyBookshelf API is a RESTful API that enables users to manage their personal book collections. This API comes with API Key-based authentication system and integration with Google Books API for book searching.

## 🚀 Features

- User registration and login with unique API Key.
- CRUD (Create, Read, Update, Delete) for personal book collection.
- Book search through Google Books API.
- Endpoint protection using API Key.

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- UUID
- Axios
- CORS

## 📁 Project Structure

```bash
mybookshelf-api/
├── config/
│   ├── db.js
├── controllers/
│   ├── authController.js
│   └── bookController.js
├── middlewares/
│   └── apiKeyMiddleware.js
├── models/
│   ├── User.js
│   └── Book.js
├── routes/
│   ├── authRoutes.js
│   └── bookRoutes.js
├── utils/
│   ├── swagger-output.json
│   └── swagger.js
├── .env
├── .env.example
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
├── server.js
├── vercel.json
```

## ⚙️ Installation

1. **Clone this repository**

   ```bash
   git clone https://github.com/killflex/mybookshelf-api.git
   cd mybookshelf-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the server**

   ```bash
   npm start
   ```

   Server will run on `http://localhost:5000`

## 🔐 Authentication

After registration or login, users will receive an `apiKey` that must be included in the header for every request to protected endpoints:

```http
x-api-key: your_api_key
```

## 📄 API Documentation

### 📚 Swagger Documentation

API documentation is available through Swagger UI at:

- `GET /api-docs`

![Swagger UI MyBookShelf API](https://res.cloudinary.com/dn2tic45s/image/upload/v1745310507/SwaggerUI_mybookshelf-api-ferry_aulm8x.png)

### 🧑‍💼 Auth

- `POST /api/auth/register`

  - **Body:**

    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```

  - **Response:**

    ```json
    {
      "apiKey": "generated_api_key"
    }
    ```

- `POST /api/auth/login`

  - **Body:**

    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```

  - **Response:**

    ```json
    {
      "apiKey": "your_api_key"
    }
    ```

### 📚 Buku

All book endpoints require `x-api-key` header.

- `GET /api/books`

  - **Description:** Get all books belonging to the user.

- `POST /api/books`

  - **Body:**

    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "description": "Book Description"
    }
    ```

- `PATCH /api/books/:id`

  - **Body:**

    ```json
    {
      "title": "Updated Title",
      "author": "Updated Author",
      "description": "Updated Description"
    }
    ```

- `DELETE /api/books/:id`

  - **Description:** Delete book by ID.

- `GET /api/books/search-books?q=keyword`

  - **Description:** Search books using Google Books API.

## 🧪 Testing with Postman

Use Postman to test the endpoints:

1. **Registration/Login:**

   - Send a `POST` request to `/api/auth/register` or `/api/auth/login` with appropriate JSON body.

   - Save the `apiKey` from the response.

2. **Access Book Endpoints:**

   - Add `x-api-key` header with the obtained `apiKey` value.

   - Send requests to book endpoints as needed.

## 🌐 Deployment

This project can be deployed using platforms like Vercel or Heroku. Make sure environment variables ( `MONGODB_URI` ) are properly configured in the deployment platform.

## 📌 Notes

- Make sure to keep your `apiKey` secure.

## 👨‍💻 Contributors

- [@killflex](https://github.com/killflex) – Original author

---
