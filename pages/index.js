import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeComponent from '@features/home'
import { Divider } from 'antd'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Might</title>
        <meta name="description" content="Might is a blog created by Manjur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <header>
            <div className='logo-font p-16'>Might</div>
          </header>
          <Divider style={{ backgroundColor: 'white', margin: '0px'}} />
          <HomeComponent />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
