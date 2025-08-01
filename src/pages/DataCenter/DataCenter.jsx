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
import {
  dataCenterFeatures,
  deliveryModel,
  fullStackDataCenterServer,
} from "../../constants";
import { BreadcrumbNav, FeatureCard, SEO } from "../../components";
import WhyChooseUsImage from "../../assets/images/choose.jpg";

const DataCenter = () => {
  const pages = [{ name: "Home", href: "/" }, { name: "Data Center" }];

  return (
    <>
      {/* SEO Tag */}
      <SEO
        title="GPU-Ready AI Data Center | IRON DATA VAULTS"
        description="IRON DATA VAULTS offers next-gen data centers built for AI, LLMs, and HPC — with GPU-ready racks, liquid cooling, and high-density compute infrastructure."
        keywords="AI data center, GPU servers, LLM hosting, high performance compute, immersion cooling, India AI cloud"
        canonical="https://irondatavaults.com/data-center"
        ogImage="https://irondatavaults.com/image.png"
      />

      {/* Breadcrumb Nav */}
      <BreadcrumbNav pages={pages} />

      <div className="bg-card py-16">
        <div className="flex justify-center items-center">
          <Card className="py-0 justify-start">
            <CardContentWrapper className="">
              <CardHeader className="">
                <CardDescription className="">
                  GPU SERVER READY VAULTS
                </CardDescription>
                <CardTitle className="">
                  Next Gen Compute Infrastructure | Ready to Plug AI Vaults |
                  Custom Liquid Cooling Options
                </CardTitle>
              </CardHeader>
            </CardContentWrapper>
          </Card>
        </div>
      </div>
      <div className="py-16">
        <div className="flex justify-center items-center mb-7">
          <Card className="bg-transparent py-0 justify-start">
            <CardContentWrapper>
              <CardHeader>
                <CardDescription>
                  Purpose Built for AI, High Performance & Scale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  At IRON DATA VAULTS, we are building the next generation of
                  physical infrastructure to meet the world’s insatiable demand
                  for AI compute. Our GPU-ready vaults are designed from the
                  ground up to host intensive workloads, from LLM training to
                  high-frequency inference, offering:
                </p>
                <div className="space-y-2">
                  <p className="flex gap-3 items-center">
                    <span>
                      <CircleCheckBig className="size-5 text-primary" />
                    </span>
                    Ready to Plug deployment for GPU servers
                  </p>
                  <p className="flex gap-3 items-center">
                    <span>
                      <CircleCheckBig className="size-5 text-primary" />
                    </span>
                    Custom Rack Configurations (2U, 4U, 8U, or OCP)
                  </p>
                  <p className="flex gap-3 items-center">
                    <span>
                      <CircleCheckBig className="size-5 text-primary" />
                    </span>
                    High Power Density Support: Up to 50kW per rack
                  </p>
                  <p className="flex gap-3">
                    <span>
                      <CircleCheckBig className="size-5 text-primary mt-0.5" />
                    </span>
                    AI Optimized Networking: 100G/200G fabric-ready
                  </p>
                  <p className="flex gap-3">
                    <span>
                      <CircleCheckBig className="size-5 text-primary mt-0.5" />
                    </span>
                    Liquid & Immersion Cooling Compatible
                  </p>
                </div>
              </CardContent>
            </CardContentWrapper>
          </Card>
        </div>
      </div>
      <div className="py-16 bg-accent">
        <div className="flex justify-center items-center mb-7">
          <Card className="bg-transparent py-0 justify-start">
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription>Features at a glance</CardDescription>
              </CardHeader>
            </CardContentWrapper>
          </Card>
        </div>

        <div className="flex justify-center">
          <div className="w-11/12 sm:w-5/6 lg:w-4/5 flex flex-wrap justify-center gap-7">
            {dataCenterFeatures.map(({ id, image, title, description }) => (
              <FeatureCard
                key={id}
                image={image}
                title={title}
                description={description}
                className="text-left"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="flex justify-center items-center mb-7">
          <Card className="bg-transparent py-0 justify-start">
            <CardContentWrapper>
              <CardHeader>
                <CardDescription>The delivery model</CardDescription>
                <CardTitle>Your data, your control</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  IRON DATA VAULTS introduces a hybrid ownership and hosting
                  model for compute infrastructure:
                </p>
              </CardContent>
            </CardContentWrapper>
          </Card>
        </div>

        <div className="pb-16 flex justify-center">
          <div className="w-11/12 sm:w-5/6 lg:w-4/5 flex flex-wrap justify-center gap-7">
            {deliveryModel.map(({ id, image, title, description }) => (
              <FeatureCard
                key={id}
                image={image}
                title={title}
                description={description}
                className="text-left list-none"
              />
            ))}
          </div>
        </div>

        <div className="py-16 bg-accent flex justify-center">
          <Card className="lg:gap-12">
            <CardImage
              img={WhyChooseUsImage}
              alt="About_image"
              className="mb-6 lg:mb-0 w-[30rem]"
            />
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription>Why choose IRON DATA VAULTS?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="flex gap-3 items-center">
                    <span>
                      <CircleCheckBig className="size-5 text-primary" />
                    </span>
                    Speed: Deploy compute clusters in days, not months
                  </p>
                  <p className="flex gap-3 items-center">
                    <span>
                      <CircleCheckBig className="size-5 text-primary" />
                    </span>
                    Control: Physically and digitally isolate your data
                  </p>
                  <p className="flex gap-3">
                    <span>
                      <CircleCheckBig className="size-5 text-primary mt-0.5" />
                    </span>
                    Scalability: Move from 10 racks to 1,000+ with zero tech
                    debt
                  </p>
                  <p className="flex gap-3">
                    <span>
                      <CircleCheckBig className="size-5 text-primary mt-0.5" />
                    </span>
                    Future-ready: Built for GPUs, quantum-ready designs in
                    development
                  </p>
                  <p className="flex gap-3">
                    <span>
                      <CircleCheckBig className="size-5 text-primary mt-0.5" />
                    </span>
                    Powered by India’s most ambitious sovereign AI cloud
                  </p>
                </div>
              </CardContent>
            </CardContentWrapper>
          </Card>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center mb-7">
          <Card className="bg-transparent py-0 justify-start">
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription>
                  Full-stack Data Center Services
                </CardDescription>
                <CardTitle>
                  Customized range of data center services that suit your needs
                </CardTitle>
              </CardHeader>
            </CardContentWrapper>
          </Card>
        </div>
        <div className="flex justify-center items-center mb-7 gap-4 flex-wrap">
          {fullStackDataCenterServer.map((item) => (
            <div
              key={item.id}
              className="w-88 h-[35rem] relative bg-cover bg-center rounded-lg shadow-md hover:scale-105 transform duration-300"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-7 py-16 rounded-b-lg">
                <p className="font-semibold text-xl mb-5">{item.title}</p>
                <p className="text-sm">{item.description}</p>
              </div>
              <div className="h-full w-full bg-black/70" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DataCenter;
