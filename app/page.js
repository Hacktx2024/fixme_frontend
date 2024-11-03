import Image from "next/image";
import Navbar from "./_components/Navbar";
import ChatThread from "./_components/ChatThread";
import Prompt from "./_components/Prompt";
import frontPage from "./_components/frontPage";

export default function Home() {
  return (
    <main className="px-12">

  
      <Navbar/>
      <Prompt/>
      <ChatThread/>
      {/* <FrontPage/> */}
    </main>
  );
}
