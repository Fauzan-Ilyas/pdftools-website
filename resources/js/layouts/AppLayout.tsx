import { PropsWithChildren } from "react";
import { Head } from "@inertiajs/react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AppLayout({
  title,
  footer = false,
  children,
}: PropsWithChildren<{ title: string; footer: boolean }>) {
  return (
    <>
      <Head title={title} />

      <NavBar />

      {children}

      {footer && <Footer />}
    </>
  );
};

