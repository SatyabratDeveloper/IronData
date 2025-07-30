import PassiveRackImage from "../../assets/images/passive-rack.jpg";
import IdealUseActiveRackImage from "../../assets/images/ideal-use-cases.png";
import ChooseUsImage from "../../assets/images/why-choose-IDV.avif";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import { passiveRackFeatures } from "../../constants";
import { BreadcrumbNav, FeatureCard } from "../../components";
import { CircleCheckBig, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PassiveRack = () => {
  const pages = [{ name: "Home", href: "/" }, { name: "Passive Rack" }];

  return (
    <>
      <BreadcrumbNav pages={pages} />
      <div className="flex justify-center items-center py-8">
        <Card className="items-center">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>Passive Rack Solutions</CardDescription>
              <CardTitle>
                Secure, Scalable, and Cost-Efficient Colocation for Low-Power
                Equipment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At <span className="font-bold">IRON DATA VAULTS</span>, our{" "}
                <span className="font-bold">Passive Rack Solutions</span>{" "}
                provide an ideal environment for housing non-powered or
                low-power IT equipment. Whether you’re managing patch panels,
                network distribution frames, or media converters, our passive
                rack colocation delivers the reliability and security you need
                without the cost of unnecessary power or cooling.
              </p>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={PassiveRackImage}
            alt="About_image"
            className="w-[70rem] mt-6 lg:mt-0"
          />
        </Card>
      </div>
      <div className="py-16 bg-accent">
        <div className="flex justify-center items-center mb-7">
          <Card className="bg-transparent py-0 justify-start">
            <CardContentWrapper className="lg:whitespace-nowrap">
              <CardHeader>
                <CardDescription>Key Features</CardDescription>
              </CardHeader>
            </CardContentWrapper>
          </Card>
        </div>

        <div className="flex justify-center">
          <div className="w-11/12 sm:w-5/6 lg:w-4/5 flex flex-wrap justify-center gap-7">
            {passiveRackFeatures.map(({ id, image, title, description }) => (
              <FeatureCard
                key={id}
                image={image}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 space-y-16">
        <div className="flex justify-center">
          <Card className="lg:gap-12">
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription>Ideal Use Cases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="flex gap-3 items-center">
                    <span>
                      <CircleCheckBig className="size-5 text-primary" />
                    </span>
                    Patch panels & fiber management
                  </p>
                  <p className="flex gap-3 items-center">
                    <span>
                      <CircleCheckBig className="size-5 text-primary" />
                    </span>
                    Network demarcation points
                  </p>
                  <p className="flex gap-3">
                    <span>
                      <CircleCheckBig className="size-5 text-primary mt-0.5" />
                    </span>
                    Passive data routing systems
                  </p>
                  <p className="flex gap-3">
                    <span>
                      <CircleCheckBig className="size-5 text-primary mt-0.5" />
                    </span>
                    Media converters and low-energy gear
                  </p>
                  <p className="flex gap-3">
                    <span>
                      <CircleCheckBig className="size-5 text-primary mt-0.5" />
                    </span>
                    Interconnection hubs
                  </p>
                </div>
              </CardContent>
            </CardContentWrapper>
            <CardImage
              img={IdealUseActiveRackImage}
              alt="About_image"
              className="w-[40rem] mt-6 lg:mt-0"
            />
          </Card>
        </div>
      </div>
      <div className="bg-accent py-16 space-y-16">
        <div className="flex justify-center">
          <Card className="lg:gap-12">
            <CardImage
              img={ChooseUsImage}
              alt="About_image"
              className="w-[50rem] mb-6 lg:mb-0"
            />
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription>Why Choose IRON DATA VAULTS?</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We combine physical security, operational transparency, and a
                  highly accessible facility designed to support your
                  infrastructure with long-term reliability. Our Passive Rack
                  Solutions are perfect for businesses seeking a secure,
                  space-efficient colocation strategy for equipment that doesn’t
                  require power draw.
                </p>
                <div>
                  <p className="font-bold">For more details send your mail</p>
                  <Link
                    to="mailto:info@8mosphere.com"
                    className="hover:text-gray-500 flex items-center gap-1.5"
                  >
                    <Mail className="size-4" />
                    info@irondatavaults.com
                  </Link>
                </div>
              </CardContent>
            </CardContentWrapper>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PassiveRack;
