"use client";

import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { UserInfo } from "@/context/user";
import { useUser } from "@/hooks/useUser";
import { signIn } from "@/service/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
})

const SignInForm = () => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [error, setError] = useState("")
  const router = useRouter()
  const { handleUser } = useUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setError("")
    const user = await signIn(values)
    if (typeof user === "string") {
      setError(user)
    } else {
      const userInfo: UserInfo = { token: user.token, id: user.user.id }
      localStorage.setItem("user-info", JSON.stringify(userInfo))
      handleUser(user)
      router.push("/")
    }
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <div className="relative flex items-center justify-end">
                <Input type={eyeOpen ? "text" : "password"} {...field} placeholder="Enter your password" />
                {eyeOpen ? (
                  <Eye
                    onClick={() => setEyeOpen(false)}
                    className="w-8 absolute pr-3 cursor-pointer opacity-70"
                  />
                  ) : (
                    <EyeOffIcon
                      onClick={() => setEyeOpen(true)}
                      className="w-8 absolute pr-3 cursor-pointer opacity-70"
                    />
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {
         error && <p className="text-destructive text-sm font-medium">{error}</p>
        }
        <Button className="bg-primary-color py-2 text-white text-lg hover:bg-primary-color">
          Continue
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
