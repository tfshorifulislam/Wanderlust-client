'use client';
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())
        console.log(user, 'user info')

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
        })
        console.log(data, error)
        if (data) {
            redirect('/')
        }
        if (error) {
            alert('Sign up Faild')
        }
    }
    return (
        <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-sm p-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-semibold text-gray-900">Create Account</h1>
                    <p className="text-gray-500 mt-1">Start your adventure with Wanderlust</p>
                </div>

                <Form className="flex flex-col gap-6" onSubmit={onSubmit}>

                    {/* Name Field */}
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label className="text-sm font-medium text-gray-700 mb-1.5 block">
                            Full Name
                        </Label>
                        <div className="relative">
                            <Input
                                placeholder="Enter your name"
                                className="w-full bg-[#f8fafc] border border-gray-200 rounded-sm py-3 px-4 focus:outline-none focus:border-[#14b8a6] text-gray-700"
                            />
                        </div>
                        <FieldError className="text-red-500 text-sm mt-1" />
                    </TextField>


                    {/* Email Field */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-medium text-gray-700 mb-1.5 block">
                            Email Address
                        </Label>
                        <div className="relative">
                            <Input
                                placeholder="Enter your email"
                                className="w-full bg-[#f8fafc] border border-gray-200 rounded-sm py-3 px-4 focus:outline-none focus:border-[#14b8a6] text-gray-700"
                            />
                        </div>
                        <FieldError className="text-red-500 text-sm mt-1" />
                    </TextField>

                    {/* image filed */}
                    <TextField
                        name="image"
                        type="url"
                    >
                        <Label className="text-sm font-medium text-gray-700 mb-1.5 block">
                            Image Url
                        </Label>
                        <div className="relative">
                            <Input
                                placeholder="Enter your image URI"
                                className="w-full bg-[#f8fafc] border border-gray-200 rounded-sm py-3 px-4 focus:outline-none focus:border-[#14b8a6] text-gray-700"
                            />
                        </div>
                        <FieldError className="text-red-500 text-sm mt-1" />
                    </TextField>

                    {/* Password Field */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-medium text-gray-700 mb-1.5 block">
                            Password
                        </Label>
                        <div className="relative">
                            <Input
                                placeholder="Enter your password"
                                className="w-full bg-[#f8fafc] border border-gray-200 rounded-sm py-3 px-4 focus:outline-none focus:border-[#14b8a6] text-gray-700"
                            />
                        </div>
                        <Description className="text-xs text-gray-500 mt-1">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError className="text-red-500 text-sm mt-1" />
                    </TextField>

                    {/* Buttons */}

                    <Button
                        type="submit"
                        className="flex-1 w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3.5 rounded-sm  transition-colors"
                    >
                        Create Account
                    </Button>


                </Form>

                {/* Extra Design Elements (Optional but looks better) */}
                <div className="text-center mt-8">
                    <div className="text-gray-400 text-sm mb-3">Or sign up with</div>
                    <button className="w-full border border-gray-200 hover:bg-gray-50 py-3.5 rounded-sm flex items-center justify-center gap-3 transition-colors">
                        <span className="text-red-500 text-xl">G</span>
                        <span className="font-medium text-gray-700">Sign Up With Google</span>
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{' '}
                    <a href="#" className="text-sky-500 hover:underline font-medium">Sign In</a>
                </p>

            </div>
        </div>
    );
};

export default SignUpPage;