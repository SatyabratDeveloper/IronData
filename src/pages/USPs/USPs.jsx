import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import { FeatureCard, BreadcrumbNav } from "../../components";
import { Usps, additionalUSPs } from "../../constants";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const USPs = () => {
  const pages = [{ name: "Home", href: "/" }, { name: "USPs" }];

  return (
    <>
      <BreadcrumbNav pages={pages} />
      <div className="py-16">
        <div className="flex justify-center items-center mb-7">
          <Card className="bg-transparent py-0 justify-start">
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription className="lg:whitespace-nowrap">
                  IRON DATA VAULTS — USPs
                </CardDescription>
                <CardTitle className="lg:text-nowrap">
                  Own your Data Centre. Own your Data.
                </CardTitle>
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
      </div>
      <div className="py-16 bg-accent">
        <div className="flex justify-center items-center mb-7">
          <Card className="bg-transparent py-0 justify-start">
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription className="lg:whitespace-nowrap">
                  Additional USPs
                </CardDescription>
                <CardTitle className="lg:text-nowrap">
                  Transparency, Safety & Server Ownership
                </CardTitle>
              </CardHeader>
            </CardContentWrapper>
          </Card>
        </div>

        <div className="flex justify-center">
          <div className="w-11/12 sm:w-5/6 lg:w-4/5 flex flex-wrap justify-center gap-7">
            {additionalUSPs.map(({ id, image, title, description }) => (
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
      </div>
    </>
  );
};

export default USPs;
