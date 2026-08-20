import React from "react";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./features/cart/Cart";
import Order, { OrderLoader } from "./features/order/Order";
import CreateOrder, { action } from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
      },
      { path: "/order/new", element: <CreateOrder />, action: action },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
