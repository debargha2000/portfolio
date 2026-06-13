import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AppShell } from "./app/shell/AppShell";

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
      <SpeedInsights />
    </BrowserRouter>
  );
}