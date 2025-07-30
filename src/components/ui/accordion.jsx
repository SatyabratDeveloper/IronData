import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ ...props }) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className="w-full"
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-2", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start gap-2 rounded-md px-4 py-3 text-left text-base sm:text-lg font-semibold transition-all hover:text-primary focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-primary [&[data-state=open]>svg]:rotate-180 hover:cursor-pointer",
          className
        )}
        {...props}
      >
        <PlusIcon className="" />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm sm:text-base text-gray-700 px-5 py-6 border-t"
      {...props}
    >
      <div className={cn("", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
