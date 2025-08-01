import { managedServices } from "../../constants";
import { BreadcrumbNav, FeatureCard, WhyChooseUs, SEO } from "../../components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";

const ManagedServices = () => {
  const pages = [{ name: "Home", href: "/" }, { name: "Managed Services" }];

  return (
    <>
      {/* SEO Tag */}
      <SEO
        title="Managed IT Services in India | IRON DATA VAULTS"
        description="IRON DATA VAULTS offers comprehensive managed services including 24/7 IT support, network management, cloud integration, and disaster recovery—helping businesses scale securely and efficiently."
        keywords="managed IT services India, colocation support, cloud integration, remote hands, backup and recovery, IT infrastructure management, network monitoring, patch management, Iron Data Vaults"
        canonical="https://irondatavaults.com/managed-services"
        ogImage="https://irondatavaults.com/image.png"
      />

      {/* Breadcrumb Nav */}
      <BreadcrumbNav pages={pages} />
      
      <div className="flex justify-center items-center pt-8">
        <Card className="items-center">
          <CardContentWrapper className="">
            <CardHeader className="border-0 m-0 p-0 mb-6 text-center">
              <CardDescription className="text-gray-900">
                Accelerate Growth with Expertly Managed IT Infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                At <span className="font-bold">IRON DATA VAULTS</span>, we go
                beyond traditional data center hosting by delivering end-to-end{" "}
                <span className="font-bold">Managed Services</span> that empower
                your business to scale faster, operate more securely, and stay
                focused on core objectives. Our expert teams handle the
                complexity of managing your IT infrastructure so you don’t have
                to.
              </p>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>
      <div className="py-16">
        <div className="flex justify-center items-center mb-7">
          <Card className="bg-transparent py-0 justify-start">
            <CardContentWrapper className="lg:whitespace-nowrap">
              <CardHeader>
                <CardDescription>Our Managed Services Include</CardDescription>
              </CardHeader>
            </CardContentWrapper>
          </Card>
        </div>
        <div className="flex justify-center">
          <div className="w-11/12 sm:w-5/6 lg:w-4/5 flex flex-wrap justify-center gap-7">
            {managedServices.map(({ id, image, title, description }) => (
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
      <WhyChooseUs />
    </>
  );
};

export default ManagedServices;
