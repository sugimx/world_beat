import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Featured_News from "./components/Featured_News";
import Latest_News from "./components/Latest_News";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="container-fluid d-none d-lg-block">
        <TopBar />
        <Header />
      </div>
      <Navbar />
      <Banner />
      <Featured_News />
      <Latest_News />
      <Footer />
    </div>
  );
}
