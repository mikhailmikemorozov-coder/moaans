import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import PokraskaDisk from "./pages/PokraskaDisk";
import AlmaznayaProchka from "./pages/AlmaznayaProchka";
import RemontDiskov from "./pages/RemontDiskov";
import PokraskaSupportov from "./pages/PokraskaSupportov";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokraska-diskov-moskva" element={<PokraskaDisk />} />
        <Route path="/almaznaya-prochka-diskov" element={<AlmaznayaProchka />} />
        <Route path="/remont-diskov-moskva" element={<RemontDiskov />} />
        <Route path="/pokraska-supportov-moskva" element={<PokraskaSupportov />} />
      </Routes>
    </>
  );
}
