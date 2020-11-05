import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '~/theme';

const MyApp = (props: AppProps): JSX.Element => {
   const { Component, pageProps } = props;

   React.useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentElement) {
         jssStyles.parentElement.removeChild(jssStyles);
      }
   }, []);

   return (
      <>
         <Head>
            <title>My Page</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
         </Head>

         <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
         </ThemeProvider>
      </>
   );
};

export default MyApp;
