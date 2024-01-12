import Navbar from "../component/Navbar"
import { useNavigate } from "react-router"


export default function LandingPage() {
  const nav = useNavigate()
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-rose-200 p-3">Masuk Landing page</div>
        <div
          className="bg-lime-500 p-3 hover:cursor-pointer"
          onClick={() => nav("/project/highchart-vertical")}
        >
          chart vertical
        </div>
      </div>
    </>
  )
}
