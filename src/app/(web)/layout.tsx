import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tegain",
    description:
        "Tegain, proudly crafted by Talrop, is your ultimate IT partner. We specialize in innovative solutions to build a robust and finely-tuned IT environment. Trust us for all your technological needs.",
    openGraph: {
        title: "Tegain",

        description:
            "Tegain, proudly crafted by Talrop, is your ultimate IT partner. We specialize in innovative solutions to build a robust and finely-tuned IT environment. Trust us for all your technological needs.",
        images: [
            {
                url: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/13-11-2023/favicon-16x16.png",
                width: 1200,
                height: 600,
                alt: "Business Consultants Conference 2023",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="shortcut icon"
                    href="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/13-11-2023/favicon-16x16.png"
                />
                <meta charSet="UTF-8"></meta>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
