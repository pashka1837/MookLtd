import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Pages/Landing";
import Select from "./Pages/Select";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  { path: "/select", element: <Select /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
