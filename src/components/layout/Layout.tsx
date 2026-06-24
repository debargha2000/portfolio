import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import { routeConfig } from "../../routes/routeConfig";
import { SkipLink } from "../ui/SkipLink";

export function Layout() {
  return (
    <>
      <SkipLink />
      <Nav />
      <div className="grain" />
      <PageTransition />
      <Suspense fallback={null}>
        <Routes>
          {routeConfig.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
