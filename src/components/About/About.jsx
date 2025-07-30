import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
  CardContentWrapper,
} from "@/components/ui/card";
import AboutImage from "../../assets/images/about.png";

const About = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <Card className="items-center">
        <CardContentWrapper className="">
          <CardHeader>
            <CardTitle>ABOUT</CardTitle>
            <CardDescription>IRON DATA VAULTS</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <span className="font-bold">IRON DATA VAULTS</span> is a premier
              data center provider delivering secure, reliable, and scalable
              infrastructure solutions for businesses and individuals.
            </p>
            <p className="italic text-gray-700 font-medium">
              Your Colocation Partner in Digital Resilience — where fortified
              infrastructure meets strategic investment, sovereignty, and secure
              growth.
            </p>
            <p>
              Our mission is to protect and power digital assets through
              cutting-edge facilities featuring advanced security, redundant
              power, and high-speed connectivity.
            </p>
            <p>
              We offer colocation, managed/unmanaged servers, and cloud
              integration tailored to meet the demands of startups, enterprises,
              and tech professionals. With a focus on innovation and client
              satisfaction, IRON DATA VAULTS is your trusted partner for
              critical data and hardware solutions.
            </p>
          </CardContent>
        </CardContentWrapper>
        <CardImage
          img={AboutImage}
          alt="About_image"
          className="lg:w-[70rem] xl:w-[100rem] mt-6 lg:mt-0"
        />
      </Card>
    </div>
  );
};

export default About;
