'use client'

import { motion } from 'framer-motion'

export function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl"
                />
            </div>

            {/* Center loader */}
            <div className="relative flex flex-col items-center gap-8">
                {/* Animated logo/spinner */}
                <div className="relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="w-20 h-20 rounded-full border-2 border-transparent border-t-purple-500 border-r-blue-500"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="absolute inset-2 rounded-full border-2 border-transparent border-b-pink-500 border-l-cyan-500"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm"
                    />
                </div>

                {/* Loading text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-col items-center gap-2"
                >
                    <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                    >
                        Welcome
                    </motion.span>
                    <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -8, 0],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.15,
                                    ease: 'easeInOut',
                                }}
                                className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
