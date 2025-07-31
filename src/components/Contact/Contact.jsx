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
    <div className="py-16 flex justify-center w-full">
      <div className="w-full max-w-2xl mx-5 md:mx-0 p-5 sm:p-12 border border-gray-100 rounded-2xl shadow-2xl">
        <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold text-center pb-10">
          <p className="mb-1">Secure Your Connection</p>
          <p>Contact Us Today</p>
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {ContactFormFields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                rules={field.rules}
                render={({ field: formField }) => (
                  <FormItem
                    className={field.type === "textarea" ? "sm:col-span-2" : ""}
                  >
                    <FormLabel>
                      {field.label}
                      {field.required && (
                        <span className="text-red-400">*</span>
                      )}
                    </FormLabel>

                    <FormControl>
                      {field.type === "select" ? (
                        <Select
                          onValueChange={formField.onChange}
                          value={formField.value || ""}
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
                          rows={field.rows || 4}
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
            ))}

            <div className="sm:col-span-2">
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
