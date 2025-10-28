import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SEO from "@bradgarropy/next-seo"
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <>
    <SEO
      title="Victor Omorogbe Portfolio"
      description="Hi welcome to Victor's portfolio"
      keywords={[
        'Victor',
        'Omorogbe',
        'Victor Omorogbe',
        'Portfolio',
        'Victor Omorogbe Portfolio',
        'victor',
        'omorogbe',
        'victor omorogbe',
        'portfolio',
        'victor omorogbe portfolio',
        'VICTOR',
        'OMOROGBE',
        'VICTOR OMOROGBE',
        'VICTOR OMOROGBE PORTFOLIO'
      ]}
      icon='/pic_1.jpeg'
      facebook={{
        image: '/pic_1.jpeg',
        url: 'https://www.facebook.com/victor.omorogbe.165',
        type: 'website'
      }}
      twitter={{
        image: '/pic_1.jpeg',
        site: 'https://twitter.com/VictorOmorogbe3',
        card: 'summary'
      }}
    />
    {
      mounted && <Component {...pageProps} />
    }
  </>
}

export default MyApp