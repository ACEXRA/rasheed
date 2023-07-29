import "./assets/scss/app.scss";
import Content from "./components/ui/Content";
import Sidebar from "./components/ui/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
