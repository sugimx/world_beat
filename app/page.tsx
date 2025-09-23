import Banner from "./components/Banner";
import Featured_News from "./components/Featured_News";
import Latest_News from "./components/Latest_News";

export default function Home() {
  return (
    <div>
      <Banner />
      <Featured_News />
      <Latest_News />
    </div>
  );
}
