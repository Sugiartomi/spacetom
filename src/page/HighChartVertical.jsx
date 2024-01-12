import React, { useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { useNavigate } from "react-router"
import { IconBack } from "../asset/iconProject"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      color: "white",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
      color: "white",
    },
  },
}

export default function HighChartVertical() {
  const navigate = useNavigate()
  const [isEdit, setIsEdit] = useState(false)
  const [labels, setLabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ])
  const [param1, setParam1] = useState("Data assets 1")
  const [param2, setParam2] = useState("Data assets 2")
  const [value1, setValue1] = useState([44, 625, 575, 193, 387, 843, 535])
  const [value2, setValue2] = useState([967, 628, 790, 396, 590, 171, 393])

  const data = {
    labels,
    datasets: [
      {
        label: param1,
        data: value1,
        backgroundColor: "#F7B787",
      },
      {
        label: param2,
        data: value2,
        backgroundColor: "#EE7214",
      },
    ],
  }

  const randomGenerate = () => {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < 7; i++) {
      const result1 = Math.floor(Math.random() * (0 - 1000) + 1000)
      const result2 = Math.floor(Math.random() * (0 - 1000) + 1000)
      arr1.push(result1)
      arr2.push(result2)
    }
    setValue1(arr1)
    setValue2(arr2)
  }

  const [input, setInput] = useState({
    title1: param1,
    title2: param2,
    label: labels,
    data1: value1,
    data2: value2,
  })

  const handleInput = (e) => {
    let result
    if (e.target.name === "title-1") {
      setInput({ ...input, title1: e.target.value })
    } else if (e.target.name === "title-2") {
      setInput({ ...input, title2: e.target.value })
    } else if (e.target.name.split("-")[0] === "label") {
      let newLabels = JSON.parse(JSON.stringify(input.label))
      newLabels[e.target.name.split("-")[1]] = e.target.value
      setInput({ ...input, label: newLabels })
    } else if (e.target.name.split("-")[0] === "data1") {
      let newData1 = JSON.parse(JSON.stringify(input.data1))
      newData1[e.target.name.split("-")[1]] = e.target.value
      setInput({ ...input, data1: newData1 })
    } else if (e.target.name.split("-")[0] === "data2") {
      let newData2 = JSON.parse(JSON.stringify(input.data2))
      newData2[e.target.name.split("-")[1]] = e.target.value
      setInput({ ...input, data2: newData2 })
    }
  }

  const handleSaveData = () => {
    setParam1(input.title1)
    setParam2(input.title2)
    setLabels(input.label)
    setValue1(input.data1)

    setValue2(input.data2)
    setIsEdit(false)
  }

  const IconEdit = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      dataslot="icon"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>

    
  )

  return (
    <>
      <div className="p-4">
        <div className="flex">
          <div className="w-20 text-center" onClick={() => navigate("/project")}> 
          <IconBack/>
            </div>
          <div className="w-full text-center font-bold cp1-text-1 ">
            Chart : Vertical
          </div>
          <div className="w-20"></div>
        </div>
      </div>
      <div className="px-10">
        {!isEdit ? <Bar options={options} data={data} /> : ""}
        <div className="font-1 text-gray-500">
          {!isEdit ? (
            <div>
              {/* TABLE */}
              <div className="mt-10 font-semibold">Detail Data</div>
              <div class="grid grid-cols-7 gap-5 mt-5">
                <div class="col-span-2">{param1}</div>
                <div class="col-span-5 ">
                  <div className="grid grid-cols-7">
                    {value1.map((e) => (
                      <div className="border text-center font-semibold py-1">
                        {e}
                      </div>
                    ))}
                  </div>
                </div>
                <div class="col-span-2">{param2}</div>
                <div class="col-span-5">
                  <div className="grid grid-cols-7">
                    {value2.map((e) => (
                      <div className="border text-center font-semibold py-1">
                        {e}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* ACT */}
              <div className="flex flex-row-reverse gap-3">
                <div
                  className="mt-20 px-5 py-2 rounded-md cp1-bg-3 text-white cursor-pointer"
                  onClick={() => setIsEdit(true)}
                >
                  <div className="flex gap-3">
                    <IconEdit />
                    Edit
                  </div>
                </div>
                <div
                  className="mt-20 px-5 py-2 rounded-md cp1-bg-1 text-white cursor-pointer"
                  onClick={randomGenerate}
                >
                  <div className="flex gap-3">
                    {/* <IconEdit /> */}
                    Random Generate
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form>
              <div className="mt-10 font-semibold  cp1-text-1">Edit Data</div>
              <div className="grid grid-cols-3 mt-5 items-center">
                <div className=" cp1-text-4">Title - 1</div>
                <div className="col-span-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-gray-300"
                    defaultValue={param1}
                    onChange={handleInput}
                    name="title-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 mt-3 items-center">
                <div className=" cp1-text-4">Title - 2</div>
                <div className="col-span-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-gray-300"
                    defaultValue={param2}
                    onChange={handleInput}
                    name="title-2"
                  />
                </div>
              </div>
              <hr className="mt-4" />
              <div className="grid grid-cols-3 mt-5  cp1-text-4">
                <div className="mt-1">Parameter</div>
                <div>
                  {labels.map((e, i) => (
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-gray-300 mb-3"
                      defaultValue={e}
                      name={`label-${i}`}
                      onChange={handleInput}
                    />
                  ))}
                </div>
              </div>
              <hr className="mt-4" />
              <div className="grid grid-cols-3 mt-5">
                <div className="mt-1  cp1-text-4">Data- 1</div>
                <div className="col-span-2">
                  <div className="grid grid-cols-4 gap-3">
                    {value1.map((e, i) => (
                      <input
                        type="text"
                        className=" rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-gray-300 text-center mb-0"
                        defaultValue={e}
                        name={`data1-${i}`}
                        onChange={handleInput}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-10">
                <div className="mt-1 cp1-text-4">Data- 2</div>
                <div className="col-span-2">
                  <div className="grid grid-cols-4 gap-3">
                    {value2.map((e, i) => (
                      <input
                        type="text"
                        className=" rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-gray-300 text-center mb-0"
                        defaultValue={e}
                        name={`data2-${i}`}
                        onChange={handleInput}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-3">
                <div
                  className="mt-20 px-5 py-2 rounded-md cp1-bg-4 text-white cursor-pointer"
                  onClick={() => setIsEdit(false)}
                >
                  <div className="flex gap-3">Cancel</div>
                </div>
                <button
                  className="mt-20 px-5 py-2 rounded-md cp1-bg-1 text-white cursor-pointer"
                  onClick={handleSaveData}
                  type="submit"
                >
                  <div className="flex gap-3">Save</div>
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="pb-32"> </div>
      </div>
    </>
  )
}
