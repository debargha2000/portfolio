import { BrowserRouter } from "react-router-dom";
import { AppShell } from "./app/shell/AppShell";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
      <SpeedInsights />
    </BrowserRouter>
  );
}