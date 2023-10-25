import './globals.css'
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({ subsets: ['latin'], display: 'swap'})

export const metadata = {
  title: 'Sweet Dreams',
  description: 'Created by Giovanni Maya',
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={gabarito.className} style={{ backgroundColor: '#fbfdfc' }}>{children}</body>
        </html>
    )
}
