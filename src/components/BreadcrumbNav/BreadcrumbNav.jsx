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
      {pages.map(({ href = "", name }) => (
        <Breadcrumb key={name}>
          <BreadcrumbList>
            {href ? (
              <>
                <Link to={href}>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="">
                      {name === "Home" ? (
                        <House className="size-4.5 mr-1.5" />
                      ) : null}
                      {name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Link>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage className="">{name}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      ))}
    </div>
  );
};

export default BreadcrumbNav;
