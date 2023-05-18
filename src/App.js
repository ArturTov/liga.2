import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./route/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
