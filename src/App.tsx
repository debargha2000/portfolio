import { BrowserRouter } from "react-router-dom";
import { AppShell } from "./app/shell/AppShell";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppShell />
        <SpeedInsights />
      </BrowserRouter>
    </HelmetProvider>
  );
}