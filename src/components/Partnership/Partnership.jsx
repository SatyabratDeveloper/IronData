import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PartnershipImage from "../../assets/images/partnership.png";

const Partnership = () => {
  return (
    <div className="py-16 bg-accent">
      <div className="flex justify-center items-center mb-7">
        <Card className="bg-transparent py-0 justify-start">
          <CardContentWrapper className="">
            <CardHeader>
              <CardDescription>
                Partnership with IRON DATA VAULTS to deliver next-generation
                data security
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Uncover how IRON DATA VAULTS builds the infrastructure
                foundation to support long-term growth and innovation.
              </p>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="hidden lg:inline"
              >
                <Link to="/partnership">Partner With Us</Link>
              </Button>
            </CardContent>
          </CardContentWrapper>
          <CardImage
            img={PartnershipImage}
            alt="About_image"
            className="w-76 lg:w-100 xl:w-68 place-self-center"
          />
          <div className="text-center mt-8 tracking-wide lg:hidden">
            <Button asChild variant="secondary" size="lg">
              <Link to="/partnership">Partner With Us</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Partnership;
