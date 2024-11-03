import Image from "next/image";
import Navbar from "./_components/Navbar";
import Prompt from "./_components/Prompt";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Prompt/>
    </main>
  );
}
