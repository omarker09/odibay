import { Inter } from 'next/font/google'
import './globals.css'
import { ProviderTheme } from './providers/ProviderTheme'
const inter = Inter({ subsets: ['latin'] })
import { Providers } from './redux/provider'
import store from './redux/store'
export const metadata = {
  title: 'Odibay Home Page',
  description: 'Generated by omarker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ProviderTheme>
            {children}
          </ProviderTheme>
        </Providers>
      </body>
    </html>
  )
}
