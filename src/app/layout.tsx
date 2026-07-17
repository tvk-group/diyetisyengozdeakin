import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.diyetisyengozdeakin.com"),
};
