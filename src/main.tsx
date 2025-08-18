import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import Job from "./pages/Job.tsx";
import JobsList from "./pages/JobsList.tsx";
import JobsProvider from "./context/JobsContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <JobsList /> },
      { path: "/:position", element: <Job /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JobsProvider>
      <RouterProvider router={router} />
    </JobsProvider>
  </StrictMode>
);
