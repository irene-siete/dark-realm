import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@/app/globals.css";
import TransitionPage from "@/components/transition-page";
import LanguageDropdown from "@/components/lang_button";
import SmokeBackground from "@/components/SmokeBackground";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dark Realm",
	description: "Dark Realm, the best rust server on the internet.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${urbanist.className} min-h-[100vh] h-full bg-no-repeat bg-gradient-cover`}
			>
				<SmokeBackground />
				<LanguageDropdown />
				<TransitionPage />
				<main>{children}</main>
			</body>
		</html>
	);
}
