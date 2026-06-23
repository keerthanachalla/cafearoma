import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { CoffeeData } from "../data/mockData";
import React, { useEffect } from "react";
import { SlideRight } from "../util/animate";

const Hero = () => {
    const [activeData, setActiveData] = React.useState(CoffeeData[0]);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    useEffect(()=>{
        const interval = setInterval(()=> {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % CoffeeData.length);
        }, 4000)
        return ()=>clearInterval(interval)
    })

    useEffect(()=>{
        setActiveData(CoffeeData[currentIndex])
    }, [currentIndex])
    return (
        <motion.section 
        initial={{
            backgroundImage: `radial-gradient(circle, ${activeData.bgColor} 0%, 
            ${activeData.bgColor} 0%)`
        }}
        animate={{
            backgroundImage: `radial-gradient(circle, ${activeData.bgColor}ee 0%,
             ${activeData.bgColor} 70%)`
        }}
        transition={{
            duration: 1,
            ease: easeInOut,
        }}
        className="text-white"
        >
            <div className="container grid grid-cols-1 md:grid-cols-2 h-screen md:h-[700px] relative">
                <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w[500px] order-2 md:order-1">
                    <div className="space-y-5 md:space-y-7 text-center md:text-left">
                        <AnimatePresence mode="wait">
                            <motion.h1 
                            key={activeData.id}
                            variants={SlideRight(0.2)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="text-3xl lg:text-4xl xl:text-5xl font-bold"
                            >
                                {activeData.title}
                            </motion.h1>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.h1 
                            key={activeData.id}
                            variants={SlideRight(0.4)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="text-sm leading-loose text-whote/80"
                            >
                                {activeData.subtitle}
                            </motion.h1>
                        </AnimatePresence>
                    </div>
                </div>
                {/* Image container section */}
                <div className="flex flex-col items-center justify-center order-1 md:order-2 relative">
                    <AnimatePresence mode="wait">
                         <motion.img 
                        key={activeData.id}
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.4, delay: 0, ease: easeInOut}}
                        exit={{opacity: 0, x: -100}}
                        src={activeData.image} 
                        alt={activeData.title} 
                        className="w-[300px] md:w-[400px] xl:w-[500px] relative z-10"/>
                    </AnimatePresence>
                   
                </div>
                {/* chat icon section */}
            </div>
        </motion.section>
    )
}

export default Hero;