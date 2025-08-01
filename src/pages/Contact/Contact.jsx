import { BreadcrumbNav, Contact as ContactComp, SEO } from "../../components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardContentWrapper,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const pages = [{ name: "Home", href: "/" }, { name: "Contact Us" }];
  return (
    <>
      {/* SEO Tag */}
      <SEO
        title="Contact IRON DATA VAULTS | Secure Data Infrastructure Solutions"
        description="Reach out to IRON DATA VAULTS for data centre partnerships, investor inquiries, or Web3-ready infrastructure solutions. Our team is ready to assist you with secure, scalable, and tailored hosting services."
        keywords="contact iron data vaults, data center india contact, secure storage solutions, investor inquiries, partnership contact, GPU cloud India, Web3 infrastructure support"
        canonical="https://irondatavaults.com/contact"
        ogImage="https://irondatavaults.com/image.png"
      />
      {/* Breadcrumb Nav */}
      <BreadcrumbNav pages={pages} />
      <div className="py-16 bg-accent">
        <div className="flex justify-center items-center mb-7">
          <Card className="bg-transparent py-0 justify-start">
            <CardContentWrapper className="">
              <CardHeader>
                <CardDescription>Get in Touch</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Have questions or need secure, customized data storage
                  solutions? Reach out to IRON DATA VAULTS today. Our team is
                  ready to assist you with trusted, high-performance vault
                  services tailored to your private asset or enterprise needs.
                </p>
                <div>
                  <p className="font-bold">Contact Support</p>
                  <Link
                    to="mailto:info@8mosphere.com"
                    className="hover:text-gray-500 flex items-center gap-1.5"
                  >
                    <Mail className="size-4" />
                    info@irondatavaults.com
                  </Link>
                </div>
              </CardContent>
            </CardContentWrapper>
          </Card>
        </div>
      </div>
      <ContactComp />;
    </>
  );
};

export default Contact;
