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

export const CommentForm = () => {
  const form = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      email: "",
      comment: "",
      fullName: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof commentFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                Full Name
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter firstname here" {...field} required />
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
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email here"
                  {...field}
                  required
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
                Comment
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter comment here"
                  {...field}
                  required
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
          Submit
        </Button>
      </form>
    </Form>
  );
};
