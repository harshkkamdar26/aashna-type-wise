"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Info, AlertCircle } from "lucide-react";
import { QuizQuestion } from "@/lib/types";
import { getQuestionIcon } from "@/lib/question-icons";

interface QuizClientProps {
  type: "user" | "designer";
  questions: QuizQuestion[];
}

export default function QuizClient({ type, questions }: QuizClientProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showingInfo, setShowingInfo] = useState(false);
  const router = useRouter();

  const current = questions[currentQuestion];
  const QuestionIcon = getQuestionIcon(current.question);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (index === current.correct) {
      setScore(score + 1);
      if (currentQuestion === questions.length - 1) {
        setIsComplete(true);
      } else {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
        }, 1000);
      }
    } else {
      setShowModal(true);
      setShowingInfo(false);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#253C5A" }}>
        <div className="max-w-md w-full space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-4" style={{ color: "#B3E1B2" }}>
              Quiz Complete!
            </h1>
            <p className="text-xl mb-8" style={{ color: "#EA539D" }}>
              You got {score} out of {questions.length} correct!
            </p>
            <div className="p-6 rounded-lg mb-8" style={{ background: "rgba(179, 225, 178, 0.1)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#B3E1B2" }}>
                Key Learnings
              </h2>
              <ul className="text-left space-y-4" style={{ color: "#EA539D" }}>
                {questions.map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1">{getQuestionIcon(q.question, 20)}</span>
                    <span>{q.explanation}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={() => router.push("/")}
              className="w-full py-6 text-lg font-semibold"
              style={{ background: "#EA539D", color: "white" }}
            >
              Start Over
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#253C5A" }}>
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold" style={{ color: "#B3E1B2" }}>
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <Button
            variant="ghost"
            onClick={() => {
              setShowModal(true);
              setShowingInfo(true);
            }}
            className="p-2"
            style={{ color: "#EA539D" }}
          >
            <Info size={24} />
          </Button>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <QuestionIcon size={32} style={{ color: "#EA539D" }} />
            <h1 className="text-2xl font-bold flex-1" style={{ color: "#EA539D" }}>
              {current.question}
            </h1>
          </div>

          <div className="space-y-4">
            {current.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full py-4 text-left justify-start whitespace-normal h-auto ${
                  selectedAnswer === index
                    ? index === current.correct
                      ? "bg-green-500"
                      : "bg-red-500"
                    : ""
                }`}
                style={{
                  background: selectedAnswer === null ? "#B3E1B2" : undefined,
                  color: selectedAnswer === null ? "#253C5A" : "white",
                }}
                disabled={selectedAnswer !== null}
              >
                {option}
              </Button>
            ))}
          </div>
        </motion.div>

        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent 
            className="sm:max-w-md p-6"
            style={{ 
              background: "#253C5A", 
              border: "2px solid",
              borderColor: showingInfo ? "#B3E1B2" : "#EA539D"
            }}
          >
            <DialogHeader>
              <DialogTitle 
                className="text-xl font-semibold flex items-center gap-3"
                style={{ color: showingInfo ? "#B3E1B2" : "#EA539D" }}
              >
                {!showingInfo && (
                  <>
                    <AlertCircle className="w-6 h-6" />
                    Incorrect Answer
                  </>
                )}
                {showingInfo && "Explanation"}
              </DialogTitle>
              <DialogDescription className="text-lg mt-4" style={{ color: "#EA539D" }}>
                {current.explanation}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end mt-6">
              <Button
                onClick={() => {
                  setShowModal(false);
                  if (selectedAnswer !== null && selectedAnswer !== current.correct) {
                    setCurrentQuestion(currentQuestion + 1);
                    setSelectedAnswer(null);
                  }
                }}
                style={{ background: "#B3E1B2", color: "#253C5A" }}
                className="px-6"
              >
                {showingInfo ? "Got it!" : "Continue"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}