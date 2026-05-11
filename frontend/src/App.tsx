import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import Home from "./routes/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
