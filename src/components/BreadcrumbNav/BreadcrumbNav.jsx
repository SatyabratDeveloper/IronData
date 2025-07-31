import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { House } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbNav = ({ pages }) => {
  const location = useLocation().pathname;

  return (
    <div
      className={`px-5 md:px-30 lg:px-40 pt-10 flex gap-2 ${
        location === "/data-center" || location === "/contact" ? "pb-10" : ""
      }`}
    >
      <Breadcrumb>
        <BreadcrumbList>
          {pages.map(({ href = "", name }, idx) =>
            href ? (
              <div key={idx} className="flex gap-3 items-center">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={href}>
                      {name === "Home" && <House className="size-4.5 mr-1.5" />}
                      {name}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </div>
            ) : (
              <BreadcrumbItem key={idx}>
                <BreadcrumbPage>{name}</BreadcrumbPage>
              </BreadcrumbItem>
            )
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;
