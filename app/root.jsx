import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import indexstyle from "~/styles/index.css";
import TopMenu from "./components/menu/TopMenu";
import MainNavigation from "./components/menu/MainNavigation";
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
  title:
    "Food News, Health News, Indian Recipes, Healthy Recipes, Vegetarian Recipes, Indian Food recipes – NDTV Food",
  viewport:
    "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "black-translucent",
  "msapplication-tap-highlight": "no",
  "google-site-verification": "yThRoDT_1iDUIum7IPIGT96Y-8rpvmFwlYBBK9EMGXM",
  "Content-Type": "text/html; charset=UTF-8",
  "content-language": "en",
  "X-UA-Compatible": "IE=edge",
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
