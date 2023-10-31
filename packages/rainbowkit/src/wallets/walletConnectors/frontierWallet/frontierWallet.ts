import type { Wallet } from "../../Wallet";

export const frontierWallet = (): Wallet => {
  return {
    id: "frontier",
    name: "Frontier Wallet",
    iconBackground: "#CC703C",
    downloadUrls: {
      android:
        "https://play.google.com/store/apps/details?id=com.frontierwallet",
      ios: "https://apps.apple.com/us/app/frontier-crypto-defi-wallet/id1482380988",
      qrCode: "https://www.frontier.xyz/download",
      chrome:
        "https://chrome.google.com/webstore/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd",
      browserExtension: "https://www.frontier.xyz/download",
    },
    connector: {
      qrCode: {
        instructions: {
          learnMoreUrl: "https://help.frontier.xyz/en/",
          steps: [
            {
              description:
                "wallet_connectors.im_token.qr_code.step1.description",
              step: "install",
              title: "wallet_connectors.im_token.qr_code.step1.title",
            },
            {
              description:
                "wallet_connectors.im_token.qr_code.step2.description",
              step: "create",
              title: "wallet_connectors.im_token.qr_code.step2.title",
            },
            {
              description:
                "wallet_connectors.im_token.qr_code.step3.description",
              step: "scan",
              title: "wallet_connectors.im_token.qr_code.step3.title",
            },
          ],
        },
      },
      extension: {
        instructions: {
          learnMoreUrl:
            "https://help.frontier.xyz/en/articles/6967236-setting-up-frontier-on-your-device",
          steps: [
            {
              description:
                "wallet_connectors.frontier.extension.step1.description",
              step: "install",
              title: "wallet_connectors.frontier.extension.step1.title",
            },
            {
              description:
                "wallet_connectors.frontier.extension.step2.description",
              step: "create",
              title: "wallet_connectors.frontier.extension.step2.title",
            },
            {
              description:
                "wallet_connectors.frontier.extension.step3.description",
              step: "refresh",
              title: "wallet_connectors.frontier.extension.step3.title",
            },
          ],
        },
      },
    },
  };
};
