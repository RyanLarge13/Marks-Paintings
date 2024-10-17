# Marks Paintings

Welcome to the **Marks Paintings** project! This web application is built with **Next.js** and **Prisma ORM**, providing a smooth and scalable platform to showcase artwork with future potential for e-commerce functionality.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Future Features](#future-features)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Artwork Display:** Browse and explore an extensive collection of paintings.
- **Image Optimization:** Fast and efficient image loading through Next.js's built-in image optimization.
- **Pre-caching:** Improves load time by prefetching content for a seamless user experience.
- **Pagination:** Artwork listings are paginated for better performance and usability.
- **Google Cloud Storage:** Images are securely stored and retrieved from a Google Cloud Storage bucket.
- **Scalable Database:** Managed using Prisma ORM for efficient querying and scalable architecture.
- **Responsive Design:** Fully responsive and optimized for mobile devices.
- **E-commerce Ready:** (Coming Soon) Future support for purchasing paintings directly from the site.

## Tech Stack

- **Next.js** - React framework for server-side rendering and static generation.
- **Prisma ORM** - Database management and ORM tool.
- **Google Cloud Storage** - For storing and retrieving image assets.
- **Pre-caching & Image Optimization** - Leveraging Next.js capabilities to enhance performance.
- **PostgreSQL With Neon**

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/Marks-Paintings.git
   cd Marks-Paintings
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the database**:

   - Ensure you have PostgreSQL DB running with a DBMS, depending on your Prisma configuration.
   - Run the Prisma migrations:
     ```bash
     npx prisma migrate dev
     ```

4. **Set up Google Cloud Storage**:

   - Create a Google Cloud Storage bucket and store the credentials.
   - Set the environment variables for Google Cloud in `.env`.

5. **Run the development server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

### Image Upload

- Artworks are uploaded to the Google Cloud Storage bucket.
- Upon successful upload, the image URL is stored in the database via Prisma.

### Pagination

- Artworks are paginated to improve load times and user experience.
- Adjust the number of artworks displayed per page in the code as needed.

### Pre-caching

- Key routes and images are pre-cached for enhanced performance using Next.js features.

### Image Optimization

- Images are automatically optimized with Next.js, reducing load times without compromising quality.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```plaintext
DATABASE_URL=<your_database_url>
GOOGLE_APPLICATION_CREDENTIALS=<path_to_google_cloud_credentials_json>
NEXT_PUBLIC_GOOGLE_BUCKET=<google_cloud_bucket_name>
```

Ensure you have the correct Google Cloud credentials for accessing your storage bucket.

## Future Features

- **E-commerce Integration**: Allow users to purchase artwork directly from the platform.
- **User Accounts**: Enable user registration, profiles, and saved galleries.
- **Search Functionality**: Advanced search options for exploring artwork by artist, style, or category.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you have any suggestions or improvements.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
