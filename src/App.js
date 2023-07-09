import React from 'react';
import './App.css';
import Home from './features/Pages/Home';
import LoginPage from './features/Pages/LoginPage';
import SignupPage from './features/Pages/SignupPage';
import CartPage from './features/Pages/CartPage';
import CheckoutPage from './features/Pages/CheckoutPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ProductDetailsPage from './features/Pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: 'login',
    element: <LoginPage></LoginPage>
  },
  {
    path: 'signup',
    element: <SignupPage></SignupPage>
  },
  {
    path: 'cart',
    element: <CartPage></CartPage>
  },
  {
    path: 'checkout',
    element: <CheckoutPage></CheckoutPage>
  },
  {
    path: 'product-details',
    element: <ProductDetailsPage></ProductDetailsPage>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
