import { 
  Type, 
  Layout, 
  Smartphone, 
  Eye, 
  Palette,
  RulerSquare,
  LetterSpacing,
  AlignVerticalJustifyCenter,
  TextQuote,
  LucideIcon
} from "lucide-react";

export function getQuestionIcon(question: string): LucideIcon {
  const lowercaseQuestion = question.toLowerCase();
  
  if (lowercaseQuestion.includes("font")) return Type;
  if (lowercaseQuestion.includes("user-friendly")) return Layout;
  if (lowercaseQuestion.includes("mobile")) return Smartphone;
  if (lowercaseQuestion.includes("readability")) return Eye;
  if (lowercaseQuestion.includes("color")) return Palette;
  if (lowercaseQuestion.includes("line length")) return RulerSquare;
  if (lowercaseQuestion.includes("kerning")) return LetterSpacing;
  if (lowercaseQuestion.includes("baseline")) return AlignVerticalJustifyCenter;
  if (lowercaseQuestion.includes("serif")) return TextQuote;
  
  return Type; // Default icon
}