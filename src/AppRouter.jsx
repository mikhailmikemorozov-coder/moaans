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
import WorkNissanQashqaiPost from "./pages/posts/WorkNissanQashqai";
import PokraskaSupportovPost from "./pages/posts/PokraskaSupportovPost";
import Shinomontazh from "./pages/Shinomontazh";
import KastomnyDizayn from "./pages/KastomnyDizayn";
import KastomnyDizaynPost from "./pages/posts/KastomnyDizaynPost";
import KastomnyDizayn2Post from "./pages/posts/KastomnyDizayn2Post";
import Polirovka from "./pages/Polirovka";
import Himchistka from "./pages/Himchistka";
import PolirovkaPost from "./pages/posts/PolirovkaPost";

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
        <Route path="/blog/pokraska-diskov-nissan" element={<WorkNissanQashqaiPost />} />
        <Route path="/blog/pokraska-supportov" element={<PokraskaSupportovPost />} />
        <Route path="/shinomontazh-moskva" element={<Shinomontazh />} />
        <Route path="/kastomnyy-dizayn-diskov" element={<KastomnyDizayn />} />
        <Route path="/blog/kastomnyy-dizayn-diskov" element={<KastomnyDizaynPost />} />
        <Route path="/blog/kastomnyy-dizayn-grafit-chernyy" element={<KastomnyDizayn2Post />} />
        <Route path="/polirovka-kuzova-moskva" element={<Polirovka />} />
        <Route path="/himchistka-avtomobilya-moskva" element={<Himchistka />} />
        <Route path="/blog/polirovka-kuzova-honda-crz" element={<PolirovkaPost />} />
      </Routes>
    </>
  );
}
