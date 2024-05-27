"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { affiliateFormSchema, commentFormSchema } from "../../schemas";
import { Textarea } from "../ui/textarea";
import { getCookie } from "cookies-next";
import { useState } from "react";
import { AppUrl } from "@/lib/url";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const CommentForm = ({ data }: { data: string }) => {
  const cookie = getCookie("language") ?? "en";
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      email: "",
      comment: "",
      fullName: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof commentFormSchema>) {
    try {
      setLoading(true);
      const formData = {
        data: {
          FullName: values.fullName,
          Email: values.email,
          Comment: values.comment,
          article: data,
        },
      };
      const response = await fetch(`${AppUrl}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success(
          cookie == "en"
            ? "Successfully posted comment"
            : "تم نشر التعليق بنجاح"
        );
        router.refresh();
        form.reset();
        // Additional logic if needed upon successful submission
      } else {
        console.error("Failed to submit form data:", response.statusText);
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {cookie == "en" ? "Full Name" : "الاسم الكامل"}
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    cookie == "en"
                      ? "Enter firstname here"
                      : "أدخل الاسم الأول هنا"
                  }
                  {...field}
                  required
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
              <FormLabel>
                Email Address
                {cookie == "en" ? "Email Address" : "عنوان البريد الإلكتروني"}
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  // placeholder="Enter your email here"
                  placeholder={
                    cookie == "en"
                      ? "Enter your email here"
                      : "أدخل عنوان بريدك الإلكتروني هنا                      "
                  }
                  {...field}
                  required
                  disabled={loading}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {/* Comment */}
                {cookie == "en" ? "Comment" : "تعليق"}

                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  // placeholder="Enter comment here"
                  placeholder={
                    cookie == "en" ? "Enter firstname here" : "أدخل التعليق هنا"
                  }
                  {...field}
                  required
                  disabled={loading}
                  rows={8}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-buttonHoverBg rounded-[5px] p-[25px] w-[9rem] hover:bg-buttonHoverBg/80   text-[15px] font-[700]"
        >
          {/* Submit */}
          {cookie == "en" ? "Submit" : "يُقدِّم"}
        </Button>
      </form>
    </Form>
  );
};
