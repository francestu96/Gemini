export interface IError {
  ConnectWallet: string;
  Unknown: string;
}

export const Errors: IError = {
    ConnectWallet: "Connect your Wallet first!",
    Unknown: "Unknown Error..."
} as const