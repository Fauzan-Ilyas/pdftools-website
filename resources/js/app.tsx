import "./bootstrap";
import "../css/app.css";
import "./echo";

import { createRoot, hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.tsx`, // Pastikan path ini sesuai dengan struktur proyek
      import.meta.glob("./pages/**/*.tsx"),
    ),
  setup({ el, App, props }) {
    if (import.meta.env.DEV) {
      createRoot(el).render(<App {...props} />);
      return; // Pastikan `el` ada sebelum melakukan render
    }

    hydrateRoot(el, <App {...props} />);
  },
  progress: {
    color: "#4B5563",
  },
});
