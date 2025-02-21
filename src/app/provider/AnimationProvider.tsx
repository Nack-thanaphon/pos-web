import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Create a context
const AnimationContext = createContext<any>(null);

// Create a provider component
interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState("forward");

  // useEffect(() => {
  //   // Example logic to change page and direction
  //   const handlePageChange = () => {
  //     setDirection("forward");
  //     setPage(prevPage => prevPage + 1);
  //   };

  //   // Simulate page change
  //   const interval = setInterval(handlePageChange, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "forward" ? 100 : -100
    }),
    enter: { opacity: 1, x: 0 },
    exit: (direction: string) => ({
      opacity: 0,
      x: direction === "forward" ? -100 : 100,
    })
  };

  return (
    <AnimationContext.Provider value={{ direction, page, variants }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={page}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          custom={direction}
          transition={{ type: "linear" }}
          className="mb-[70px]"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </AnimationContext.Provider>
  );
};

// Custom hook to use the AnimationContext
export const useAnimationContext = () => {
  return useContext(AnimationContext);
};
