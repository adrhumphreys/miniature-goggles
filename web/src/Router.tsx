import { Route, Routes } from "react-router-dom";
import { FC, Suspense } from "react";
import Home from "@views/Home";
import NotFound from "@views/NotFound";
import Layout from "@components/Layout";
import Notebook from "@views/Notebook";
import Note from "@views/Note";

const Router: FC = () => (
  <Layout>
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path="/notebooks/:notebookId/:noteId" element={<Note />} />
        <Route path="/notebooks/:notebookId" element={<Notebook />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Layout>
);

export default Router;
