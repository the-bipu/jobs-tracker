import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import '../app/globals.css'
import { UserProvider } from '@/context/userContext'
import { Toaster } from '@/components/ui/sonner'
import { SessionProvider } from 'next-auth/react'

export const metadata: Metadata = {
    title: 'NextJs Starters',
    description: '',
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <SessionProvider session={pageProps.session}>
                <UserProvider>
                    <Component {...pageProps} />
                    <Toaster />
                </UserProvider>
            </SessionProvider>
        </>
    )
}

export default MyApp
