import HeaderTop from "./components/HeaderTop";
import TopArea from "./components/TopArea";
import Blogs from "./components/Blogs";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ListTopic from "./components/ListTopic";
import Reviews from "./components/Reviews";
import Statistics from "./components/Statistics";
import Subscription from "./components/Subscription";
import WorkContent from "./components/WorkContent";
import "./App.css";

function App() {
  return (
    <div>
       <HeaderTop/>
       <TopArea/>
       <Hero />
       <ListTopic />
       <WorkContent/>
       <Explore />
       <Reviews />
       <Statistics/>
       <Blogs/>
       <Subscription/>
      <Footer />
      
    </div>
  );
}

export default App;
