/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import tapImg from "@/images/tap.gif"
import sandImg from "@/images/sand.gif"
import leafImg from "@/images/leaf.gif"

import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button, LinkButton } from "@/components/common/Button"
import { addScore } from "@/lib/user"
import ChoiceButton from "./ChoiceButton"

import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon"
import ResetIcon from "@heroicons/react/24/solid/ArrowPathIcon"

const AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.75, transition: "easeInOut" },
}

const FlyInProps = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 1.5, transition: "easeInOut" },
}

export function PageRenderer({
  page,
  score,
  setPage,
  setScore,
}: {
  page: number
  score: number
  setPage: Dispatch<SetStateAction<number>>
  setScore: Dispatch<SetStateAction<number>>
}) {
  const timeOutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (page === 0) {
      timeOutRef.current = setTimeout(() => {
        setPage(page + 1)
      }, 2000)
    }

    return () => {
      clearTimeout(timeOutRef.current)
    }
  }, [page, setPage])

  switch (page) {
    case -2: {
      return (
        <div className="flex flex-col h-full justify-center  w-full text-white"
        onClick={() => setPage(page + 1)}>
          <div className="text-4xl mb-4 text-left bg-gradient-to-r">See you yesterday</div>
        </div>
      )
    }
    case -1: {
      return (
        <div className="flex flex-col h-full justify-center items-center cursor-pointer" onClick={() => setPage(page + 1)}>
          <p className="text-center text-xl">
            นานเท่าไรแล้วนะที่ไม่ได้ย้อนกลับมาเยี่ยมเด็กคนนี้เลย 
            <br />
            อยู่ดี ๆ ก็คิดถึง เลยแวะมาหาแปปนึง
          </p>
        </div>
      )
    }
    case 0: {
      return (
        <div
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
        </div>
      )
    }
    case 1: {
      return (
        <motion.div
          {...FlyInProps}
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <p className="text-center text-xl relative z-20 mb-6">
          "สวัสดีเด็กน้อย เล่นก่อกองทรายอยู่หรอ น่าสนุกดีนะ"
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 2: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <p className="text-center text-xl relative z-20 mb-6">
          "ขอเล่นด้วยคนนะ ไหนมีอะไรให้เล่นบ้าง"
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 3: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <p className="text-center text-xl relative z-20 mb-6">
          น้องแบ่งของเล่น ก่อกองทรายเป็นรูปต่าง ๆ <br />
ท่ามกลางสวนสาธารณะใต้ต้นไม้ที่ลมพัดโกรกสบาย <br />
เป็นความรู้สึกโล่งสบายใจ <br />
และเป็นแบบนี้ทุกครั้งที่มาเยี่ยมเด็กคนนี้
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 4: {
      return (
        <motion.div
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <p className="text-center relative z-20 mb-6">
          <Image layout="responsive" src={leafImg} alt="leaf" />
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 5: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <p className="text-center text-xl relative z-20 mb-6">
          ระหว่างเล่นก่อกองทราย <br />
           คุณนึกสงสัยเลยถามเด็กคนนั้นว่า
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 6: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
        >
          <div className="relative z-20 flex flex-col w-full max-w-sm gap-4 px-10">
            <ChoiceButton points={1} text="กลัวการต้องโตเป็นผู้ใหญ่มั้ย?" setScore={setScore} setPage={setPage} toPage={7} />
            <ChoiceButton points={3} text="คิดว่ายิ่งโตแล้วชีวิตจะยิ่งสนุกขึ้นมั้ย?" setScore={setScore} setPage={setPage} toPage={8} />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 7: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(9)}
        >
          <p className="text-center text-xl relative z-20 mb-6">
          " เราว่าโตเป็นผู้ใหญ่ไม่น่ากลัวนะ โตขึ้น <br />
          จะไปไหนก็ได้ ไปกับใครก็ได้ <br />
           แล้วก็ไม่ต้องนอนกลางวันด้วย ! "
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 8: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(9)}
        >
          <p className="text-center text-xl relative z-20 mb-6">
          " สนุกแน่นอน ! <br />
          พี่ของเราไปเที่ยวต่างจังหวัดกับเพื่อน <br />
          ได้โทรศัพท์แล้วด้วย <br />
          เมื่อไรเราจะได้แบบนั้นบ้างนะ "
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 9: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <p className="text-center text-xl relative z-20 mb-6">
          คุณแอบนึกขำ ไอเด็กคนนี้ไม่รู้อะไรซะแล้ว <br />
           การเติบโตมันไม่ได้เรียบง่ายแบบนั้น <br />
           แต่ก็นึกเอ็นดู เพราะโลกที่เขามองเห็น <br />
           ทุกอย่างมันเรียบง่ายไปหมด
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    default: {
      return null
    }
  }
}

export function AnimationWrapper({ page, children }: { page: number; children: ReactNode }) {
  return (
    <motion.div {...AnimationProps} key={page} className="h-full">
      {children}
    </motion.div>
  )
}
