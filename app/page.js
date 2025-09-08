import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}