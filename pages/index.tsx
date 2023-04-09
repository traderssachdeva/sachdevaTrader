import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import KeyFeatures from "../components/KeyFeatures";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import OrderNow from "../components/OrderNow"
// import ContactUs from "../components/ContactUs";
import Products from "../components/Products";
const Home: NextPage = () => {
  return (
    <div className=" bg-[#EEEEEE]">
      <Head>
        <title>Dheeraj Enterprises</title>
                
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yg1Rc3HSuX8QnxjOSJYjN3TnLCkOeHO4QwZ9OsrmpPhCHgwdgh0mkrN2Cm1JePhavGc&usqp=CAU" />
      </Head>
      <Header />
      <Banner />

      <KeyFeatures />

  <section id="products">
  <Products />
  </section>
      
      <section id="about">
        <AboutUs />
      </section>

      <section id="ordernow">
        <OrderNow />
        {/* <ContactUs /> */}
      </section>

      <Footer />

      {/* <p>hello world</p> */}
    </div>
  );
};

export default Home;
