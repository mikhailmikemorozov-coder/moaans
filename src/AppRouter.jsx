import { Routes, Route } from "react-router-dom";
import App from "./App";
import PokraskaDisk from "./pages/PokraskaDisk";
import AlmaznayaProchka from "./pages/AlmaznayaProchka";
import RemontDiskov from "./pages/RemontDiskov";
import PokraskaSupportov from "./pages/PokraskaSupportov";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pokraska-diskov-moskva" element={<PokraskaDisk />} />
      <Route path="/almaznaya-prochka-diskov" element={<AlmaznayaProchka />} />
      <Route path="/remont-diskov-moskva" element={<RemontDiskov />} />
      <Route path="/pokraska-supportov-moskva" element={<PokraskaSupportov />} />
    </Routes>
  );
}
