import { isAndroid } from "../../../utils/isMobile";
import { Wallet } from "../../Wallet";
import { getWalletConnectConnector } from "../../getWalletConnectConnector";

export interface OktoWalletOptions {
  projectId: string;
}

export const oktoWallet = ({ projectId }: OktoWalletOptions): Wallet => ({
  id: "Okto",
  name: "Okto",
  iconUrl: async () => (await import("./oktoWallet.svg")).default,
  iconBackground: "#fff",
  downloadUrls: {
    android:
      "https://play.google.com/store/apps/details?id=im.okto.contractwalletclient",
    ios: "https://apps.apple.com/in/app/okto-wallet/id6450688229",
    mobile: "https://okto.tech/",
    qrCode: "https://okto.tech/",
  },
  mobile: {
    getUri: (uri: string) => {
      return isAndroid() ? uri : `okto://wc?uri=${encodeURIComponent(uri)}`;
    },
  },
  qrCode: {
    getUri: (uri: string) => uri,
    instructions: {
      learnMoreUrl: "https://okto.tech/",
      steps: [
        {
          description: "wallet_connectors.okto.qr_code.step1.description",
          step: "install",
          title: "wallet_connectors.okto.qr_code.step1.title",
        },
        {
          description: "wallet_connectors.okto.qr_code.step2.description",
          step: "create",
          title: "wallet_connectors.okto.qr_code.step2.title",
        },
        {
          description: "wallet_connectors.okto.qr_code.step3.description",
          step: "scan",
          title: "wallet_connectors.okto.qr_code.step3.title",
        },
      ],
    },
  },
  createConnector: () => {
    const connector = getWalletConnectConnector({
      projectId,
    });

    return connector;
  },
});