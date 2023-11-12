import { Inter } from "next/font/google";
import "/style/reset.css";
import "/style/global.css";
import Header from "/components/header/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " container"}>
        <Header />
        <main> {children}</main>
      </body>
    </html>
  );
}
