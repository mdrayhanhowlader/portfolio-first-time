import { createBrowserRouter } from "react-router-dom";
import About from "../Home/About";
import Blogs from "../Home/Blogs";
import ContactMe from "../Home/ContactMe";
import Home from "../Home/Home";
import ProjectDetails from "../Home/ProjectDetails";
import Projects from "../Home/Projects";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
        loader: () =>
          fetch("https://rayhan-portfolio-backend.vercel.app/projects"),
      },
      {
        path: "/project/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(
            `https://rayhan-portfolio-backend.vercel.app/project/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactMe></ContactMe>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
