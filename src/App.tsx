import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
