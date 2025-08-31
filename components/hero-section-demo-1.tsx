"use client";

import { motion } from "motion/react";
import { createAuthClient } from "better-auth/react";
import Link from "next/link";

const { useSession } = createAuthClient();

export default function HeroSection() {
	const { data: session } = useSession();

	const isLoggedIn = !!session?.user.id;

	return (
		<div className="">
			<h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
				{"Mastery begins with a single prompt".split(" ").map((word, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
						animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
						transition={{
							duration: 0.3,
							delay: index * 0.1,
							ease: "easeInOut",
						}}
						className="mr-2 inline-block"
					>
						{word}
					</motion.span>
				))}
			</h1>
			<motion.p
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.3,
					delay: 0.8,
				}}
				className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
			>
				Master any tech topic in hours, not weeks. Prompt2Mastery uses
				cutting-edge AI to generate custom exercises, score your answers, and
				track your progress—so you can focus on actually learning.
			</motion.p>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.3,
					delay: 1,
				}}
				className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
			>
				<Link href={isLoggedIn ? "/dashboard" : "/login"}>
					<button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
						Explore Now
					</button>
				</Link>
			</motion.div>
		</div>
	);
}
