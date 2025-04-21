# 📚 MyBookshelf API

MyBookshelf API adalah RESTful API yang memungkinkan pengguna untuk mengelola koleksi buku pribadi mereka. API ini dilengkapi dengan sistem autentikasi berbasis API Key dan integrasi dengan Google Books API untuk pencarian buku.

## 🚀 Fitur

- Registrasi dan login pengguna dengan API Key unik.
- CRUD (Create, Read, Update, Delete) untuk koleksi buku pribadi.
- Pencarian buku melalui Google Books API.
- Perlindungan endpoint menggunakan API Key.

## 🛠️ Teknologi yang Digunakan

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- UUID
- Axios
- CORS

## 📁 Struktur Proyek

```bash
mybookshelf-api/
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
├── server.js
├── package.json
├── vercel.json
└── README.md
```

## ⚙️ Instalasi

1. **Klon repositori ini**

   ```bash
   git clone https://github.com/killflex/mybookshelf-api.git
   cd mybookshelf-api
   ```

2. **Instal dependensi**

   ```bash
   npm install
   ```

3. **Buat file `.env`**

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Jalankan server**

   ```bash
   npm start
   ```

   Server akan berjalan di `http://localhost:5000`

## 🔐 Autentikasi

Setelah registrasi atau login, pengguna akan menerima `apiKey` yang harus disertakan dalam header setiap permintaan ke endpoint yang dilindungi:

```http
x-api-key: your_api_key
```

## 📄 Dokumentasi API

### 📚 Swagger Documentation

Dokumentasi API tersedia melalui Swagger UI di:\*\*\*\*

- `GET /api-docs`

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

Semua endpoint buku memerlukan header `x-api-key`.

- `GET /api/books`

  - **Deskripsi:** Mengambil semua buku milik pengguna.

- `POST /api/books`

  - **Body:**

    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "description": "Book Description"
    }
    ```

- `PUT /api/books/:id`

  - **Body:**

    ```json
    {
      "title": "Updated Title",
      "author": "Updated Author",
      "description": "Updated Description"
    }
    ```

- `DELETE /api/books/:id`

  - **Deskripsi:** Menghapus buku berdasarkan ID.

- `GET /api/books/search-books?q=keyword`

  - **Deskripsi:** Mencari buku menggunakan Google Books API.

## 🧪 Pengujian dengan Postman

Gunakan Postman untuk menguji endpoint:

1. **Registrasi/Login:**

   - Kirim permintaan `POST` ke `/api/auth/register` atau `/api/auth/login` dengan body JSON yang sesuai.

   - Simpan `apiKey` dari respons.

2. **Akses Endpoint Buku:**

   - Tambahkan header `x-api-key` dengan nilai `apiKey` yang diperoleh.

   - Kirim permintaan ke endpoint buku sesuai kebutuhan.

## 🌐 Deployment

Proyek ini dapat dideploy menggunakan platform seperti Vercel atau Heroku. Pastikan variabel lingkungan (`MONGODB_URI`) telah dikonfigurasi dengan benar di platform deployment yang digunakan.

## 📌 Catatan

- Pastikan untuk menjaga keamanan `apiKey` Anda.

## 👨‍💻 Contributors

- [@killflex](https://github.com/killflex) – Original author

---
