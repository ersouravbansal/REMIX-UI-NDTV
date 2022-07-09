import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import indexstyle from "~/styles/index.css";
import TopMenu from "./components/TopMenu";
import MainNavigation from "./components/MainNavigation"
export const links = () => {
  return [
    {
      rel: "Stylesheet",
      href: indexstyle,
    },
  ];
};

export const meta = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <TopMenu />
        <MainNavigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
