import React from "react";
import Header from "../components/Header";
import Head from "next/head"
function contact() {
  return (
    <div className="bg-white text-black/80">
      <div>
        <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        
      </div>


    </div>
  );
}

export default contact;
