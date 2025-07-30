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
import ColocationServicesImage from "../../assets/images/colocation-services.jpg";

const ColocationServices = () => {
  return (
    <div className="bg-accent py-16">
      <div className="flex justify-center items-center mb-7">
        <Card className="bg-transparent py-0 justify-start">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>
                Enterprise-Grade Colocation Services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Purpose-built services supporting operational continuity in a
                secure, sustainable, and high-availability environment.
              </p>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="lg:gap-12">
          <CardImage
            img={ColocationServicesImage}
            alt="About_image"
            className="mb-6 lg:mb-0 lg:w-[70rem] xl:w-[70rem]"
          />
          <div className="space-y-10">
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription>Vaults and Cabinets</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Access a share of our resilient, secure, and ready-to-deploy
                  white space. Share your requirements, and we’ll provide a
                  custom-fit vault or cabinet solution.
                </p>
              </CardContent>
            </CardContentWrapper>
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription>Private Vaults</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Empower your operations with a fully isolated space with
                  enterprise-grade electrical, mechanical, and security
                  provisions tailored to your needs.
                </p>
              </CardContent>
            </CardContentWrapper>
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription>Dedicated server floor space</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Turn your digital vision into reality with a dedicated,
                  move-in-ready building engineered with redundancy,
                  sustainability, and customizable infrastructure at its core.
                </p>
              </CardContent>
            </CardContentWrapper>
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription>Dedicated server Vaults</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Scalable multi-tower data center parks designed, built, and
                  operated by certified experts to align precisely with your
                  unique business requirements.
                </p>
              </CardContent>
            </CardContentWrapper>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ColocationServices;
