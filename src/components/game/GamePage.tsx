/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import sandImg from "@/images/sand.gif"
import leafImg from "@/images/leaf.gif"
import filmRoll from "@/images/filmroll.gif"
import skyImg from "@/images/sky.gif"
import memoryOne from "@/images/mem1.gif"
import memoryTwo from "@/images/mem2.gif"
import memoryThree from "@/images/mem3.gif"

import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react"
import { AnimatePresence, delay, motion } from "framer-motion"
import ChoiceButton from "./ChoiceButton"
import { Rainbow } from "@/images/svg/Rainbow"

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

const Step = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { delay: 1,duration: 0.75, transition: "easeInOut" },
}

const Step2 = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { delay: 2,duration: 0.75, transition: "easeInOut" },
}

const Step3 = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { delay: 3,duration: 0.75, transition: "easeInOut" },
}

const Step4 = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { delay: 4,duration: 0.75, transition: "easeInOut" },
}

export function PageRenderer({
  page,
  setPage,
}: {
  page: number
  setPage: Dispatch<SetStateAction<number>>
}) {
  const timeOutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (page === 2) {
      timeOutRef.current = setTimeout(() => {
        setPage(page + 1)
      }, 2000)
    }

    if (page === 6) {
      timeOutRef.current = setTimeout(() => {
        setPage(page + 1)
      }, 3000)
    }

    return () => {
      clearTimeout(timeOutRef.current)
    }
  }, [page, setPage])

  switch (page) {
    case 0: {
      return (
        <motion.div {...AnimationProps} className="flex flex-col h-full justify-center  w-full text-white"
        onClick={() => setPage(page + 1)}>
    <div
      className="z-999 absolute right-[-250px] top-[-300px] h-[800px] w-[800px] rounded-full"
      style={{ background: "radial-gradient(50% 50% at 50% 50%, #754DF2 25%, rgba(117, 77, 242, 0.00) 37%)" }}
    >
    </div>
    <div
      className="z-999 absolute right-[-200px] top-[-330px] h-[800px] w-[800px] rounded-full"
      style={{ background: "radial-gradient(50% 50% at 50% 50%, #FF2B29 25%, rgba(117, 77, 242, 0.00) 37%)" }}
    >
    </div>
          <div className="text-4xl px-4 mb-4 text-left"><p>See you yesterday</p><Rainbow /></div>
          <div
      className="z-999 absolute left-[-375px] bottom-[-240px] h-[800px] w-[800px] rounded-full"
      style={{ background: "radial-gradient(50% 50% at 50% 50%, #E8FA52 25%, rgba(117, 77, 242, 0.00) 37%)" }}
    >
    </div>
    <div
      className="z-999 absolute left-[-350px] top-[400px] h-[800px] w-[800px] rounded-full"
      style={{ background: "radial-gradient(50% 50% at 50% 50%, #EA76E7 25%, rgba(117, 77, 242, 0.00) 37%)" }}
    >
    </div>
        </motion.div>
      )
    }
    case 1: {
      return (
        <motion.div {...AnimationProps} className="flex flex-col h-full justify-center items-center cursor-pointer" onClick={() => setPage(page + 1)}>
          <p className="text-center text-xl">
            นานเท่าไรแล้วนะที่ไม่ได้ย้อนกลับมาเยี่ยมเด็กคนนี้เลย 
            <br />
            อยู่ดี ๆ ก็คิดถึง เลยแวะมาหาแปปนึง
          </p>
        </motion.div>
      )
    }
    case 2: {
      return (
        <div
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
        </div>
      )
    }
    case 3: {
      return (
        <motion.div
          {...FlyInProps}
          {...AnimationProps}
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
    case 4: {
      return (
        <motion.div
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer transition-none"
          onClick={() => setPage(page + 1)}
        >
          <motion.p {...AnimationProps}className="text-center text-xl relative z-20 mb-6">
          "ขอเล่นด้วยคนนะ ไหนมีอะไรให้เล่นบ้าง"
          </motion.p>

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
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          น้องแบ่งของเล่น ก่อกองทรายเป็นรูปต่าง ๆ <br />
          ท่ามกลางสวนสาธารณะใต้ต้นไม้ที่ลมพัดโกรกสบาย <br />
          เป็นความรู้สึกโล่งสบายใจ <br />
          และเป็นแบบนี้ทุกครั้งที่มาเยี่ยมเด็กคนนี้
          </motion.p>

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
          onClick={() => setPage(page + 1)}
        >
          <motion.p {...AnimationProps} className="text-center relative z-20 mb-6">
          <Image layout="responsive" src={leafImg} alt="leaf" />
          </motion.p>

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
          onClick={() => setPage(page + 1)}
        >
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          ระหว่างเล่นก่อกองทราย <br />
           คุณนึกสงสัยเลยถามเด็กคนนั้นว่า
          </motion.p>

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
        >
          <motion.div {...AnimationProps} className="relative z-20 flex flex-col w-full max-w-sm gap-4 px-10">
            <ChoiceButton text="กลัวการต้องโตเป็นผู้ใหญ่มั้ย?" setPage={setPage} toPage={9} />
            <ChoiceButton text="คิดว่ายิ่งโตแล้วชีวิตจะยิ่งสนุกขึ้นมั้ย?" setPage={setPage} toPage={10} />
          </motion.div>
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
          onClick={() => setPage(11)}
        >
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          " เราว่าโตเป็นผู้ใหญ่ไม่น่ากลัวนะ โตขึ้น <br />
          จะไปไหนก็ได้ ไปกับใครก็ได้ <br />
           แล้วก็ไม่ต้องนอนกลางวันด้วย ! "
          </motion.p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 10: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(11)}
        >
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          " สนุกแน่นอน ! <br />
          พี่ของเราไปเที่ยวต่างจังหวัดกับเพื่อน <br />
          ได้โทรศัพท์แล้วด้วย <br />
          เมื่อไรเราจะได้แบบนั้นบ้างนะ "
          </motion.p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 11: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          คุณแอบนึกขำ ไอเด็กคนนี้ไม่รู้อะไรซะแล้ว <br />
           การเติบโตมันไม่ได้เรียบง่ายแบบนั้น <br />
           แต่ก็นึกเอ็นดู เพราะโลกที่เขามองเห็น <br />
           ทุกอย่างมันเรียบง่ายไปหมด
          </motion.p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 transition-none">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 12: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          ต่อมาคุณถามคำถาม <br /> 
          ซึ่งมักจะถามกับเด็กคนนั้นบ่อย ๆ
          </motion.p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 transition-none">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 13: {
      return (
        <motion.div
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
        >
          <motion.p {...AnimationProps} className="text-center relative z-20 flex flex-col w-full max-w-sm gap-4 px-10 mb-10">
          " ตอนนี้เรายังเป็นคนที่แกอยากเป็นมั้ยนะ ? "<br />
           คุณคิดว่าเด็กคนนั้นจะตอบว่าอย่างไร ?
          <ChoiceButton text="ใช่สิ พี่ก็ทำแบบนั้นมาโดยตลอดนั่นแหละ
เก่งมาก !" setPage={setPage} toPage={14} />
            <ChoiceButton text="ก็ไม่เชิงนะ แต่ก็ไม่เป็นไรหรอก
เหลือเวลาตั้งเยอะ 5555" setPage={setPage} toPage={15} />
          </motion.p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 transition-none">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 14: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(16)}
        >
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          คุณเชื่อมั้ยว่าคำชมจากเด็กน้อย <br />
          เป็นสิ่งที่บริสุทธิ์ที่สุดในโลก ? <br />
          คุณควรเชื่อมันนะ เด็กโกหกไม่เป็นหรอก
          </motion.p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 transition-none">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 15: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(16)}
        >
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          คุณแอบนึกเสียใจเล็กน้อย ที่ทำให้เด็กคนนั้นผิดหวัง <br />
          แต่ก็จริง... เราเหลือเวลาให้เรียนรู้อีกตั้งเยอะ
          </motion.p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 transition-none">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 16: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          จังหวะที่เด็กคนนั้นลุกไปหาของเล่นชิ้นใหม่ <br />
           คุณก็นึกขึ้นว่า ใครจะไปรู้ว่าเราจะมาถึงตรงจุดนี้ <br />
           เรามาไกลมากเลยนะ <br />
           แต่อนาคตจะเป็นยังไงอีก<br />
           ก็ไม่มีอะไรแน่นอน อาจสมหวัง ผิดหวัง <br />
           แต่ไม่เป็นไร เราก็เริ่มใหม่ได้เสมอ
          </motion.p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 transition-none">
            <Image layout="responsive" src={sandImg} alt="sand" />
          </div>
        </motion.div>
      )
    }
    case 17: {
      return (
        <motion.div
        {...FlyInProps}
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <motion.p {...AnimationProps} className="text-center w-full relative z-20 mb-6">
          <Image layout="responsive" src={leafImg} alt="leaf" />
          </motion.p>
        </motion.div>
      )
    }
    case 18: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          เพราะเด็กคนนั้นก็คือคุณ คุณก็คือเด็กคนนั้น <br />
          เชื่อมต่อกันระหว่างอดีต ปัจจุบันอนาคต <br />
          ผ่านความคิดและความทรงจำ
          </motion.p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 transition-none">
            <Image layout="responsive" src={filmRoll} alt="filmRoll" />
          </div>
        </motion.div>
      )
    }
    case 19: {
      return (
        <motion.div
          
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          คุณมองออกไปไกลจากที่มองอยู่
          </motion.p>
        </motion.div>
      )
    }
    case 20: {
      return (
        <div
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
        </div>
      )
    }
    case 21: {
      return (
        <motion.div 
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full transition-none">
            <Image layout="responsive" src={skyImg} alt="sky" />
          </div>
        </motion.div>
      )
    }
    case 22: {
      return (
        <motion.div 
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full transition-none">
            <Image layout="responsive" src={skyImg} alt="sky" />
          </div>
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          สุดลูกหูลูกตานั่น <br />
          คุณเห็นเส้นขอบฟ้า และเมฆสีขาวโพลนที่ดูสบายตา
          </motion.p>
        </motion.div>
      )
    }
    case 23: {
      return (
        <motion.div 
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full transition-none">
            <Image layout="responsive" src={skyImg} alt="sky" />
          </div>
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          คุณหันกลับมาคิดว่าในตอนนี้ล่ะชีวิตกำลังเป็นยังไง
          </motion.p>
        </motion.div>
      )
    }
    case 24: {
      return (
        <motion.div 
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full transition-none">
            <Image layout="responsive" src={skyImg} alt="sky" />
          </div>
          <motion.p {...AnimationProps} className="text-center text-xl relative z-20 mb-6">
          เปลี่ยนไปจากตอนนั้นยังไงบ้างแล้ว
          </motion.p>
        </motion.div>
      )
    }
    case 25: {
      return (
        <motion.div 
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full transition-none">
            <Image layout="responsive" src={skyImg} alt="sky" />
          </div>
          <motion.p {...AnimationProps} className="text-center relative z-20 flex flex-col w-full max-w-md gap-4 px-12 mb-6">
          “ ช่วงนี้ชีวิตเรากำลังอยู่ในห้วงความรู้สึกไหนกันนะ...? "
            <ChoiceButton text="ยากลำบากสุด ๆ" setPage={setPage} toPage={26} />
            <ChoiceButton text="มีช่วงเวลาดี ๆ มากมาย" setPage={setPage} toPage={27} />
            <ChoiceButton text="มีทั้งรอยยิ้มและคราบน้ำตา" setPage={setPage} toPage={28} />
          </motion.p>
        </motion.div>
      )
    }
    case 26: {
      return (
        <motion.div 
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(29)}
        >
          
            <motion.div {...Step} className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
            <Image layout="responsive" src={memoryOne} alt="memory 1" />
          </motion.div>
          <motion.div {...Step2} className="absolute top-[200px] left-1/2 -translate-x-1/2 w-full">
            <Image layout="responsive" src={memoryTwo} alt="memory 1" />
          </motion.div>
          <motion.div {...Step3} className="absolute top-[400px] left-1/2 -translate-x-1/2 w-full">
            <Image layout="responsive" src={memoryThree} alt="memory 1" />
          </motion.div>
          <motion.p {...Step4} className="text-center text-xl relative z-20 mb-6">
          ช่วงเวลาต่าง ๆ ที่เกิดขึ้น <br />
          ค่อย ๆ หลั่งไหลเข้ามาในความคิดคุณ
          </motion.p>
          
        </motion.div>
      )
    }
    case 27: {
      return (
        <motion.div 
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(30)}
        >
          
            <motion.div {...Step} className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
            <Image layout="responsive" src={memoryOne} alt="memory 1" />
          </motion.div>
          <motion.div {...Step2} className="absolute top-[200px] left-1/2 -translate-x-1/2 w-full">
            <Image layout="responsive" src={memoryTwo} alt="memory 1" />
          </motion.div>
          <motion.div {...Step3} className="absolute top-[400px] left-1/2 -translate-x-1/2 w-full">
            <Image layout="responsive" src={memoryThree} alt="memory 1" />
          </motion.div>
          <motion.p {...Step4} className="text-center text-xl relative z-20 mb-6">
          ช่วงเวลาต่าง ๆ ที่เกิดขึ้น <br />
          ค่อย ๆ หลั่งไหลเข้ามาในความคิดคุณ
          </motion.p>
          
        </motion.div>
      )
    }
    case 28: {
      return (
        <motion.div 
          key={page}
          className="flex flex-col h-full justify-center items-center cursor-pointer"
          onClick={() => setPage(31)}
        >
          
            <motion.div {...Step} className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
            <Image layout="responsive" src={memoryOne} alt="memory 1" />
          </motion.div>
          <motion.div {...Step2} className="absolute top-[200px] left-1/2 -translate-x-1/2 w-full">
            <Image layout="responsive" src={memoryTwo} alt="memory 1" />
          </motion.div>
          <motion.div {...Step3} className="absolute top-[400px] left-1/2 -translate-x-1/2 w-full">
            <Image layout="responsive" src={memoryThree} alt="memory 1" />
          </motion.div>
          <motion.p {...Step4} className="text-center text-xl relative z-20 mb-6">
          ช่วงเวลาต่าง ๆ ที่เกิดขึ้น <br />
          ค่อย ๆ หลั่งไหลเข้ามาในความคิดคุณ
          </motion.p>
          
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
    <motion.div  key={page} className="h-full">
      {children}
    </motion.div>
  )
}
