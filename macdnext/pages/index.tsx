import Head from 'next/head'

import Menu from '../components/Menu'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  py-2">
      <Head>
        <title>Macd Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full items-center justify-around">
        <img
          src="https://mcdindia.com/wp-content/uploads/2020/04/logo-symbol.svg"
          alt=""
        />
        <ul className=" flex gap-10 p-3 font-semibold">
          <li>
            <a href="#menu"> Menu </a>
          </li>
          <li>
            <a href="">Happy Meal</a>
          </li>
          <li>
            <a href="">Resturants</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
        </ul>
      </main>
      {/* carosol section */}

      {/* Menu section */}
      <Menu />
      <footer />
    </div>
  )
}
