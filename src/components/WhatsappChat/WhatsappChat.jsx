import { useState } from "react";
import WhatsappIcon from "../../assets/icons/whatsapp.png";
import Logo from "../../assets/logo/logo.png";

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(1);

  // Function to toggle the chat box visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setNotificationCount(0);
    }
  };

  // Function to handle "Chat on WhatsApp" button click
  const handleChatOnWhatsApp = () => {
    const phoneNumber = "919810850678";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="font-sans bg-gray-100 flex items-center justify-center">
      {/* Floating WhatsApp Button */}
      <button
        onClick={toggleChat}
        className="fixed right-3 bottom-7 sm:right-7 hover:cursor-pointer rounded-full shadow-lg hover:shadow-xl  transition-transform transform hover:scale-110 z-50 p-3 sm:p-4 bg-green-500"
        aria-label="Open WhatsApp chat"
      >
        {/* WhatsApp Icon (inline SVG for better control and no external dependencies) */}
        <img src={WhatsappIcon} alt="whatsapp_icon" className="h-7 sm:h-9" />

        {notificationCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center -mt-1 -mr-1">
            {notificationCount}
          </span>
        )}
      </button>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-22 sm:bottom-27 right-3 sm:right-7 w-70 sm:w-80 md:w-96 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-40">
          {/* Chat Header */}
          <div className="bg-[#075e54] text-white p-4 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full text-gray-900 flex justify-center items-center font-semibold mr-3">
                <img src={Logo} alt="logo" className="" />
              </div>
              <div>
                <h3 className="font-semibold sm:text-lg">IRON DATA VAULTS</h3>
                <p className="text-sm opacity-90 flex items-center">
                  <span className="w-2 h-2 bg-green-400 text-sm sm:text-base rounded-full mr-1 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 focus:outline-none text-2xl hover:cursor-pointer"
              aria-label="Close chat"
            >
              &times;{" "}
              {/* HTML entity for multiplication sign, commonly used for close */}
            </button>
          </div>

          {/* Chat Body (Message Area) */}
          <div className="flex-grow p-4 pb-16 bg-[#dcf8c6] overflow-y-auto">
            <div className="bg-white p-3 rounded-lg shadow-md max-w-[80%] text-sm sm:text-base">
              <p>Hi there 👋</p>
              <p>How can we help you?</p>
              <p className="pt-5">Talk to us for your data center needs!</p>
            </div>
          </div>

          {/* Chat Footer */}
          <div className="p-4 bg-white border-t border-gray-200 flex justify-center items-center">
            <button
              onClick={handleChatOnWhatsApp}
              className="bg-green-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-md hover:cursor-pointer hover:bg-green-600 transition-all duration-300 flex items-center space-x-2"
            >
              <img
                src={WhatsappIcon}
                alt="whatsapp_icon"
                className="h-6 sm:h-7"
              />
              <span className="text-sm sm:text-base">Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
