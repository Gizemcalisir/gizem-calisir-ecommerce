import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContent />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/shop" element={<PageContent />}>
          <Route index element={<ShopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
