import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BreadcrumbNav } from "../../components";
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
import Model from "../../assets/images/partnership/model.jpg";
import Network from "../../assets/images/partnership/network.jpg";
import Offer from "../../assets/images/partnership/offer.jpg";
import PartnerHands from "../../assets/images/partnership/partnership.jpg";
import Racks from "../../assets/images/partnership/racks.jpg";

const Partnership = () => {
  const pages = [{ name: "Home", href: "/" }, { name: "Partnership" }];
  return (
    <>
      <BreadcrumbNav pages={pages} />

      {/* Hero Section */}
      <div className="flex justify-center items-center pt-8">
        <Card className="items-center">
          <CardContentWrapper className="">
            <CardHeader className="border-0 m-0 p-0 mb-6 text-center">
              <CardDescription className="text-gray-900">
                Partner With Us, Build the Iron Network
              </CardDescription>
              <CardTitle className="mt-5 mb-2">
                Connect . Collaborate . Compute
              </CardTitle>
              <CardTitle>
                India’s first federated network of data centres, powered by IRON
                DATA VAULTS
              </CardTitle>
            </CardHeader>

            {/* Intro */}
            <CardContent className="text-center">
              <div>
                <p>
                  The future of India’s digital infrastructure is decentralized,
                  secure, and interconnected. IRON DATA VAULTS invites existing
                  data centre operators, real estate developers, and
                  infrastructure owners to become part of the IRON NETWORK — a
                  nationwide ecosystem of GPU-ready, AI-first, Web3-compliant
                  facilities.
                </p>
                <p className="mt-4">
                  Together, we create discoverable, bookable, scalable capacity
                  — from Tier-II cities to hyperscale hubs.
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      {/* Who Should Partner */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>Who Should Partner?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="mb-3">We’re inviting:</p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Existing data centres (10+ racks, Tier II+ preferred)
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Server farm operators with idle or underutilized capacity
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Real estate owners ready to repurpose buildings into secure
                  vaults
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Edge computing infrastructure partners
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Industrial parks deploying modular/containerized pods
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Startup data centres seeking enterprise reach
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={PartnerHands}
            alt="About_image"
            className="mt-6 lg:mt-0 w-[40rem]"
          />
        </Card>
      </div>

      {/* What We Offer */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardImage
            img={Offer}
            alt="About_image"
            className="mb-6 lg:mb-0 w-[40rem]"
          />
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>What We Offer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <p className="flex gap-1 flex-col">
                  <span className="font-bold text-nowrap">
                    Platform Listing:
                  </span>
                  Discoverable on Iron Marketplace — the Booking.com of data
                  centres.
                </p>
                <p className="flex gap-1 flex-col">
                  <span className="font-bold text-nowrap">
                    SLA & Operations Framework:
                  </span>
                  Align with Iron’s uptime and security standards.
                </p>
                <p className="flex gap-1 flex-col">
                  <span className="font-bold text-nowrap">
                    Client Acquisition:
                  </span>
                  We bring clients, you deliver infrastructure, revenue is
                  shared.
                </p>
                <p className="flex gap-1 flex-col">
                  <span className="font-bold text-nowrap">
                    Interconnection Support:
                  </span>
                  Access Iron routing nodes and federated mesh.
                </p>
                <p className="flex gap-1 flex-col">
                  <span className="font-bold text-nowrap">
                    White-Label Hosting:
                  </span>
                  Host Iron-branded services (GPU Cloud, Drive, DevCloud).
                </p>
                <p className="flex gap-1 flex-col">
                  <span className="font-bold text-nowrap">
                    Data Centre Advisory:
                  </span>
                  Support for converting/optimizing your property.
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      {/* Partner Models */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>Partner Models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <p className="flex gap-1 flex-col">
                  <span className="font-bold">Listing Only:</span>
                  You manage infra. We list your vault and take referral fees.
                </p>
                <p className="flex gap-1 flex-col">
                  <span className="font-bold">Managed by Iron:</span>
                  We operate your infra and bring business under Iron branding.
                </p>
                <p className="flex gap-1 flex-col">
                  <span className="font-bold">Build with Iron:</span>
                  We co-invest, co-brand, and help you scale together.
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={Model}
            alt="About_image"
            className="mt-6 lg:mt-0 w-[40rem]"
          />
        </Card>
      </div>

      {/* Benefits Summary */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardImage
            img={Racks}
            alt="About_image"
            className="mb-6 lg:mb-0 w-[40rem]"
          />
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>Partner Benefits Summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  No upfront tech investment for basic listings
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Branding + trust via Iron’s ecosystem
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  National reach & institutional demand
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Access to GPU, AI, Web3 workload demand
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Co-branding & white-label opportunities
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Future integration with blockchain usage logs
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      {/* Join Process */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>How to Join the Network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="flex gap-3 items-center">
                  <span className="font-semibold">1.</span>
                  Submit Your Interest →
                  <Button asChild variant="link" size="sm">
                    <Link to="/contact" className="">
                      Form Link
                    </Link>
                  </Button>
                </p>
                <p className="flex gap-3 items-center">
                  <span className="font-semibold">2.</span>
                  Iron Team Evaluation
                </p>
                <p className="flex gap-3 items-center">
                  <span className="font-semibold">3.</span>
                  NDA + MoU Signing
                </p>
                <p className="flex gap-3 items-center">
                  <span className="font-semibold">4.</span>
                  Facility Audit (Virtual or On-Site)
                </p>
                <p className="flex gap-3 items-center">
                  <span className="font-semibold">5.</span>
                  Go Live on Iron Network
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={Network}
            alt="About_image"
            className="mt-6 lg:mt-0 w-[40rem]"
          />
        </Card>
      </div>

      {/* Final CTA */}
      <div className="flex justify-center items-center pt-8 pb-16">
        <Card className="items-center">
          <CardContentWrapper className="">
            <CardHeader className="border-0 m-0 p-0 mb-6 text-center">
              <CardDescription className="text-gray-900">
                Become a Node in India’s Most Ambitious Data Grid
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p>Fill out the form below or contact our partnerships team</p>
            </CardContent>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild variant="default" size="lg">
                <Link to="/contact">Join the Iron Network</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="mailto:partnerships@irondatavaults.com">
                  partnerships@irondatavaults.com
                </Link>
              </Button>
            </div>
          </CardContentWrapper>
        </Card>
      </div>
    </>
  );
};

export default Partnership;
