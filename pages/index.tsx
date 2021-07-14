import { useState } from "react";
import { Header } from "../components/Header";

import Layout from "../components/Layout";
import { activePaths } from "../constants/types";
import { About } from "../screens/About";
import { Calculator } from "../screens/Calculator";
import { IMC } from "../screens/IMC";
import { TermConversor } from "../screens/TermConversor";

export default function Home() {
  const [activePath, setActivePath] = useState<activePaths>("Calculator");

  const switchActivePath = (path: activePaths) => {
    setActivePath(path);
  };

  const checkIsCurrentPage = (currentPage: activePaths) => {
    return currentPage === activePath;
  };

  return (
    <Layout title="Next-Typescript-ChakraUI Boilerplate">
      <Header
        isCurrentPage={checkIsCurrentPage}
        switchActivePath={switchActivePath}
      />
      {activePath === "Calculator" ? (
        <Calculator />
      ) : activePath === "IMC" ? (
        <IMC />
      ) : activePath === "TermConversor" ? (
        <TermConversor />
      ) : (
        <About />
      )}
    </Layout>
  );
}
