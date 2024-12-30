import QuizClient from '@/components/quiz/quiz-client';
import { questions } from '@/lib/quiz-data';

export function generateStaticParams() {
  return [
    { type: 'user' },
    { type: 'designer' }
  ];
}

export default function QuizPage({ params }: { params: { type: "user" | "designer" } }) {
  return <QuizClient type={params.type} questions={questions[params.type]} />;
}