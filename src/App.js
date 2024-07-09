// import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

// const RootLayout = lazy(() => import("./layouts/RootLayout"));
// const Home = lazy(() => import("./pages/Home"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Payment = lazy(() => import("./pages/Payment"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="payment" element={<Payment />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
