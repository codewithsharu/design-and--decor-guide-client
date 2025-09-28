import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import RazorpayCheckout from "./components/Cart/RazorpayCheckout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";
import {Provider} from "react-redux";
import store from "./redux/store"
import ProtectedRoute from "./components/Common/ProtectedRoute";
import AddProductPage from "./components/Admin/AddProductPage";
import AdminOrdersDetailPage from "./pages/AdminOrdersDeatailPage";
import ForgotPassword from "./components/Common/ForgotPassword";
import InvoicePage from "./components/Common/InvoiceComponent";
import Wishlist from './components/Common/Wishlist';
import TermsAndConditions from "./components/support/TermsAndConditions";
import ShippingAndDelivery from "./components/support/ShippingAndDelivery";
import PrivacyPolicy from "./components/support/PrivacyPolicy";
import ContactUs from "./components/support/ContactUs";
import CancellationAndRefund from "./components/support/CancellationAndRefund";
import Gallery from "./pages/gallery";
import FullGallery from "./pages/fullgallery";
import Services from "./pages/Services";

import AboutUs from "./pages/aboutus";
import FAQ from "./pages/FAQ";
// Import the ServicesById page
import ServicesById from "./pages/servicesbyid";

// Import the ContactUs page from pages/contactus.jsx
import ContactUsPage from "./pages/contactus";
import ReviewForm from "./pages/ReviewForm";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/support/terms' element={<TermsAndConditions />} />
            <Route path='/support/shipping' element={<ShippingAndDelivery />} />
            <Route path='/support/privacy' element={<PrivacyPolicy />} />
            <Route path='/support/contact' element={<ContactUs />} />
            <Route path='/support/cancellation' element={<CancellationAndRefund />} />
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/collections/:collection' element={<CollectionPage />}/>
            <Route path='/product/:id' element={<ProductDetails />}/>
            <Route path="/checkout/razorpay" element={<RazorpayCheckout />} />
            <Route path='/order-confirmation' element={<OrderConfirmationPage />}/>
            <Route path='/order/:id' element={<OrderDetailsPage />}/>
            <Route path="/invoice/:id" element={<InvoicePage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path='/my-orders' element={<MyOrdersPage />}/>
            <Route path='/forgot-password' element={<ForgotPassword />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/gallery/:id" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />}/>

            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/faq" element={<FAQ />}/>
            {/* Render the ServicesById page at /servicesbyid */}
            <Route path="/servicesbyid" element={<ServicesById />} />
            <Route path="/servicesbyid/:id" element={<ServicesById />} />
            <Route path="/services" element={<Services />}/>

            {/* Add route for ContactUs page from pages/contactus.jsx */}
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/fullgallery" element={<FullGallery />} />
            <Route path="/reviewform" element={<ReviewForm />} />
          </Route>

          {/* Admin Routes - Fixed */}
          <Route path='/admin' element={<ProtectedRoute role="admin"><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminHomePage />} />
            <Route path='users' element={<UserManagement />}/>
            <Route path='products' element={<ProductManagement />}/>
            <Route path='products/:id/edit' element={<EditProductPage />}/>
            <Route path='orders' element={<OrderManagement />}/>
            <Route path='orders/:id' element={<AdminOrdersDetailPage />}/>
            <Route path='add-product' element={<AddProductPage />}/>
            {/* <Route path="/invoice/:id" element={<InvoicePage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
