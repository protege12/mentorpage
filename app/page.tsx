import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatItIs from "./components/WhatItIs";
import HowItWorks from "./components/HowItWorks";
import WhyJoin from "./components/WhyJoin";
import Trust from "./components/Trust";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatItIs />
        <HowItWorks />
        <WhyJoin />
        <Trust />
        <Signup />
      </main>
      <Footer />
    </>
  );
}
