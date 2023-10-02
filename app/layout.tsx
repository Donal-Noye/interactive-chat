import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ToasterContext from "@/app/context/ToasterContext";
import AuthContext from "@/app/context/AuthContext";
import ActiveStatus from "@/app/components/ActiveStatus";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interactive Chat",
  description: "Messenger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      <AuthContext>
	      <ToasterContext />
	      <ActiveStatus />
	      {children}
      </AuthContext>
			</body>
    </html>
  );
}
