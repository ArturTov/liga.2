import { Outlet, Route, createBrowserRouter } from "react-router-dom";
import Roote from "./roote";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roote />,
    errorElement: <div>errror</div>,
    children: [
      {
        index: true,
        element: <>afvhgnagsdb</>,
      },
      {
        path: "registration",
        element: <>registration</>,
        action: () => "asd",
      },
      { path: "login", element: "login" },
      { path: "reset", element: "reset" },
      { path: "work_sheet", element: "reset" },
      { path: "support", element: "login" },
      {
        path: "my_orders",
        element: <Outlet />,
        children: [
          { element: "my", index: true },
          {
            path: ":id",
            element: "id",
          },
        ],
      },
      { path: "balance", element: "reset" },
      {
        path: "orders",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: "orders",
          },
          {
            path: ":id",
            element: "id",
          },
        ],
      },
      { path: "notification", element: "notification" },
      { path: "chat", element: "reset" },
      { path: "documents", element: "login" },
      { path: "terms_of_use", element: "reset" },
      { path: "public_offer", element: "reset" },
      { path: "privacy_policy", element: "login" },
      { path: "user_information/:id'", element: "reset" },
      {
        path: "find_specialists",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: "find_specialists",
          },
          {
            path: ":id",
            element: "fdsigycxzhk",
          },
        ],
      },

      { path: "payment_methods", element: "login" },
      { path: "search_works/:id", element: "reset" },
      { path: "question", element: "reset" },
      { path: "documents_all", element: "reset" },
      { path: "*", element: "dsjhkbmnsd" },
    ],
  },
]);
