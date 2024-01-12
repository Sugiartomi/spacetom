import { useNavigate } from "react-router"
import {
  BookmarkSVG,
  HomeSVG,
  ProfileSVG,
  ProjectSVG,
} from "../asset/iconNavbar"
import { defaultWindowSize, heightBottomNavbar } from "../config/WindowSize"

export default function BottomNavbar() {
  const navigate = useNavigate()
  return (
    <div
      className="cp1-bg-1  h-full w-full fixed mt-1 rounded-t-xl"
      style={{ maxWidth: defaultWindowSize, maxHeight: heightBottomNavbar }}
    >
      <div className="flex justify-around h-full items-center cp1-text-2 px-5">
        <div onClick={() => navigate("/")}>
          <HomeSVG />
        </div>
        <div  onClick={() => navigate("/project")}>
          <ProjectSVG />
        </div>
        <div  onClick={() => navigate("/activity")}>
          <BookmarkSVG />
        </div>
        <div onClick={() => navigate("/profile")}>
          <ProfileSVG />
        </div>
      </div>
    </div>
  )
}
