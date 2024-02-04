import { Footer, Navbar } from "./components/organisms";
import { About, Contact, Courses, Home, Teacher } from "./sections";

export default function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
}
