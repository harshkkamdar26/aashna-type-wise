import { QuizQuestion } from "./types";

export const questions: Record<"user" | "designer", QuizQuestion[]> = {
  user: [
    {
      question: "Why is font size important in typography?",
      options: [
        "It only affects aesthetics",
        "It determines readability and accessibility",
        "It's just a personal preference",
        "It doesn't matter"
      ],
      correct: 1,
      explanation: "Font size is crucial for readability and accessibility. It ensures that text is comfortable to read for all users, including those with visual impairments."
    },
    {
      question: "What makes a website user-friendly?",
      options: [
        "Lots of flashy animations",
        "Clear navigation and readable content",
        "As much information as possible on one page",
        "Using the latest trends"
      ],
      correct: 1,
      explanation: "User-friendly websites prioritize clear navigation and readable content, making it easy for users to find what they need."
    },
    {
      question: "Why is white space important in design?",
      options: [
        "It's a waste of space",
        "It helps content breathe and improves readability",
        "It's only for minimalist designs",
        "It makes websites load faster"
      ],
      correct: 1,
      explanation: "White space helps content breathe, improves readability, and creates visual hierarchy in designs."
    },
    {
      question: "What role does color play in design?",
      options: [
        "It's purely decorative",
        "It conveys meaning and emotions",
        "It doesn't matter",
        "It's only for branding"
      ],
      correct: 1,
      explanation: "Color plays a crucial role in design by conveying meaning, emotions, and helping users understand interface elements."
    },
    {
      question: "Why is mobile responsiveness important?",
      options: [
        "It's just a trend",
        "Most users browse on mobile devices",
        "Desktop is more important",
        "It's optional"
      ],
      correct: 1,
      explanation: "Mobile responsiveness is crucial because most users access websites through mobile devices, making it essential for reaching a wider audience."
    }
  ],
  designer: [
    {
      question: "What is the recommended line length for optimal readability?",
      options: [
        "20-30 characters",
        "45-75 characters",
        "100-120 characters",
        "150+ characters"
      ],
      correct: 1,
      explanation: "The ideal line length for comfortable reading is between 45-75 characters. This length helps readers track lines easily and maintain focus."
    },
    {
      question: "What is the purpose of a modular scale in typography?",
      options: [
        "To make text bigger",
        "To create harmonious size relationships",
        "To save space",
        "To use fewer fonts"
      ],
      correct: 1,
      explanation: "A modular scale helps create harmonious size relationships between different text elements, establishing a clear visual hierarchy."
    },
    {
      question: "What is kerning in typography?",
      options: [
        "Line height adjustment",
        "The space between individual letters",
        "Font weight",
        "Text alignment"
      ],
      correct: 1,
      explanation: "Kerning is the process of adjusting the space between individual letters to achieve visually pleasing and readable text."
    },
    {
      question: "What is the purpose of a baseline grid?",
      options: [
        "To make text colorful",
        "To maintain consistent vertical rhythm",
        "To add borders",
        "To change font styles"
      ],
      correct: 1,
      explanation: "A baseline grid helps maintain consistent vertical rhythm in typography, creating a harmonious and professional layout."
    },
    {
      question: "What is the difference between serif and sans-serif fonts?",
      options: [
        "Color difference",
        "Serifs are decorative strokes at letter ends",
        "Size difference",
        "Weight difference"
      ],
      correct: 1,
      explanation: "Serif fonts have small decorative strokes at the ends of letters, while sans-serif fonts don't. This affects readability and style."
    }
  ]
};