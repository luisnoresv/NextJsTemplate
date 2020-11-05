import React from 'react';
import Document, {
   Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

class MyDocument extends Document {
   render(): JSX.Element {
      return (
         <Html lang="en" dir="ltr">
            <Head>
               {/* Custom Font */}
               <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
               <meta charSet="utf-8" />
               <style>
                  {`
                     body {
                     background-color: ${process.env.NEXT_PUBLIC_THEME_BACKGROUND};
                     color: ${process.env.NEXT_PUBLIC_THEME_FONT_COLOR};
                     }
                  `}
               </style>
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
   // Render app and page and get the context of the page with collected side effects.
   const sheets = new ServerStyleSheets();
   const originalRenderPage = ctx.renderPage;

   ctx.renderPage = () => originalRenderPage({
      // eslint-disable-next-line react/jsx-props-no-spreading
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
   });

   const initialProps = await Document.getInitialProps(ctx);

   return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
   };
};

export default MyDocument;
