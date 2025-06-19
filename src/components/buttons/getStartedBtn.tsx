"use client"

import React from 'react'
import { motion } from "motion/react"
import { Signature } from 'lucide-react'

const GetStartedBtn = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <button className="bg-foreground text-white px-4 py-2 text-lg md:px-10 md:py-6 md:text-4xl  font-semibold rounded-4xl shadow-lg hover:bg-primary-dark transition-colors font-crimson-text w-full max-w-xs md:max-w-none">
                    <motion.div
                        className='flex items-center justify-center'
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.2,
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="flex items-center justify-center"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            exit={{
                                opacity: 0,
                                y: 20
                            }}
                            whileHover={{
                                scale: 1.1,
                                transition: {
                                    duration: 0.2,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }
                            }}
                        >
                            <Signature
                                className="inline w-6 h-6 md:w-9 md:h-9 mr-2"
                            />
                        </motion.div>
                        Get Started
                    </motion.div>
                </button>
            </div>
        </div>
    )
}

export default GetStartedBtn
