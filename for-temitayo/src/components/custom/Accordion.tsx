"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { LoveQuestions } from "@/utils/love";

const LoveAccordion = () => {
  return (
    <motion.section className="container py-20">
      <motion.div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible>
          {LoveQuestions.map((faq, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>

              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
};

export default LoveAccordion;
