import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.AUTH_PRIVATE_KEY || "",
  domain: process.env.DOMAIN || "",
});