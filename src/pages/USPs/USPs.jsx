import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import { FeatureCard, BreadcrumbNav, SEO } from "../../components";
import { Usps, additionalUSPs } from "../../constants";

const USPs = () => {
  const pages = [{ name: "Home", href: "/" }, { name: "USPs" }];

  return (
    <>
      {/* SEO Tag */}
      <SEO
        title="USPs of IRON DATA VAULTS | Own Your Data Center, Own Your Data"
        description="Explore the unmatched USPs of IRON DATA VAULTS – from sovereign data ownership and GPU-ready infrastructure to dual-site redundancy and full hardware transparency. Empower your digital infrastructure with enterprise-grade, future-ready colocation."
        keywords="data center USPs, sovereign hosting India, Iron Data Vaults features, dedicated server hosting, colocation India, secure data center, GPU colocation, hybrid hosting, bare-metal servers, dual-site data center"
        canonical="https://irondatavaults.com/usps"
        ogImage="https://irondatavaults.com/image.png"
      />

      {/* Breadcrumb Nav */}
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
