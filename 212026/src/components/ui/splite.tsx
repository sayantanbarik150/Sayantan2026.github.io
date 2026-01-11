'use client'

import { Suspense, lazy, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
    onLoad?: () => void
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
    const [isLoaded, setIsLoaded] = useState(false)

    const handleLoad = () => {
        setIsLoaded(true)
        onLoad?.()
    }

    return (
        <div className={`relative ${className}`}>
            <Suspense fallback={null}>
                <Spline
                    scene={scene}
                    onLoad={handleLoad}
                    className={`w-full h-full transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            </Suspense>

            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        {/* Elegant pulsing skeleton loader */}
                        <div className="w-[300px] h-[300px] rounded-full bg-neutral-800/50 animate-pulse blur-3xl" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
