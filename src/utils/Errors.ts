export interface IError {
  ConnectWallet: string;
  Unknown: string;
}

export const Errors: IError = {
    ConnectWallet: "Connect your <b>Wallet</b> first!",
    Unknown: "Unknown Error..."
} as const