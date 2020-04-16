import { useEffect } from "react";
import Router from "next/router";
import NextCookies from "next-cookies";
import Cookies from "js-cookie";
import { NextPage, NextPageContext } from "next";

export const login = ({ token }) => {
  Cookies.set("token", token, { expires: 1 });
  Router.push("/dashboard");
};

export const auth = (ctx: NextPageContext) => {
  const { token } = NextCookies(ctx);

  if (!token && ctx.pathname === "/dashboard") {
    if (typeof window === "undefined" && ctx && ctx.res) {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
    } else {
      Router.push("/login");
    }
  }

  if (token && ctx.pathname === "/login") {
    if (typeof window === "undefined" && ctx && ctx.res) {
      ctx.res.writeHead(302, { Location: "/dashboard" });
      ctx.res.end();
    } else {
      Router.push("/dashboard");
    }
  }

  return token;
};

export const logout = () => {
  Cookies.remove("token");
  // to support logging out from all windows
  window.localStorage.setItem("logout", Date.now().toString());
  Router.push("/");
};

export const withAuthSync = (PageComponent: NextPage) => {
  const WithAuthSync = ({ ...pageProps }: any) => {
    const syncLogout = event => {
      if (event.key === "logout") {
        console.log("Logged out from storage!");
        Router.push("/");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <PageComponent {...pageProps} />;
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    if (displayName === "App") {
      console.warn("This withAuthSync HOC only works with PageComponents.");
    }

    WithAuthSync.displayName = `withAuthSync(${displayName})`;
  }

  WithAuthSync.getInitialProps = async (ctx: NextPageContext) => {
    const token = auth(ctx);

    const pageProps =
      PageComponent.getInitialProps &&
      (await PageComponent.getInitialProps(ctx));

    return { ...pageProps, token };
  };

  return WithAuthSync;
};
