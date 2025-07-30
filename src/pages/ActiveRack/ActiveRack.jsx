import ActiveRackImage from "../../assets/images/active-rack.png";
import IdealUseActiveRackImage from "../../assets/images/ideal-use-cases.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import { activeRackFeatures } from "../../constants";
import { FeatureCard, BreadcrumbNav } from "../../components";
import { CircleCheckBig } from "lucide-react";

const ActiveRack = () => {
  const pages = [{ name: "Home", href: "/" }, { name: "Active Rack" }];

  return (
    <>
      <BreadcrumbNav pages={pages} />
      <div className="flex justify-center items-center py-8">
        <Card className="items-center">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>Active Rack Solutions</CardDescription>
              <CardTitle>
                Empowering High Performance Computing with Intelligent
                Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our Colocation Active Rack solution offers secure,
                high-performance, and scalable rack space in a carrier-neutral,
                enterprise-grade data center environment. Designed for
                businesses requiring reliable uptime, efficient cooling, and
                robust connectivity, our active racks are ideal for hosting
                servers, storage, and network equipment.
              </p>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={ActiveRackImage}
            alt="About_image"
            className="w-[40rem] mt-6 lg:mt-0"
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
            {activeRackFeatures.map(({ id, image, title, description }) => (
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
                    Cloud and hybrid infrastructure deployments
                  </p>
                  <p className="flex gap-3 items-center">
                    <span>
                      <CircleCheckBig className="size-5 text-primary" />
                    </span>
                    Disaster recovery and backup systems
                  </p>
                  <p className="flex gap-3 items-center">
                    <span>
                      <CircleCheckBig className="size-5 text-primary" />
                    </span>
                    Enterprise server colocation
                  </p>
                  <p className="flex gap-3">
                    <span>
                      <CircleCheckBig className="size-5 text-primary mt-0.5" />
                    </span>
                    High-frequency trading and latency-sensitive applications
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
    </>
  );
};

export default ActiveRack;
