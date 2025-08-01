import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import VaultImage from "../../assets/images/web3/infra.jpg";
import TokenImage from "../../assets/images/web3/token.jpg";
import FacilityImage from "../../assets/images/web3/development.jpg";
import NetworkImage from "../../assets/images/web3/network.png";
import { CircleCheckBig } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import { BreadcrumbNav, SEO } from "../../components";

const Web3Infrastructure = () => {
  const pages = [{ name: "Home", href: "/" }, { name: "Web 3 is Coming" }];

  return (
    <>
      {/* SEO Tag */}
      <SEO
        title="Web3 is Coming | Tokenized AI Data Centers by IRON DATA VAULTS"
        description="IRON DATA VAULTS is building India’s first token-ready, AI-powered data center. Stake, earn, and govern real infrastructure through the $IRON token. Decentralized ownership meets enterprise-grade performance."
        keywords="Web3 data center, tokenized infrastructure, AI data center India, decentralized data center, Iron token, Web3 colocation, GPU hosting token, $IRON token, Dehradun data center, DAO-based infrastructure"
        canonical="https://irondatavaults.com/web3"
        ogImage="https://irondatavaults.com/image.png"
      />

      {/* Breadcrumb Nav */}
      <BreadcrumbNav pages={pages} />

      <div className="flex justify-center items-center pt-8">
        <Card className="items-center">
          <CardContentWrapper className="">
            <CardHeader className="border-0 m-0 p-0 mb-6 text-center">
              <CardDescription className="text-gray-900">
                Not Just a Data Center. A Decentralized Powerhouse.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Introducing the first{" "}
                <span className="font-bold">token-ready AI infrastructure</span>{" "}
                platform where{" "}
                <span className="font-bold">
                  ownership, revenue, and governance are shared,
                </span>{" "}
                not centralized.
              </p>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      {/* SECTION 1 */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardImage
            img={VaultImage}
            alt="About_image"
            className="mb-6 lg:mb-0 w-[40rem]"
          />
          <CardContentWrapper className="">
            <CardHeader>
              <CardTitle>WHAT WE’RE BUILDING</CardTitle>
              <CardDescription>
                A New Class of Infrastructure, Built to be Shared
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="font-bold">IRON DATA VAULTS</span> is
                developing{" "}
                <span className="font-bold">
                  India’s first large-scale AI data center
                </span>{" "}
                designed for tokenized ownership. Our Dehradun facility will be
                the first of its kind, where server vaults are fractionalized,
                investment is on-chain, and stakeholders can earn recurring
                income from real infrastructure demand.
              </p>
              <p className="italic text-gray-700">
                This isn’t a crypto experiment. This is a ground-up rebuild of
                how data centers are owned, operated, and monetized.
              </p>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      {/* SECTION 2 */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardContentWrapper className="">
            <CardHeader>
              <CardTitle>THE WEB3 CONCEPT</CardTitle>
              <CardDescription>
                The Future of Infrastructure is Tokenized
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="mb-3">We believe infrastructure should be:</p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Ownable by more than just billion-dollar funds
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Profitable for those who build and support it
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Governed by the network, not hidden boardrooms
                </p>
              </div>
              <div className="space-y-2">
                <p className="mb-3">
                  Through our <span className="font-semibold">$IRON token</span>
                  , partners and early supporters will gain:
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  A share in real-world rental income
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Priority access to cloud and GPU services
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Governance rights over new vaults and expansions
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Long-term upside as demand for AI infrastructure explodes
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={TokenImage}
            alt="About_image"
            className="mt-6 lg:mt-0 w-[40rem]"
          />
        </Card>
      </div>

      {/* SECTION 3 */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardImage
            img={FacilityImage}
            alt="About_image"
            className="mb-6 lg:mb-0 w-[40rem]"
          />
          <CardContentWrapper className="">
            <CardHeader>
              <CardTitle>OUR PHASE ONE LAUNCH</CardTitle>
              <CardDescription>
                Dehradun Vault: Phase One Deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="mb-3">
                  The journey begins with our flagship facility in Dehradun:
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  85,000 sq. ft of high-density AI-ready space
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  Full ownership, government-approved expansion
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Promoter equity + bank capital already activated
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Designed to host up to 1,500 racks across multiple floors
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  Tokenization of vault ownership begins soon
                </p>
              </div>
              <p>
                This will be the first real asset to be shared, staked, and
                scaled via Web3.
              </p>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      <div className="flex justify-center items-center pt-16">
        <Card className="items-center">
          <CardContentWrapper className="">
            <CardHeader className="border-0 m-0 p-0 mb-6 text-center">
              <CardTitle>WHY JOIN THE IRON ECOSYSTEM?</CardTitle>
              <CardDescription className="text-gray-900">
                Stakeholders, Not Just Spectators
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center flex flex-wrap gap-5 justify-center">
              <div className="w-68 h-48 bg-accent hover:bg-accent/70 rounded-lg p-7 flex flex-col justify-center shadow-lg hover:shadow-2xl">
                <p className="text-xl font-bold">🧑‍💼 Investor</p>
                <p className="mt-2">
                  Early access to a revenue-yielding, token-backed asset class
                </p>
              </div>
              <div className="w-68 h-48 bg-accent hover:bg-accent/70 rounded-lg p-7 flex flex-col justify-center shadow-lg hover:shadow-2xl">
                <p className="text-xl font-bold">🏢 Client</p>
                <p className="mt-2">
                  Redeem tokens for cloud, GPU, and storage services
                </p>
              </div>
              <div className="w-68 h-48 bg-accent hover:bg-accent/70 rounded-lg p-7 flex flex-col justify-center shadow-lg hover:shadow-2xl">
                <p className="text-xl font-bold">🤝 Partner</p>
                <p className="mt-2">
                  Share revenue, bring clients, and stake vaults
                </p>
              </div>
              <div className="w-68 h-48 bg-accent hover:bg-accent/70 rounded-lg p-7 flex flex-col justify-center shadow-lg hover:shadow-2xl">
                <p className="text-xl font-bold">🧠 Innovator</p>
                <p className="mt-2">
                  Collaborate in building a DAO for decentralized infra
                </p>
              </div>
            </CardContent>
          </CardContentWrapper>
        </Card>
      </div>

      {/* SECTION 5 */}
      <div className="py-8 flex justify-center">
        <Card className="lg:gap-12">
          <CardContentWrapper className="">
            <CardHeader>
              <CardTitle>THE BIGGER VISION</CardTitle>
              <CardDescription>
                From One Vault to a Nationwide DAO Network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="mb-3">Once Dehradun is live and earning:</p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  We expand to other cities
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <CircleCheckBig className="size-5 text-primary" />
                  </span>
                  We invite other data centers to plug in
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  We create a national infrastructure DAO
                </p>
                <p className="flex gap-3">
                  <span>
                    <CircleCheckBig className="size-5 text-primary mt-0.5" />
                  </span>
                  We let the $IRON community decide the future of digital power
                </p>
              </div>
              <p>
                This is the birth of decentralized infrastructure finance.{" "}
                <span className="font-semibold">
                  Be early. Be on-chain. Be Iron.
                </span>
              </p>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={NetworkImage}
            alt="About_image"
            className="mt-6 lg:mt-0 w-[40rem]"
          />
        </Card>
      </div>

      {/* Final CTA */}
      <div className="py-16 mt-10 bg-card">
        <div className="flex justify-center items-center">
          <Card className="py-0 justify-start">
            <CardContentWrapper className="">
              <CardDescription className="text-gray-900 text-center mb-2">
                This Isn’t a Pitch. It’s Already Being Built.
              </CardDescription>
              <CardTitle className="text-gray-700 text-center">
                The foundation is laid. The team is in place. The vault is
                rising. All that’s missing now, is you.
              </CardTitle>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button asChild variant="default" size="lg">
                  <Link to="/contact">Join the $IRON Waitlist</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">Apply as a Partner</Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link to="/contact">Get Investor Access Brief</Link>
                </Button>
              </div>
            </CardContentWrapper>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Web3Infrastructure;
