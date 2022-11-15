import { Default } from 'components/templates/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getUser } from '../auth.config';
import { Errors } from 'utils/Errors';
import MyTokens from 'components/templates/myTokens/MyTokens';
import { ITokens } from 'utils/types';

const MyTokensPage: NextPage<ITokens> = (props) => {
  return (
    <Default pageName="Token">
      <MyTokens {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUser(context.req);
  if (!user) {
    return { props: { error: Errors.SignIn } };
  }
  
  const mytokens = [
    {
      logo: '/token-logo.jpg',
      name: 'Token Name 1',
      symbol: 'TKN1',
      chain: 'Ethereum',
      audited: true,
      launch: '10/10/2022',
      votes: '500',
      addr: '0x4Dd942bAa75810a3C1E876e79d5cD35E09C97A71'
    },
    {
      logo: '/token-logo.jpg',
      name: 'Token Name 2',
      symbol: 'TKN2',
      chain: 'Ethereum',
      audited: true,
      launch: '10/10/2022',
      votes: '500',
      addr: '0x4Dd942bAa75810a3C1E876e79d5cD35E09C97A72'
    }
  ]

  return {
    props: {
      tokens: mytokens,
      user: user
    },
  };
};

export default MyTokensPage;