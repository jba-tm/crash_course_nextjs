import NextNprogress from 'nextjs-progressbar';
import { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
        </>
    )
}
