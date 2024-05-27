"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { contactFormSchema } from "@/schemas";
import { Textarea } from "../ui/textarea";
import { getCookie } from "cookies-next";
import { useState } from "react";
import { AppUrl } from "@/lib/url";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const cookie = getCookie("language") ?? "en";

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      //   phone: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof contactFormSchema>, e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = {
        data: {
          Name: values.name,
          Email: values.email,
          Message: values.message,
        },
      };
      const response = await fetch(`${AppUrl}/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        toast.success(
          cookie == "en"
            ? "Successfully posted message"
            : "تم نشر الرسالة بنجاح"
        );
        router.refresh();
        form.reset();
        // Additional logic if needed upon successful submission
      } else {
        console.error("Failed to submit form data:", response);
        toast.error(cookie == "en" ? "Something went wrong" : "هناك خطأ ما");

        // Additional error handling logic
      }
    } catch (error) {
      console.error("Error occurred while submitting form data:", error);
      // Additional error handling logic
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
      <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
        {/* <form>
          <ContactInputBox type="text" name="name" placeholder="Your Name" />
          <ContactInputBox type="text" name="email" placeholder="Your Email" />
          <ContactInputBox type="text" name="phone" placeholder="Your Phone" />
          <ContactTextArea
            row="6"
            placeholder="Your Message"
            name="details"
            defaultValue=""
          />
          <div>
            <button
              type="submit"
              className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
            >
              Send Message
            </button>
          </div>
        </form> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={
                        cookie == "en" ? "Enter name here" : "أدخل الاسم هنا"
                      }
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={
                        cookie == "en"
                          ? "Enter email here"
                          : "أدخل البريد الإلكتروني هنا"
                      }
                      type="email"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={
                        cookie == "en"
                          ? "Enter phone number here"
                          : "أدخل رقم الهاتف هنا"
                      }
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={
                        cookie == "en"
                          ? "Enter message here"
                          : "أدخل الرسالة هنا"
                      }
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
              disabled={loading}
            >
              {cookie == "en" ? " Send Message" : "إرسال رسالة"}
            </button>
          </form>
        </Form>

        <div>
          <span className="absolute -right-9 -top-10 z-[-1]">
            <svg
              width={100}
              height={100}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                fill="#3056D3"
              />
            </svg>
          </span>
          <span className="absolute -right-10 top-[90px] z-[-1]">
            <svg
              width={34}
              height={134}
              viewBox="0 0 34 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.9993"
                cy={132}
                r="1.66667"
                transform="rotate(180 31.9993 132)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.9993 117.333)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.9993 102.667)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={88}
                r="1.66667"
                transform="rotate(180 31.9993 88)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 31.9993 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={45}
                r="1.66667"
                transform="rotate(180 31.9993 45)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={16}
                r="1.66667"
                transform="rotate(180 31.9993 16)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={59}
                r="1.66667"
                transform="rotate(180 31.9993 59)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 31.9993 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 31.9993 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 17.3333 132)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 17.3333 117.333)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 17.3333 102.667)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 17.3333 88)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 17.3333 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 17.3333 45)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 17.3333 16)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 17.3333 59)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 17.3333 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 17.3333 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={132}
                r="1.66667"
                transform="rotate(180 2.66536 132)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 2.66536 117.333)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 2.66536 102.667)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={88}
                r="1.66667"
                transform="rotate(180 2.66536 88)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 2.66536 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={45}
                r="1.66667"
                transform="rotate(180 2.66536 45)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={16}
                r="1.66667"
                transform="rotate(180 2.66536 16)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={59}
                r="1.66667"
                transform="rotate(180 2.66536 59)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 2.66536 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 2.66536 1.66665)"
                fill="#13C296"
              />
            </svg>
          </span>
          <span className="absolute -bottom-7 -left-7 z-[-1]">
            <svg
              width={107}
              height={134}
              viewBox="0 0 107 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="104.999"
                cy={132}
                r="1.66667"
                transform="rotate(180 104.999 132)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 104.999 117.333)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 104.999 102.667)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy={88}
                r="1.66667"
                transform="rotate(180 104.999 88)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 104.999 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy={45}
                r="1.66667"
                transform="rotate(180 104.999 45)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy={16}
                r="1.66667"
                transform="rotate(180 104.999 16)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy={59}
                r="1.66667"
                transform="rotate(180 104.999 59)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 104.999 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 104.999 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 90.3333 132)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 90.3333 117.333)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 90.3333 102.667)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 90.3333 88)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 90.3333 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 90.3333 45)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 90.3333 16)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 90.3333 59)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 90.3333 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 90.3333 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy={132}
                r="1.66667"
                transform="rotate(180 75.6654 132)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={132}
                r="1.66667"
                transform="rotate(180 31.9993 132)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 75.6654 117.333)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.9993 117.333)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 75.6654 102.667)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.9993 102.667)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy={88}
                r="1.66667"
                transform="rotate(180 75.6654 88)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={88}
                r="1.66667"
                transform="rotate(180 31.9993 88)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 75.6654 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 31.9993 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy={45}
                r="1.66667"
                transform="rotate(180 75.6654 45)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={45}
                r="1.66667"
                transform="rotate(180 31.9993 45)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy={16}
                r="1.66667"
                transform="rotate(180 75.6654 16)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={16}
                r="1.66667"
                transform="rotate(180 31.9993 16)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy={59}
                r="1.66667"
                transform="rotate(180 75.6654 59)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={59}
                r="1.66667"
                transform="rotate(180 31.9993 59)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 75.6654 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 31.9993 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 75.6654 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 31.9993 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy={132}
                r="1.66667"
                transform="rotate(180 60.9993 132)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 17.3333 132)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 60.9993 117.333)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 17.3333 117.333)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 60.9993 102.667)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 17.3333 102.667)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy={88}
                r="1.66667"
                transform="rotate(180 60.9993 88)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 17.3333 88)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 60.9993 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 17.3333 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy={45}
                r="1.66667"
                transform="rotate(180 60.9993 45)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 17.3333 45)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy={16}
                r="1.66667"
                transform="rotate(180 60.9993 16)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 17.3333 16)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy={59}
                r="1.66667"
                transform="rotate(180 60.9993 59)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 17.3333 59)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 60.9993 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 17.3333 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 60.9993 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 17.3333 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 46.3333 132)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={132}
                r="1.66667"
                transform="rotate(180 2.66536 132)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 46.3333 117.333)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 2.66536 117.333)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 46.3333 102.667)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 2.66536 102.667)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 46.3333 88)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={88}
                r="1.66667"
                transform="rotate(180 2.66536 88)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 46.3333 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 2.66536 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 46.3333 45)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={45}
                r="1.66667"
                transform="rotate(180 2.66536 45)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 46.3333 16)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={16}
                r="1.66667"
                transform="rotate(180 2.66536 16)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 46.3333 59)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={59}
                r="1.66667"
                transform="rotate(180 2.66536 59)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 46.3333 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 2.66536 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 46.3333 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 2.66536 1.66665)"
                fill="#13C296"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

const ContactTextArea = ({
  row,
  placeholder,
  name,
  defaultValue,
}: {
  row: any;
  placeholder: any;
  name: any;
  defaultValue: any;
}) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({
  type,
  placeholder,
  name,
}: {
  type: any;
  placeholder: any;
  name: any;
}) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};
