import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { CoffeeData } from "../data/mockData";
import React, { useEffect } from "react";

const Hero = () => {
    const [activeData, setActiveData] = React.useState(CoffeeData[0]);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    useEffect(()=>{
        const interval = setInterval(()=> {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % CoffeeData.length);
        }, 5000)
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
            <div className="container grid grid-cols-1 md:h-screen md:h-[900px] relative">
                <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w[500px] order-2 md:order-1">
                    <h1>
                        hero 
                    </h1>
                </div>
            </div>
        </motion.section>
    )
}

export default Hero;