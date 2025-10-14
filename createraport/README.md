# createRaport 🐛

A web application designed for creating and managing bug reports to streamline communication between clients and development teams.

---

## About The Project

**createRaport** is a tool built to simplify the process of reporting issues in IT projects. Users can easily create detailed tickets, attach visual evidence, and track the progress of fixes. The application also generates comprehensive reports in popular formats, making it easy to share progress with clients and stakeholders.

The primary goal of this project is to minimize misunderstandings and accelerate the debugging process by centralizing all necessary information in one place.

---

## Key Features

✅ **Create & Edit Tickets**: An intuitive form for submitting bug reports with fields for a title, description, priority, and status.

🖼️ **File Attachments**: Ability to attach screenshots or other images to each ticket for better clarity.

💬 **Commenting System**: Enables discussions within each ticket, facilitating clear communication between developers and the reporter.

📄 **Report Generation**: Export a selection of tickets to **PDF**, **Excel** (.xlsx), and **Word** (.docx) files.

- **Client-Facing View**: A dedicated page where clients can view a list of their submitted issues and track their current status.

- **Navigation Panel**: A clean sidebar that displays all created tickets for easy access and management.

---

## Tech Stack

- **Frontend**:
  - [React.js](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [Prisma](https://www.prisma.io/) (ORM)
- **Database**:
  - [PostgreSQL](https://www.postgresql.org/)
- **Deployment**:
  - [Docker](https://www.docker.com/)
  - [Nginx](https://www.nginx.com/)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following software installed on your machine:
- [Node.js](https://nodejs.org/en/download/) (v18.x or higher)
- [Docker](https://www.docker.com/products/docker-desktop/) (Recommended)
- [Git](https://git-scm.com/)

### Installation

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/your-username/createRaport.git](https://github.com/your-username/createRaport.git)
    cd createRaport
    ```

2.  **Running with Docker (Recommended):**
    - Create a `.env` file in the `backend/` directory based on `backend/.env.example`.
    - Run the containers:
      ```bash
      docker-compose up --build
      ```
    - The application will be available at `http://localhost:3000`.

3.  **Manual Installation:**

    - **Backend:**
      ```bash
      cd backend
      npm install
      cp .env.example .env  # Fill in the environment variables
      npx prisma migrate dev # Run database migrations
      npm run start
      ```
    - **Frontend:**
      ```bash
      cd ../frontend
      npm install
      npm run dev
      ```
