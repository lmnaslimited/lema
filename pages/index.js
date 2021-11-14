import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
        <title>Experience LMNAs ERP</title>
        <meta name="description" content="Try our demo systems yourself and decide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://lmnas.com">LMNAs!</a>
        </h1>

        <p className={styles.description}>
          Get started by clicking{' '}
          <code className={styles.code}>Your Business Domain</code>
        </p>

        <div className={styles.grid}>
          <a href="https://li4o.lmnas.com" className={styles.card}>
            <h2>Retail & Distribution&rarr;</h2>
            <p>All New POS, Warehouse, Stock, Finance and CRM Modules</p>
          </a>

          <a href="https://li4o.lmnas.com" className={styles.card}>
            <h2>Manufacturing &rarr;</h2>
            <p>Try Yourself the power of BOM and Ease of Production Planning!</p>
          </a>

          <a
            href="https://layur.lmnas.com"
            className={styles.card}
          >
            <h2>Healthcare &rarr;</h2>
            <p>Get access to your digital Hospital. Experience it yourself.</p>
          </a>

          <a
            href="https://dreamwave.lmnas.com"
            className={styles.card}
          >
            <h2>Education &rarr;</h2>
            <p>
              Classrooms can be become more live. Try the modern School now
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://lmnas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' LMNAs'}
        
        </a>
      </footer>
    </div>
  )
}
