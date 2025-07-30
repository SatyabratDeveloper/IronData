import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import ColocationServicesImage from "../../assets/images/infrastructure.jpg";
import EnergyImage from "../../assets/images/energy.jpg";
import SecurityImage from "../../assets/images/security.jpg";
import AutomationImage from "../../assets/images/automation.jpg";
import { CircleCheckBig } from "lucide-react";

const Solutions = () => {
  return (
    <div className="bg-accent py-16 space-y-16">
      <div className="flex justify-center items-center mb-7">
        <Card className="bg-transparent py-0 justify-start">
          <CardContentWrapper className="">
            <CardHeader>
              <CardTitle>Solutions</CardTitle>
              <CardDescription>
                Solutions that work hard so you don’t have to
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                In today’s digital landscape, your data center is the backbone
                of your business operations. At IRON DATA VAULTS, we offer
                end-to-end data center solutions designed to deliver maximum
                uptime, efficiency, and security—empowering your business to
                grow without limitations.
              </p>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="lg:gap-12">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>Infrastructure & Deployment</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our state-of-the-art facilities are built with scalability in
                mind. Whether you need a fully-managed environment or a custom
                colocation solution, we deliver:
              </p>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Modular & Scalable Design for future growth
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  High-Density Rack Solutions to support intensive workloads
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Edge & Hybrid Cloud Integration to reduce latency and increase
                  flexibility
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={ColocationServicesImage}
            alt="About_image"
            className="w-[60rem] mt-6 lg:mt-0"
          />
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="lg:gap-12">
          <CardImage
            img={EnergyImage}
            alt="About_image"
            className="mb-6 lg:mb-0 w-[40rem]"
          />
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>
                Energy Efficiency & Sustainability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We are committed to reducing carbon footprints and operational
                costs through innovative green technologies:
              </p>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Advanced Liquid and Air Cooling Systems
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  AI-Driven Energy Management for optimized power usage
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Integration with renewable energy sources
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="lg:gap-12">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>Security & Compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Data protection is at the core of everything we do. Our
                multi-layered security protocols include:
              </p>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  24/7 Surveillance & Biometric Access Controls
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Firewalls, Intrusion Detection, and DDoS Mitigation
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Compliance with ISO, HIPAA, GDPR, SOC 2, and other standards
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={SecurityImage}
            alt="About_image"
            className="w-[40rem] mt-6 lg:mt-0"
          />
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="lg:gap-12">
          <CardImage
            img={AutomationImage}
            alt="About_image"
            className="mb-6 lg:mb-0 w-[40rem]"
          />
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>Automation & Intelligence</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Leverage cutting-edge AI and automation to boost performance and
                reduce downtime:
              </p>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Predictive Maintenance powered by machine learning
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Automated Load Balancing for seamless uptime
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Data Center Infrastructure Management (DCIM) for real-time
                  monitoring
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>
    </div>
  );
};

export default Solutions;
