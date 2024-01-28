import { useCallback, useEffect, useState } from "react"
import clsx from "clsx"
import { AnimationWrapper, PageRenderer } from "@/components/game/GamePage"

export default function Game() {
  const [page, setPage] = useState(0)

  const getBG = useCallback(
    (page: number) => {
      // style={{ background: "linear-gradient(180deg, #FAB9D1 -2.82%, #C7A9C6 96.57%)" }}
      if (page === 0) return "bg-black text-white"
      else if (page >= 1 && page <= 7) return "bg-black text-white"
      else if (page >= 8 && page <= 15) return "bg-black text-white"
      else if (page >= 16 && page <= 27) return "bg-black text-white"

      return "bg-black text-white"
    },
    []
  )

  return (
    <div className={clsx("h-screen overflow-hidden", getBG(page))}>
      <main className="mx-auto h-full relative max-w-lg font-display">
        <AnimationWrapper page={page}>
          <PageRenderer
            page={page}
            setPage={setPage}
          />
        </AnimationWrapper>
      </main>
    </div>
  )
}
