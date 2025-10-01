import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SFreidArt</title>
        <link rel="icon" href="/logo25.png" />
      </Head>

      <main>
        <Header title="SouthernFried Art is Coming Soon!" />
        <p className="description">
        Find me on X at @Souther38496623
        </p>
      </main>

      <Footer />
    </div>
  )
}
