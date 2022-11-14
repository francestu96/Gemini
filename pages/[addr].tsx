import { Default } from 'components/templates/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getUser } from '../auth.config';
import { Errors } from 'utils/Errors';
import { IToken, Token } from 'components/templates/Token';

const TokenPage: NextPage<IToken> = (props) => {
  return (
    <Default pageName="Token">
      <Token {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUser(context.req);
  if (!user) {
    return { props: { error: Errors.ConnectWallet } };
  }
  
  const tokens = [
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
    },
    {
      logo: '/token-logo.jpg',
      name: 'Token Name 3',
      symbol: 'TKN3',
      chain: 'Ethereum',
      audited: false,
      launch: '10/10/2022',
      votes: '500',
      addr: '0x4Dd942bAa75810a3C1E876e79d5cD35E09C97A73'
    },
    {
      logo: '/token-logo.jpg',
      name: 'Token Name 4',
      symbol: 'TKN4',
      chain: 'Ethereum',
      audited: false,
      launch: '10/10/2022',
      votes: '500',
      addr: '0x4Dd942bAa75810a3C1E876e79d5cD35E09C97A74'
    },
    {
      logo: '/token-logo.jpg',
      name: 'Token Name 5',
      symbol: 'TKN5',
      chain: 'Ethereum',
      audited: false,
      launch: '10/10/2022',
      votes: '500',
      addr: '0x4Dd942bAa75810a3C1E876e79d5cD35E09C97A75'
    }
  ]

  const addr = context.params?.addr;
  const result = tokens.find((x: any) => x.addr === addr?.toString());

  if (!result) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      token: result,
    },
  };
};

export default TokenPage;