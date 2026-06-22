import { BrowserRouter } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
      <SpeedInsights />
    </BrowserRouter>
  );
}