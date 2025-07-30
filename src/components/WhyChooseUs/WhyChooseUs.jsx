import {
  Card,
  CardDescription,
  CardHeader,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { whyChooseUs } from "../../constants";
import WhyChooseUsImage from "../../assets/images/why-choose-us.png";

const WhyChooseUs = () => {
  return (
    <>
      <div className="py-16">
        <div className="flex justify-center items-center mb-7">
          <Card className="bg-transparent py-0 justify-start">
            <CardImage
              img={WhyChooseUsImage}
              alt="About_image"
              className="w-[30rem] mb-6 lg:mb-0"
            />
            <CardContentWrapper className=" w-full lg:w-2/3">
              <CardHeader>
                <CardDescription>Why Choose Us?</CardDescription>
              </CardHeader>
              <div className="flex justify-center w-full">
                <div className="w-full">
                  {whyChooseUs.map(({ id, title, description }) => (
                    <Accordion type="single" collapsible key={id}>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>{title}</AccordionTrigger>
                        <AccordionContent>{description}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </div>
            </CardContentWrapper>
          </Card>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
