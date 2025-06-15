import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import FeaturedProducts from "./components/FeaturedProducts";
import FluidContainer from "./components/FluidContainer";
import Container from "./components/FeaturedPosts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContent />}>
          <Route index element={<HomePage />} />
          <Route index element={<FeaturedProducts />} />
          <Route index element={<FluidContainer />} />
          <Route index element={<Container />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
