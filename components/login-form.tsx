"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export function LoginForm({
                            className,
                            ...props
                          }: React.ComponentProps<"div">) {
  const version = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Hardcoded credentials
    const hardcodedUser = "admin@demo.com"
    const hardcodedPass = "demo123"

    if (email === hardcodedUser && password === hardcodedPass) {
      router.push("/main/dashboard")
    } else {
      setError("Invalid email or password")
    }
  }


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center">Fyxo</h1>

      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <Field>
                <Button type="submit">Login</Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="justify-center text-sm text-muted-foreground">
          Fyxo v{version}
        </CardFooter>
      </Card>
    </div>
  )
}
