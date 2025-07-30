import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTop, WhatsappChat } from "./components";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <WhatsappChat />
      <Footer />
    </>
  );
}

export default App;
