import { lazy } from "react";

const Home = lazy(() => import("../../features/home/Home"));
const Work = lazy(() => import("../../features/work/Work"));
const ProjectDetail = lazy(() => import("../../features/work/ProjectDetail"));
const Studio = lazy(() => import("../../features/studio/Studio"));
const Process = lazy(() => import("../../features/process/Process"));
const Contact = lazy(() => import("../../features/contact/Contact"));

export const routeConfig = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/work/:slug', component: ProjectDetail },
  { path: '/studio', component: Studio },
  { path: '/process', component: Process },
  { path: '/contact', component: Contact },
  { path: '*', component: Home },
] as const;
