import type { NextPage } from 'next'
import Head from 'next/head'
import Input from "../components/input"
const Home: NextPage = () => {
  return (
    <div className="min-h-screen p-5">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-w-screen border-box flex flex-col justify-center items-center">
      <h1 className="text-4xl">ToDo</h1>
      <Input/>
    </div>
    </div>
  )
}

export default Home
