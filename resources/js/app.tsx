import "./bootstrap";
import "../css/app.css";

import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.tsx`, // Pastikan path ini sesuai dengan struktur proyek
      import.meta.glob("./pages/**/*.tsx")
    ),
  setup({ el, App, props }) {
    if (!el) return; // Pastikan `el` ada sebelum melakukan render

    const app = (
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>
    );

    if (import.meta.env.DEV) {
      createRoot(el).render(app);
    } else {
      hydrateRoot(el, app);
    }
  },
  progress: {
    color: "#4B5563",
  },
});
