import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import PokraskaDisk from "./pages/PokraskaDisk";
import AlmaznayaProchka from "./pages/AlmaznayaProchka";
import RemontDiskov from "./pages/RemontDiskov";
import PokraskaSupportov from "./pages/PokraskaSupportov";
import Tseny from "./pages/Tseny";
import Blog from "./pages/Blog";
import AlmaznajaProchkaPost from "./pages/posts/AlmaznajaProchka";
import PokraskaCherniyPost from "./pages/posts/PokraskaCherniy";
import RemontDiskaPost from "./pages/posts/RemontDiska";
import AlmaznajaProchkaVideoPost from "./pages/posts/AlmaznajaProchkaVideo";

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
        <Route path="/tseny" element={<Tseny />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/almaznaya-prochka-diskov-chto-eto" element={<AlmaznajaProchkaPost />} />
        <Route path="/blog/pokraska-diskov-v-chernyy" element={<PokraskaCherniyPost />} />
        <Route path="/blog/remont-litogo-diska-tsena" element={<RemontDiskaPost />} />
        <Route path="/blog/almaznaya-prochka-video-protsessa" element={<AlmaznajaProchkaVideoPost />} />
      </Routes>
    </>
  );
}
