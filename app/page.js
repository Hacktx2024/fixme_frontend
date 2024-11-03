import Image from "next/image";
import Navbar from "./_components/Navbar";
import ChatThread from "./_components/ChatThread";

export default function Home() {
  return (
    <main className="px-12">


      <Navbar/>
      <ChatThread/>
    </main>
  );
}
