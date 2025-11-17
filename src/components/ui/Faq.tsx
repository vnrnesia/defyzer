"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MessageCircleQuestionMark,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  defaultOpen?: boolean;
}

function FAQItem({ question, answer, index, defaultOpen }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  const isFirst = index === 0 && isOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={cn(
        "group rounded-lg border transition-all duration-200 ease-in-out",
        isOpen
          ? "shadow-sm bg-green-50 border-green-200"
          : "hover:bg-card/50 border-border/60"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            "text-left text-base font-medium transition-colors duration-200",
            isOpen ? "text-green-600" : "text-foreground/80"
          )}
        >
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "shrink-0 rounded-full p-0.5",
            isOpen ? "text-green-600" : "text-muted-foreground"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-border/40 border-t px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-sm leading-relaxed text-gray-700"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq3() {
  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "What makes MVPBlocks unique?",
      answer:
        "MVPBlocks stands out through its intuitive design, powerful component library, and seamless integration options.",
      defaultOpen: true, // İlk kutu açık başlar
    },
    {
      question: "How can I customize the components?",
      answer:
        "All components are built with Tailwind CSS, making them highly customizable.",
    },
    {
      question: "Do the components work with dark mode?",
      answer:
        "Yes, all MVPBlocks components adapt automatically to your theme.",
    },
    {
      question: "How can I get started with MVPBlocks?",
      answer:
        "Browse our library, copy components, and follow our documentation.",
    },
    {
      question: "Can I use MVPBlocks for commercial projects?",
      answer: "Absolutely! MVPBlocks is free for personal and commercial use.",
    },
  ];

  return (
    <section className="bg-background relative w-full overflow-hidden py-16">
      {/* --- Üst Ortadaki Başlık --- */}
      <div className="mx-auto mb-14 max-w-xl text-center">
        <div className="gap-2 border-1 inline-flex p-1 px-3 rounded-full mb-4">
          <MessageCircleQuestionMark /> Blog
        </div>
        <h2 className="from-primary mb-3 bg-gradient-to-r to-green-500 bg-clip-text text-6xl font-bold text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-sm">
          Everything you need to know about MVPBlocks
        </p>
      </div>

      {/* --- İçerik Grid --- */}
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Sol: Görsel */}
        <div className="flex justify-center self-start">
          <img
            src="/signboad.jpg"
            alt="Signboard"
            className="rounded-xl object-cover w-full h-auto max-h-[600px] shadow-lg"
          />
        </div>

        {/* Sağ: Akordeon */}
        <div className="relative">
          <div className="mx-auto max-w-2xl space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
