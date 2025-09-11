import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-full flex flex-col bg-green-100">
      <Header />
      <div className=" grid grid-cols-[25fr_75fr] flex-1 overflow-hidden">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
