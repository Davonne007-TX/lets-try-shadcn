import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MyAccordion() {
  return (
    <Accordion type="single" collapsible className="max-w-2xl mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold text-2xl">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold text-2xl">
          Is it styled?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold text-2xl">
          Is it animated?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
