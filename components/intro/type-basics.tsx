"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Type, 
  Smartphone, 
  Eye, 
  Palette, 
  Layout 
} from "lucide-react";

interface TypeBasicsProps {
  onComplete: () => void;
}

export default function TypeBasics({ onComplete }: TypeBasicsProps) {
  const basics = [
    {
      icon: <Type className="w-8 h-8 mb-2" style={{ color: "#EA539D" }} />,
      title: "Typography Matters",
      description: "Good typography makes reading easier and more enjoyable"
    },
    {
      icon: <Eye className="w-8 h-8 mb-2" style={{ color: "#EA539D" }} />,
      title: "Accessibility First",
      description: "Everyone should be able to read your content comfortably"
    },
    {
      icon: <Smartphone className="w-8 h-8 mb-2" style={{ color: "#EA539D" }} />,
      title: "Mobile Friendly",
      description: "Text should be readable on all devices"
    },
    {
      icon: <Layout className="w-8 h-8 mb-2" style={{ color: "#EA539D" }} />,
      title: "Visual Hierarchy",
      description: "Guide readers through your content with clear structure"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#253C5A" }}>
      <div className="max-w-2xl w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#B3E1B2" }}>
            Before We Begin...
          </h1>
          <p className="text-lg mb-8" style={{ color: "#EA539D" }}>
            Let's explore some typography basics!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {basics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg text-center"
            >
              {item.icon}
              <h2 className="text-xl font-semibold mb-2" style={{ color: "#B3E1B2" }}>
                {item.title}
              </h2>
              <p style={{ color: "#EA539D" }}>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <Button
            onClick={onComplete}
            className="px-8 py-6 text-lg font-semibold"
            style={{ background: "#EA539D", color: "white" }}
          >
            Start Quiz
          </Button>
        </motion.div>
      </div>
    </div>
  );
}