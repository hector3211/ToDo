import React,{useState} from "react"
import Head from "next/head"
import Input from "../components/input"
import {BsSun,BsMoon} from "react-icons/bs"
const Home: NextPage = () => {
  const [theme, setTheme] = useState<string>("dark")
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "winter" : "dark")
  } 
  return (
    <div className="min-h-screen p-5 " data-theme={theme}>
      <Head>
        <title>ToDo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-w-screen border-box flex flex-col justify-center items-center">
        <div className="flex justify-between w-full">
      <h1 className="text-4xl font-semibold">ToDo</h1>
          <button className="btn btn-secondary  btn-sm" onClick={toggleTheme}>{theme === "dark" ? <BsSun/>:<BsMoon/>}</button>
        </div>
      <Input/>
    </div>
    </div>
  )
}

export default Home
