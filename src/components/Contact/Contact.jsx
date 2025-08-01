import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ContactFormFields } from "../../constants";
import { Loader2 } from "lucide-react";

const initialSelectValues = {
  inquiryType: "",
};

const Contact = () => {
  const formRef = useRef(null);
  const formspreeID = import.meta.env.VITE_FORMSPREE_ID;
  const [state, handleSubmit] = useForm(formspreeID);

  const [statusMessage, setStatusMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectValues, setSelectValues] = useState(initialSelectValues);

  const validateSelects = () => {
    let isValid = true;
    for (const field of ContactFormFields) {
      if (
        field.type === "select" &&
        field.required &&
        !selectValues[field.name]
      ) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  useEffect(() => {
    if (!hasSubmitted || state.submitting) return;

    if (state.succeeded) {
      setIsError(false);
      setStatusMessage("Thanks for contacting us! We'll get back to you soon.");
      formRef.current?.reset();
      setSelectValues(initialSelectValues);
      setHasSubmitted(false);
    } else if (state.errors) {
      setIsError(true);
      setStatusMessage("Something went wrong. Please try again.");
    }
  }, [state, hasSubmitted]);

  const onSubmit = (e) => {
    e.preventDefault();
    const isSelectValid = validateSelects();

    if (!isSelectValid) {
      setHasSubmitted(true);
      return;
    }

    setHasSubmitted(true);
    handleSubmit(e);
  };

  return (
    <div className="py-16 flex justify-center w-full">
      <div className="w-full max-w-2xl mx-5 md:mx-0 p-5 sm:p-12 border border-gray-100 rounded-2xl shadow-2xl">
        <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold text-center pb-10">
          <p className="mb-1">Secure Your Connection</p>
          <p>Contact Us Today</p>
        </h1>

        {statusMessage && (
          <div
            className={`mb-6 px-6 py-3 text-center text-white text-lg font-medium rounded-lg ${
              isError
                ? "bg-red-400 bg-border-red-700"
                : "bg-green-400 shadow-lg"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {ContactFormFields.map((field) => (
            <div
              key={field.name}
              className={
                field.type === "textarea" || field.type === "select"
                  ? "sm:col-span-2"
                  : ""
              }
            >
              <label
                htmlFor={field.name}
                className="block mb-1.5 font-medium text-sm text-gray-700"
              >
                {field.label}
                {field.required && <span className="text-red-400 ml-1">*</span>}
              </label>

              {["text", "email", "tel"].includes(field.type) && (
                <>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                  <ValidationError
                    prefix={field.label}
                    field={field.name}
                    errors={state.errors}
                  />
                </>
              )}

              {field.type === "select" && field.options && (
                <>
                  <Select
                    name={field.name}
                    value={selectValues[field.name] || ""}
                    onValueChange={(value) =>
                      setSelectValues((prev) => ({
                        ...prev,
                        [field.name]: value,
                      }))
                    }
                  >
                    <SelectTrigger id={field.name}>
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {hasSubmitted &&
                    field.required &&
                    !selectValues[field.name] && (
                      <p className="text-red-500 text-sm mt-2">
                        {field.rules?.required || "This field is required"}
                      </p>
                    )}
                  <ValidationError
                    prefix={field.label}
                    field={field.name}
                    errors={state.errors}
                  />
                </>
              )}

              {field.type === "textarea" && (
                <>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={field.rows || 5}
                    required={field.required}
                  />
                  <ValidationError
                    prefix={field.label}
                    field={field.name}
                    errors={state.errors}
                  />
                </>
              )}
            </div>
          ))}

          <div className="sm:col-span-2">
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full flex items-center justify-center gap-2"
              disabled={state.submitting}
            >
              {state.submitting && <Loader2 className="animate-spin w-5 h-5" />}
              {state.submitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
