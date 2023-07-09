import Dashboard from "./components/Dashbord";
import Menu from "./components/menu";
import Nav from "./components/Nav";
import "./styles.css";
import "./components/app.css";

export default function App() {
  return (
    <>
      <Nav />

      <div className="left">
        <Menu />
      </div>
      <div className="right">
        <Dashboard />
      </div>
    </>
  );
}
