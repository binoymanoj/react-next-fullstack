import React from "react";
import Header from "./header";
import Footer from "./footer";

function SiteLayout({ children }: any) {
  return (
    <main className="bg-zinc-700">
      <Header />
      <main className="overflow-hidden max-w-7xl mx-auto text-white/90 font-mono min-h-screen">{children}</main>
      <Footer />
    </main>
  );
}

export const getLayout = (page: React.ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);

export default SiteLayout;
