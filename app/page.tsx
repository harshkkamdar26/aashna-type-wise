"use client";

import { useState } from "react";
import SplashScreen from "@/components/splash/splash-screen";
import TypeBasics from "@/components/intro/type-basics";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Keyboard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showBasics, setShowBasics] = useState(false);

  if (showSplash) {
    return <SplashScreen onComplete={() => {
      setShowSplash(false);
      setShowBasics(true);
    }} />;
  }

  if (showBasics) {
    return <TypeBasics onComplete={() => setShowBasics(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: "#253C5A" }}>
      <div className="max-w-md w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Keyboard size={60} style={{ color: "#EA539D" }} className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-3" style={{ color: "#B3E1B2" }}>
            Choose Your Path
          </h1>
          <p className="text-lg mb-8" style={{ color: "#EA539D" }}>
            Select your experience level to begin
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <Link href="/quiz/user" className="block">
            <Button 
              className="w-full py-6 text-lg font-semibold transition-transform hover:scale-105"
              style={{ background: "#EA539D", color: "white" }}
            >
              I'm a User
            </Button>
          </Link>
          
          <Link href="/quiz/designer" className="block">
            <Button 
              className="w-full py-6 text-lg font-semibold transition-transform hover:scale-105"
              style={{ background: "#B3E1B2", color: "#253C5A" }}
            >
              I'm a Designer
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}