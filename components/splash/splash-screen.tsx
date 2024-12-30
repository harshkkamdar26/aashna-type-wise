"use client";

import { motion } from "framer-motion";
import { Keyboard } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#253C5A" }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 2000);
        }}
        className="text-center px-4"
      >
        <Keyboard size={80} style={{ color: "#EA539D" }} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-3" style={{ color: "#B3E1B2" }}>
          Type-Wise
        </h1>
        <p className="text-xl" style={{ color: "#EA539D" }}>
          Master typography through fun quizzes!
        </p>
      </motion.div>
    </div>
  );
}