import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import {Poppins , Roboto} from "next/font/google"

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: 'font-poppins'
})
const roboto = Roboto({
  subsets: ['latin'],
  variable:'--font-roboto'
})

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en"
      className={`${poppins.variable} ${roboto.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
