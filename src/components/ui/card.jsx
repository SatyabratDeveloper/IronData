import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground lg:flex gap-6 justify-center w-full sm:w-5/6 lg:w-4/5 rounded-lg py-12 px-5 sm:px-8 mx-3 sm:mx-0",
        className
      )}
      {...props}
    />
  );
}

function CardContentWrapper({ className, ...props }) {
  return (
    <div
      data-slot="card-content-wrapper"
      className={`w-full ${className}`}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header text-base px-4 mb-5 border-l-6 border-gray-800",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn("flex-wrap text-base sm:text-lg font-medium", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-primary text-2xl sm:text-3xl font-bold", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("space-y-8 leading-7 text-base", className)}
      {...props}
    />
  );
}

function CardImage({ className, img, alt, ...props }) {
  return (
    <div className="" {...props}>
      <img src={img} alt={alt} className={`rounded-xl ${className}`} />
    </div>
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardImage,
  CardContentWrapper,
};
