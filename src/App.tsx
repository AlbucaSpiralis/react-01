import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import TableDump from "./pages/TableDump";
import WebserviceXML from "./pages/WebserviceXml";
import Home from "./pages/Home";
import JenkinsStatus from "./components/JenkinStatus";

const App: React.FC = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Table Dump", link: "/tabledump" },
    { name: "Webservice XML", link: "/webservicexml" },
  ];

  return (
    <Router>
      <div className="App">
        <TopMenu menuItems={menuItems} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tabledump/*" element={<TableDump />}></Route>
          <Route path="/webservicexml" element={<WebserviceXML />}></Route>
        </Routes>
        <aside>
          <JenkinsStatus />
        </aside>
      </div>
    </Router>
  );
};

export default App;
