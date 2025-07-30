import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import { FeatureCard } from "../../components";
import { Usps } from "../../constants";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const USPsData = () => {
  return (
    <div className="py-16">
      <div className="flex justify-center items-center mb-7">
        <Card className="bg-transparent py-0 justify-start">
          <CardContentWrapper className="">
            <CardHeader>
              <CardTitle className="lg:text-nowrap">
                Own your Data Centre. Own your Data.
              </CardTitle>
              <CardDescription>USPs</CardDescription>
            </CardHeader>
          </CardContentWrapper>
        </Card>
      </div>

      <div className="flex justify-center">
        <div className="w-11/12 sm:w-5/6 lg:w-4/5 flex flex-wrap justify-center gap-7">
          {Usps.map(({ id, image, title, description }) => (
            <FeatureCard
              key={id}
              image={image}
              image_alt={title}
              title={title}
              description={description}
              className="list-none"
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-8 tracking-wide">
        <Button asChild variant="secondary" size="lg" className="">
          <Link to="/usps">View All</Link>
        </Button>
      </div>
    </div>
  );
};

export default USPsData;
