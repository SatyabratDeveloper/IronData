import {
  Card,
  CardContentWrapper,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { ContactFormFields } from "../../constants";

const Contact = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceCategory: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Handle API request or logic
  };

  return (
    <div className="py-16">
      <div className="flex justify-center items-center">
        <Card className="bg-transparent py-0 justify-start">
          <CardContentWrapper>
            <CardHeader>
              <CardDescription className="lg:text-nowrap">
                Secure Your Connection — Contact Us Today
              </CardDescription>
            </CardHeader>
          </CardContentWrapper>
        </Card>
      </div>

      <div className="sm:max-w-lg md:max-w-2xl mx-auto mt-7 px-6 sm:px-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {ContactFormFields.map((field) => {
              return (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name}
                  rules={field.rules}
                  render={({ field: formField }) => (
                    <FormItem>
                      <FormLabel className="mb-0.5 flex items-center gap-2">
                        {field.icon && (
                          <field.icon className="size-4 text-primary" />
                        )}
                        <span>
                          {field.label}
                          {field.required && (
                            <span className="text-red-500 ml-1">*</span>
                          )}
                        </span>
                      </FormLabel>

                      <FormControl>
                        {field.type === "select" ? (
                          <Select
                            onValueChange={formField.onChange}
                            value={formField.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={field.placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {field.options?.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : field.type === "textarea" ? (
                          <Textarea
                            placeholder={field.placeholder}
                            {...formField}
                            rows={field.rows || 3}
                          />
                        ) : (
                          <Input
                            type={field.type}
                            placeholder={field.placeholder}
                            {...formField}
                          />
                        )}
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            })}

            <Button type="submit" variant="default" size="lg">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
