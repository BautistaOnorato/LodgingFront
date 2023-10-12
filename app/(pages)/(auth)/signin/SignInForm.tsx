"use client";

import { ClosedEyeIcon, EyeIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
})

const SignInForm = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })


  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }
  
  return (
    <Form {...form}>
      <form className="w-full flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Enter your email address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="relative w-full flex items-center justify-end">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input type={eyeOpen ? "text" : "password"} {...field} placeholder="Confirm your password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {eyeOpen ? (
              <EyeIcon
                onClick={() => setEyeOpen(false)}
                classname="w-8 absolute pr-2 cursor-pointer opacity-70"
              />
            ) : (
              <ClosedEyeIcon
                onClick={() => setEyeOpen(true)}
                classname="w-8 absolute pr-2 cursor-pointer opacity-70"
              />
            )}
          </div>
        <Button className="bg-primary-color py-2 text-white text-lg hover:bg-primary-color">
          Continue
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
