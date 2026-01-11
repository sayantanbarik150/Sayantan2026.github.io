'use client'

import { useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
import { motion, AnimatePresence } from "framer-motion"
import { LoadingScreen } from "@/components/ui/loading-screen"

export function SplineSceneBasic() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <AnimatePresence mode="wait">
                {!isLoaded && <LoadingScreen key="loading" />}
            </AnimatePresence>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden flex flex-col lg:flex-row">
                {/* Cosmic Gradient Background */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 2 }}
                        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-[#575ECF] rounded-full blur-[100px] opacity-50 animate-blob"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-[#F858BC] rounded-full blur-[100px] opacity-50 animate-blob animation-delay-2000"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 2, delay: 1 }}
                        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-[#FE3F21] rounded-full blur-[100px] opacity-50 animate-blob animation-delay-4000"
                    />
                </div>

                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 z-10"
                    fill="white"
                />

                {/* Left content */}
                <div className="flex-1 p-8 lg:pl-20 relative z-30 flex flex-col justify-center text-center lg:text-left pb-10 lg:pb-28">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="text-[40px] md:text-[60px] lg:text-[80px] font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 via-neutral-400 to-neutral-50 animate-gradient leading-tight tracking-tight shadow-xl"
                    >
                        SAYANTAN BARIK
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="mt-6 max-w-2xl mx-auto lg:mx-0 text-[20px] md:text-[30px] lg:text-[40px] font-normal leading-tight font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-300 to-blue-200 animate-gradient"
                    >
                        Bring your UI to life with beautiful 3D scenes. Create immersive experiences
                        that capture attention and enhance your design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: "easeOut",
                        }}
                        className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center pointer-events-auto"
                    >
                        <a
                            href="https://cute-person-115458.framer.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10">Work With Sayantan</span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>

                        <a
                            href="https://wa.link/zomb2z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp
                        </a>

                        <a
                            href="https://x.com/SAYANTANBARIK5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 hover:border-gray-500 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            X
                        </a>

                        <a
                            href="https://www.instagram.com/core_x_x/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 hover:border-pink-500 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-pink-500" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            Instagram
                        </a>

                        <a
                            href="mailto:sayantanbarik2005@gmail.com"
                            className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 hover:border-red-500 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                            </svg>
                            Gmail
                        </a>
                    </motion.div>
                </div>

                {/* Right content */}
                <div className="flex-1 relative w-full h-full min-h-[50vh] lg:min-h-full z-20">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full scale-[2] lg:scale-[1.9] translate-y-24 lg:translate-y-32"
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>
            </motion.section>
        </>
    )
}
