import { Tema } from "../tema/tema";

export default function Nav() {
  return(
    <nav className="fixed w-screen left-0 top-0 self-center justify-center items-center">
      <div className="w-full items-start p-4 justify-start flex">
        <Tema />
      </div>
    </nav>
  )
}