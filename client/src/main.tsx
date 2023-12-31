import React from "react";
import ReactDOM from "react-dom/client";
import TRPCProvider from "./TRPCProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TRPCProvider />
  </React.StrictMode>
);
