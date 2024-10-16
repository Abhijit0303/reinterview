import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/landiing";
import Onboarding from "./pages/onboarding";
import JobListing from "./pages/job-listing";
import JobPage from "./pages/jobs";
import PostJobs from "./pages/post-jobs";
import SavedJobs from "./pages/saved-jobs";
import Myjobs from "./pages/my-jobs";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRout from "./components/protected-route";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRout>
            <Onboarding />
          </ProtectedRout>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRout>
            <JobListing />
          </ProtectedRout>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <ProtectedRout>
            {" "}
            <JobPage />
          </ProtectedRout>
        ),
      },
      {
        path: "/post-jobs",
        element: (
          <ProtectedRout>
            <PostJobs />
          </ProtectedRout>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRout>
            <SavedJobs />
          </ProtectedRout>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRout>
            <Myjobs />
          </ProtectedRout>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
