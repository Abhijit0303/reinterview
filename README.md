# ReInterview

ReInterview is a job search platform that connects employers and job seekers. Employers can add and manage job listings, while job seekers can browse and apply for live job opportunities. This project is built using React + Vite, leveraging the shadcn/ui library for UI components, and utilizing Clerk for authentication and Supabase for the backend.

# Features

- **For Employers:**
  - Add new job listings
  - Edit and manage existing job postings
- **For Jobseekers:**
  - Browse live job listings
  - Search and filter job opportunities
  - Apply for jobs directly through the platform

## Technologies Used:

- **Frontend:** ReactJS
- **UI Library:** shaadcn/ui
- **Authentication:** Cleark
- **Backend:** Supabase

# Getting Started

Follow these steps to set up and run the application locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account
- Clerk account

### Installation

1.  **Clone the repository:**

```
git clone https://github.com/Abhijit0303/reinterview.git
cd reinterview
```

2.  **Install dependencies:**

    Using npm:

    ```npm install```

    Or using yarn:

    ```yarn install```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory of the project and add the following variables:
```
VITE_SUPABASE_URL=<your_supabase_url>
VITE_SUPABASE_ANON_KEY=<your_supabase_anon_key>
VITE_CLERK_PUBLISHABLE_KEY=<your_cleark_publishabale_key>
```

     Replace `<your_clerk_frontend_api>`, `<your_supabase_url>`, and `<your_supabase_anon_key>` with your actual Clerk and Supabase credentials.

4.  **Start the development server:**

    Using npm:

    `npm run dev`

    Or using yarn:

    `yarn dev`

5.  **Open your browser:**

    Navigate to `http://localhost:5173` to view the application.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [Vite](https://vite.dev/)
- [ReactJS](https://react.dev/)
- [ShadCn/UI](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)
- [Supabase](https://supabase.com/)

---

For any issues or feature requests, please open an issue on the GitHub repository. Happy job hunting!
