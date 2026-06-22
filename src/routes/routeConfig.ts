import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Work = lazy(() => import("../pages/Work"));
const ProjectDetail = lazy(() => import("../pages/ProjectDetail"));
const Studio = lazy(() => import("../pages/Studio"));
const Process = lazy(() => import("../pages/Process"));
const Contact = lazy(() => import("../pages/Contact"));

export const routeConfig = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/work/:slug', component: ProjectDetail },
  { path: '/studio', component: Studio },
  { path: '/process', component: Process },
  { path: '/contact', component: Contact },
  { path: '*', component: Home },
] as const;
