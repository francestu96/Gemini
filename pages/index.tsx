import { Default } from 'components/templates/Default';
import { Home } from 'components/templates/home';
import type { GetServerSideProps, NextPage } from 'next';
import client_db from 'utils/mongodb';
import { ITokens } from 'utils/types';

const HomePage: NextPage<ITokens> = (props) => {
  return (
    <Default pageName="Home">
      <Home {...props}/>
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const db = (await client_db).db(process.env.DB_NAME);
    const tokens = await db.collection("tokens").find({}, {projection:{_id:0}}).toArray();

    return {
      props: {
        tokens: tokens
      }
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
};


export default HomePage;