import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import Footer from "./components/Footer/Footer";
import useFetchUserDetails from "./common/useFetchUserDetails";
function App() {
  const { user, loading, error } = useFetchUserDetails();

  return (
    <div className="hide-scrollbar">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
