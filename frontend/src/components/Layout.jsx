
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";

function Layout({ children }) {
  return (
    <div className="website">
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />

      <ChatWidget />
    </div>
  );
}

export default Layout;
