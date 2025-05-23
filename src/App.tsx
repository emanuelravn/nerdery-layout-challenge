import "./App.css";
import { Content } from "./components/Content/Content";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Storage } from "./components/storage/Storage";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Content />
      <Storage />
    </div>
  );
}

export default App;
