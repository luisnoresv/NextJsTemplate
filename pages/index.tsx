import React from 'react';
import {
   GetStaticProps, NextPage, GetStaticPropsContext, GetStaticPropsResult,
} from 'next';
import IndexContent from '@components/Home/IndexContent';

interface IProps {
   greeting: string;
}

const IndexPage: NextPage<IProps> = ({ greeting }) => {
   console.log(`Inside IndexPage Render component. Browser :${!!process.browser}`);
   console.log(process.env.MY_SECRET);
   console.log(process.env.NEXT_PUBLIC_THEME_GREETING_EMOJI);

   return (
      <IndexContent greeting={greeting} />
   );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext):
   Promise<GetStaticPropsResult<IProps>> => {
   console.log(`Inside getServerSideProps. Browser: ${!!process.browser}`);
   console.log(process.env.MY_SECRET);
   console.log(process.env.NEXT_PUBLIC_THEME_GREETING_EMOJI);

   return {
      props: {
         greeting: 'Hello From the Server',
      },
   };
};

export default IndexPage;
