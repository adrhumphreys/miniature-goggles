import { Route, Routes } from "react-router-dom";
import Home from "@views/Home";
import NotFound from "@views/NotFound";
import Layout from "@components/Layout";
import Notebook from "@views/Notebook";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/notebooks/:notebookId/:noteId" element={<Notebook />} />
        <Route path="/notebooks/:notebookId" element={<Notebook />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
