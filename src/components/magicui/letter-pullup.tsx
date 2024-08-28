import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
  className,
  words,
  delay,
}: LetterPullupProps) {
  const splitWords = words.split("KIIT"); // Split the text by "KIIT"
  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05), // Delay each letter's animation by 0.05 seconds by default
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {splitWords[0]?.split("").map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className={cn(
<<<<<<< HEAD
            "font-display text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:leading-[5rem]",
=======
<<<<<<< HEAD
            "font-display text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-gray-200 md:leading-[5rem]",
=======
            "font-display text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:leading-[5rem]",
>>>>>>> 74fe1e750e568dde20232a4f1b873cc912fd5e60
>>>>>>> 3c6b169fbb60fded6fdf9591c34b0a77d2a8b455
            className
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}

      <motion.h1
        key="KIIT"
        variants={pullupVariant}
        initial="initial"
        animate="animate"
        custom={splitWords[0].length}
        className={cn(
          "font-display text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold tracking-[-0.02em] text-green-500 drop-shadow-sm dark:text-green-500 md:leading-[5rem]",
          className
        )}
      >
        KIIT
      </motion.h1>

      {splitWords[1]?.split("").map((letter, i) => (
        <motion.h1
          key={splitWords[0].length + "KIIT".length + i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={splitWords[0].length + "KIIT".length + i}
          className={cn(
<<<<<<< HEAD
            "font-display text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:leading-[5rem]",
=======
<<<<<<< HEAD
            "font-display text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-gray-200 md:leading-[5rem]",
=======
            "font-display text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:leading-[5rem]",
>>>>>>> 74fe1e750e568dde20232a4f1b873cc912fd5e60
>>>>>>> 3c6b169fbb60fded6fdf9591c34b0a77d2a8b455
            className
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}