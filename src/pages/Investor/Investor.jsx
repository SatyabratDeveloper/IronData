import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ROIImage from "../../assets/images/investors/investors.jpg";
import JVImage from "../../assets/images/investors/right-racks.jpg";
import ConversionImage from "../../assets/images/investors/left-rack.jpg";
import VaultImage from "../../assets/images/investors/connect.jpg";
import CloudImage from "../../assets/images/investors/cloud.jpg";
import ESGImage from "../../assets/images/about.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import { BreadcrumbNav } from "../../components";

const Investor = () => {
  const pages = [{ name: "Home", href: "/" }, { name: "For Investors" }];

  return (
    <>
      <BreadcrumbNav pages={pages} />

      {/* Header */}
      <div className="py-16 mt-10 bg-card">
        <div className="flex justify-center items-center">
          <Card className="py-0 justify-start">
            <CardContentWrapper className="">
              <CardHeader className="">
                <CardDescription className="">
                  Investment Opportunities with IRON DATA VAULTS
                </CardDescription>
                <CardTitle className="">
                  Partner with a fortress-grade data infrastructure provider
                  powering India's digital future.
                </CardTitle>
              </CardHeader>
            </CardContentWrapper>
          </Card>
        </div>
      </div>

      {/* Intro */}
      <div className="flex justify-center items-center py-10">
        <Card className="items-center">
          <CardContentWrapper className="">
            <CardHeader className="border-0 m-0 p-0 mb-6 text-center">
              <CardDescription className="text-gray-900">
                Welcome, Investors
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Explore strategic opportunities in India’s growing data
                infrastructure market. Our facilities offer{" "}
                <span className="font-bold">
                  99.999% uptime, tier-certified power systems,
                </span>{" "}
                military-grade security and{" "}
                <span className="font-bold">
                  regulatory-compliant colocation vaults.
                </span>
              </p>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      {/* Investment Models */}
      {/* 1. ROI */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardImage
            img={ROIImage}
            alt="About_image"
            className="mb-6 lg:mb-0 w-[40rem]"
          />
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>Invest in Our Data Centres</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Join a capital-efficient model with attractive returns,
                predictable cash flows, and asset-backed equity. Gain access to
                long-term contracts with high-value enterprises.
              </p>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Projected IRR: 12–18%
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Long-term lease tenants & SLAs
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Quarterly cash yield options
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      {/* 2. Joint Venture */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>
                Establish New Data Centres (JV Model)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We partner with landowners and capital providers to co-develop
                data centres. Benefit from our technical expertise, regulatory
                assistance, and operational management.
              </p>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Ideal for Gurugram / Tier-1 & Tier-2 cities
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Full lifecycle support: Design → Deployment → Operations
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Flexible partnership terms
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={JVImage}
            alt="About_image"
            className="w-[40rem] mt-6 lg:mt-0"
          />
        </Card>
      </div>

      {/* 3. Real Estate Conversions */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardImage
            img={ConversionImage}
            alt="About_image"
            className="mb-6 lg:mb-0 w-[40rem]"
          />
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>
                Repurpose Real Estate into Data Centres
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Convert underutilized buildings into secure, revenue-generating
                data assets. We assess structural viability, power readiness,
                and compliance needs.
              </p>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Minimum floor load: 150 lb/sqft
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Dedicated power & backup supply
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Connectivity & zoning advisory
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      {/* 4. Vault Ownership */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>
                Invest in Vault Ownership & Colocation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Purchase rack-space and secure cabinets with monthly rental
                yield or resale potential. Our SCADA-based infrastructure
                ensures maximum uptime, transparency, and control.
              </p>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Revenue-sharing options
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Managed & unmanaged hosting
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Cyber-physical protection
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={VaultImage}
            alt="About_image"
            className="mt-6 lg:mt-0 w-[40rem]"
          />
        </Card>
      </div>

      {/* 5. Cloud Ventures */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardImage
            img={CloudImage}
            alt="About_image"
            className="mb-6 lg:mb-0 w-[40rem]"
          />
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>Cloud Venture Collaborators</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Join forces with IRON DATA VAULTS to offer bundled
                infrastructure + cloud services to startups, fintechs, and AI/ML
                workloads.
              </p>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Multi-region deployment
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Support for Kubernetes & hybrid stacks
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Go-to-market and technical co-branding
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      {/* 6. ESG Investors */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>
                ESG & Sustainable Infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our green investments include solar power integration, efficient
                cooling, and ESG reporting. Partner with us to align
                infrastructure investments with environmental goals.
              </p>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Certified PUE tracking
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Energy-efficient modular design
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Scope 1/2 carbon accounting
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={ESGImage}
            alt="About_image"
            className="mt-6 lg:mt-0 w-[40rem]"
          />
        </Card>
      </div>

      {/* CTA */}
      <div className="flex justify-center items-center py-10">
        <Card className="items-center">
          <CardContentWrapper className="">
            <CardHeader className="border-0 m-0 p-0 mb-6 text-center">
              <CardDescription className="text-gray-900">
                Join Our Growing Family of Strategic Partners
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Get the full investor prospectus and explore how IRON DATA
                VAULTS can maximize your infrastructure ROI.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button asChild variant="ghost" size="lg">
                  <Link to="/contact">Download Investor Pack</Link>
                </Button>
                <Button asChild variant="default" size="lg">
                  <Link to="/contact">Speak to Our Investment Team</Link>
                </Button>
              </div>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>
    </>
  );
};

export default Investor;
