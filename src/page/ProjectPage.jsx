import { useNavigate } from "react-router"
import { IconSearch } from "../asset/iconProject"

export default function ProjectPage() {
  const navigate = useNavigate()
  const dataProject = [
    {
      title: "Vertical Bar Chart",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod culpa sequi, repellendus vel cumque perspiciatis eligendi? Iusto doloribus nemo repudiandae.",
      route: "/project/highchart-vertical",
      date: "04/10/2023"
    },
    {
      title: "Vertical Bar Chart",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. asdadnf sijgpisjfipg sdfjopsdjf  sfnsodnfojjsndf snfnsdfnsodnfjo Quod culpa sequi, repellendus vel cumque perspiciatis eligendi? Iusto doloribus nemo repudiandae.",
      route: "/project/highchart-vertical",
      date: "04/10/2023"

    },
  ]
  return (
    <div className="container p-4">
      <div className="flex items-center mt-3">
        <input
          type="text"
          className="border rounded w-full py-1 px-3 text-gray-500 border-gray-400 focus:outline-gray-400 border-3"
        />
        <div className="ms-3">
          <IconSearch />
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300" />

      <div className="grid grid-cols-2 gap-4">
        {dataProject.map((e) => (
          <div className="max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow flex flex-col justify-between">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
                {e.title}
              </h5>

              <p className="mb-3 font-normal text-sm text-gray-500">{e.desc}</p>
            </div>
            <div>
              <p className="mb-3 font-semibold text-sm text-end mt-3 pe-2 text-gray-500">
                {e.date}
              </p>
              <div
                onClick={() => navigate(e.route)}
                className="text-end w-full mt-5 px-3 py-2 text-sm font-medium text-white cp1-bg-3 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Detail
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
