import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { AppShell } from "./app/shell/AppShell";

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
      <Analytics />
    </BrowserRouter>
  );
}