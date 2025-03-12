import Manager from "./component/Manager";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[90vh]">
        <Manager />
      </div>
      <Footer  />
    </>
  )
}