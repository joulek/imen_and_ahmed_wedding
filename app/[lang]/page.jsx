import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Program from "@/components/Program";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="site">
      <div className="site-bg" aria-hidden="true" />

      <Header />
      <Hero />
      <Countdown />
      <Program />
      <Location />
      <Footer />
    </main>
  );
}