"use client";

import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { UserInfo } from "@/context/user";
import { useUser } from "@/hooks/useUser";
import { signUp } from "@/service/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod"

const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1, { message: "First name must contain at least 1 character" }).max(255),
  lastName: z.string().min(1, { message: "Last name must contain at least 1 character" }).max(255),
  phone: z.string().regex(new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/), { message: "Invalid phone number" }),
  password: z.string().min(6, { message: "Password must contain at least 6 characters" }).max(255),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})

const SignUpForm = () => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()
  const { handleUser } = useUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      confirmPassword: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const userBody = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      password: values.password,
      role: "USER"
    }
    const newUser = await signUp(userBody)
    if (typeof newUser === "string") {
      setError(newUser)
    } else {
      const userInfo: UserInfo = { token: newUser.token, id: newUser.user.id }
      localStorage.setItem("user-info", JSON.stringify(userInfo))
      handleUser(newUser)
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
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full md:w-[50%]">
                <FormControl>
                  <Input {...field} placeholder="Enter your first name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full md:w-[50%]">
                <FormControl>
                  <Input {...field} placeholder="Enter your last name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Enter your phone number" />
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
              <FormControl>
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
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="relative flex items-center justify-end">
                  <Input type={eyeOpen ? "text" : "password"} {...field} placeholder="Confirm your password" />
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
              </FormControl>
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

export default SignUpForm;
