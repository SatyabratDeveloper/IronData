import { FeatureCard } from "../../components";
import { BenefitsData } from "../../constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";

const Benefits = () => {
  return (
    <div className="py-16">
      <div className="flex justify-center items-center mb-7">
        <Card className="bg-transparent py-0 justify-start">
          <CardContentWrapper className="lg:whitespace-nowrap">
            <CardHeader>
              <CardDescription>Benefits</CardDescription>
            </CardHeader>
          </CardContentWrapper>
        </Card>
      </div>

      <div className="flex justify-center">
        <div className="w-11/12 sm:w-5/6 lg:w-4/5 flex flex-wrap justify-center gap-7">
          {BenefitsData.map(({ id, icon, title, description }) => (
            <FeatureCard
              key={id}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
