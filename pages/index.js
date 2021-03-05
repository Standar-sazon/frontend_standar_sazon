import Head from 'next/head'
import styles from '../styles/app.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>
          Holis a todos
        </h1>
      </main>
    </div>
  )
}
