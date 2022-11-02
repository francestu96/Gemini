import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { IToken, Token } from 'components/templates/token';
import Moralis from 'moralis';
import { Errors } from 'utils/Errors';

const TokenPage: NextPage<IToken> = (props) => {
  return (
    <Default pageName="Token">
      <Token {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  if (!session?.user.address) {
    return { props: { error: Errors.ConnectWallet } };
  }

  const tokens = [
    {
        logo: '/token-logo.jpg',
        name: 'Token Name 1',
        symbol: 'TKN1',
        chain: 1,
        audited: true,
        launch: '10/10/2022',
        votes: '500',
        addr: '0x1'
    },
    {
        logo: '/token-logo.jpg',
        name: 'Token Name 2',
        symbol: 'TKN2',
        chain: 1,
        audited: true,
        launch: '10/10/2022',
        votes: '500',
        addr: '0x2'
    },
    {
        logo: '/token-logo.jpg',
        name: 'Token Name 3',
        symbol: 'TKN3',
        chain: 1,
        audited: false,
        launch: '10/10/2022',
        votes: '500',
        addr: '0x3'
    },
    {
        logo: '/token-logo.jpg',
        name: 'Token Name 4',
        symbol: 'TKN4',
        chain: 1,
        audited: false,
        launch: '10/10/2022',
        votes: '500',
        addr: '0x4'
    },
    {
        logo: '/token-logo.jpg',
        name: 'Token Name 5',
        symbol: 'TKN5',
        chain: 1,
        audited: false,
        launch: '10/10/2022',
        votes: '500',
        addr: '0x5'
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