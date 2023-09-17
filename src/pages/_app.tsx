import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
// import { Head } from "next/document";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  authenticate?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Hydrate state={pageProps.dehydratedState}> */}
        {getLayout(<Component {...pageProps} />)}
        {/* </Hydrate> */}
      </QueryClientProvider>
    </>
  );
}
