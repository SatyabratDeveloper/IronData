import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Contact,
  Home,
  ActiveRack,
  PassiveRack,
  ManagedServices,
  DataCenter,
  USPs,
  Investor,
  Web3Infrastructure,
  Partnership,
} from "./pages";
import { IntroAnimation } from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="active-rack" element={<ActiveRack />} />
      <Route path="passive-rack" element={<PassiveRack />} />
      <Route path="managed-services" element={<ManagedServices />} />
      <Route path="data-center" element={<DataCenter />} />
      <Route path="investor" element={<Investor />} />
      <Route path="web3-infrastructure" element={<Web3Infrastructure />} />
      <Route path="partnership" element={<Partnership />} />
      <Route path="usps" element={<USPs />} />
    </Route>
  ),
  {
    basename: "/IronData",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IntroAnimation />
    <RouterProvider router={router} />
  </StrictMode>
);
