import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type PageRoute = "home" | "experience" | "arena" | "pricing" | "gallery" | "why-us" | "book";

interface RouterContextType {
  currentPage: PageRoute;
  navigateTo: (page: PageRoute | string) => void;
  isHome: boolean;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function normalizePathToRoute(path: string): PageRoute {
  // Check hash first (e.g. #/experience or #experience)
  const cleanPath = path.toLowerCase().replace(/^\/?#\/?/, "").replace(/^\//, "").split("?")[0].split("#")[0];

  if (!cleanPath || cleanPath === "home" || cleanPath === "main") return "home";
  if (cleanPath.startsWith("exp")) return "experience";
  if (cleanPath.startsWith("aren")) return "arena";
  if (cleanPath.startsWith("pric")) return "pricing";
  if (cleanPath.startsWith("gall")) return "gallery";
  if (cleanPath.startsWith("why") || cleanPath === "whyus") return "why-us";
  if (cleanPath.startsWith("book")) return "book";

  return "home";
}

function getRouteFromLocation(): PageRoute {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname;
  if (path && path !== "/") {
    return normalizePathToRoute(path);
  }
  if (window.location.hash) {
    return normalizePathToRoute(window.location.hash);
  }
  return "home";
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageRoute>(getRouteFromLocation);

  const navigateTo = (page: PageRoute | string) => {
    const route = normalizePathToRoute(page);
    setCurrentPage(route);

    const targetUrl = route === "home" ? "/" : `/${route}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ route }, "", targetUrl);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handlePopState = () => {
      const route = getRouteFromLocation();
      setCurrentPage(route);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <RouterContext.Provider
      value={{
        currentPage,
        navigateTo,
        isHome: currentPage === "home",
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}
