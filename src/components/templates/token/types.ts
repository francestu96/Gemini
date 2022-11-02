type TToken = {
  logo: string;
  name: string;
  symbol: string;
  chain: string;
  addr: string;
  lauched: string;
  audited: boolean;
  votes: number;
};
export interface IToken {
  token?: TToken;
  error?: string
}
