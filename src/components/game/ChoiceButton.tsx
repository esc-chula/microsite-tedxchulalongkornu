import { Dispatch, SetStateAction } from "react"

export default function ChoiceButton({
  setPage,
  toPage,
  onClick,
  text,
}: {
  setPage: Dispatch<SetStateAction<number>>
  onClick?: () => void
  toPage: number
  text: string
}) {
  return (
    <button
      onClick={() => {
        setPage((page) => toPage)

        onClick && onClick()
      }}
      className="bg-gradient-to-r from-[#EA76E7] to-[#754DF2] text-white shadow-md rounded-xl w-full p-0.5"
    >
      <span className="justify-center flex h-full w-full bg-black rounded-xl p-2">{text}</span>
    </button>
  )
}
