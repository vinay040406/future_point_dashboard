import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Future Point",
  description: "Always stay updated in your Parent portal.",
  openGraph: {
    title: "Future Point",
    description: "Always stay updated in your Parent portal.",
    images: ["/meta-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
