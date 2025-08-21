import { Montserrat } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dressland Uniforms | Corporate, Industrial & Custom Wear",
  description:
    "Since 1965, Dressland Uniforms offers premium corporate uniforms, industrial safety wear, sportswear & custom T-shirts with style, comfort & durability.",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        {/* Toast Notifications */}
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
