"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Lock } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [forgotEmail, setForgotEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("login")
  const [passwordResetSent, setPasswordResetSent] = useState(false)

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate login
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect would happen here in a real application
      console.log("Login submitted:", loginData)
    }, 1500)
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate registration
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect would happen here in a real application
      console.log("Registration submitted:", registerData)
      setActiveTab("login")
    }, 1500)
  }

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate password reset
    setTimeout(() => {
      setIsSubmitting(false)
      setPasswordResetSent(true)
      console.log("Password reset requested for:", forgotEmail)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Trust Property Management</h1>
          <p className="mt-2 text-slate-500">Access your account</p>
        </div>

        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={loginData.email}
                      onChange={handleLoginChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-xs"
                        type="button"
                        onClick={() => setActiveTab("forgot")}
                      >
                        Forgot password?
                      </Button>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        value={loginData.password}
                        onChange={handleLoginChange}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-slate-500" />
                        ) : (
                          <Eye className="h-4 w-4 text-slate-500" />
                        )}
                        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <input type="checkbox" id="remember" className="rounded text-primary focus:ring-primary" />
                    <label htmlFor="remember" className="text-sm text-slate-500">
                      Remember me
                    </label>
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-slate-500">Or continue with</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" type="button" className="flex items-center justify-center">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </Button>
                    <Button variant="outline" type="button" className="flex items-center justify-center">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </Button>
                    <Button variant="outline" type="button" className="flex items-center justify-center">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-center text-sm text-slate-500">
                  Don't have an account?{" "}
                  <Button variant="link" className="p-0 h-auto" type="button" onClick={() => setActiveTab("register")}>
                    Register
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Create a new account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={registerData.name}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={registerData.email}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="register-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        value={registerData.password}
                        onChange={handleRegisterChange}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-slate-500" />
                        ) : (
                          <Eye className="h-4 w-4 text-slate-500" />
                        )}
                        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      required
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="flex items-start space-x-2 mt-4">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded text-primary focus:ring-primary mt-1"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-slate-500">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Register"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-center text-sm text-slate-500">
                  Already have an account?{" "}
                  <Button variant="link" className="p-0 h-auto" type="button" onClick={() => setActiveTab("login")}>
                    Login
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="forgot">
            <Card>
              <CardHeader>
                <CardTitle>Forgot Password</CardTitle>
                <CardDescription>
                  Enter your email address and we'll send you a link to reset your password
                </CardDescription>
              </CardHeader>
              <CardContent>
                {passwordResetSent ? (
                  <div className="flex flex-col items-center justify-center space-y-4 py-6">
                    <div className="rounded-full bg-green-100 p-3">
                      <Lock className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Check Your Email</h3>
                    <p className="text-center text-slate-500">
                      We've sent a password reset link to your email address. Please check your inbox.
                    </p>
                    <Button onClick={() => setActiveTab("login")} className="mt-4">
                      Return to Login
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="forgot-email">Email</Label>
                      <Input
                        id="forgot-email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Reset Link"}
                    </Button>
                  </form>
                )}
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-center text-sm text-slate-500">
                  Remember your password?{" "}
                  <Button variant="link" className="p-0 h-auto" type="button" onClick={() => setActiveTab("login")}>
                    Login
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
