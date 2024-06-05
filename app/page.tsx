import Encryption from "@/Components/main/Encryption";
import Footer from "@/Components/main/Footer";
import Hero from "@/Components/main/Hero";
import Project from "@/Components/main/Project";
import Skills from "@/Components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
   <main className="h-full w-full">
    <div className="flex flex-col gap-20">
      <Hero />
      <Skills />
      <Project />
      <Encryption />
      <Footer />
    </div>
   </main>
  );
}
