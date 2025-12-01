"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Cross, Eye, EyeOff, Facebook, FacebookIcon, Instagram, Linkedin, LucideFacebook, Twitter, Upload, X } from "lucide-react";
import { FloatingInput } from "@/components/common/FloatingInput/FloatingInput";

type Mode = "login" | "register";

interface AuthFormProps {
    mode?: Mode;
}

export const AuthForm: React.FC<AuthFormProps> = ({ mode = "login" }) => {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // Separate visibility state for password and confirm password so toggling one doesn't affect the other
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [idFile, setIdFile] = useState<File | null>(null);
    const [idPreview, setIdPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [howDidYouHear, setHowDidYouHear] = useState("");
    const [selectFocused, setSelectFocused] = useState(false);
    const [fileFocused, setFileFocused] = useState(false);

    const handleFileChange = (f?: FileList | null) => {
        const file = f?.[0] ?? null;
        // Revoke previous preview if present
        if (idPreview) {
            try { URL.revokeObjectURL(idPreview); } catch { /* ignore */ }
        }
        setIdFile(file);
        if (file) {
            const url = URL.createObjectURL(file);
            setIdPreview(url);
        } else {
            setIdPreview(null);
        }
    };

    // Revoke object URL on unmount
    useEffect(() => {
        return () => {
            if (idPreview) {
                try { URL.revokeObjectURL(idPreview); } catch { }
            }
        };
    }, [idPreview]);

    const removeFile = () => {
        if (idPreview) {
            try { URL.revokeObjectURL(idPreview); } catch { }
        }
        setIdFile(null);
        setIdPreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (mode === "login") {
            console.log("login", { email, password, remember });
        } else {
            console.log("register", { fullName, email, mobile, password, confirmPassword, idFile, howDidYouHear });
        }
    };

    // Card component (right side)
    const Card = (
        <div className="w-full max-w-md bg-white rounded-2xl py-6 px-5 shadow-xl flex flex-col gap-5">
            <div className="flex flex-col gap-[5px]">
                <h2 className="text-2xl font-semibold leading-9 text-center text-text-dark">{mode === "login" ? "Login to your account" : "Sign up"}</h2>
                <p className="text-[18px] leading-9 text-center text-text-gray">{mode === "login" ? "Welcome! to passionfarms." : "Welcome! to passionfarms."}</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
                {mode === "register" && (
                    <div className="border border-[#bbb] rounded">
                        <FloatingInput id="fullName" label="Enter Full Name" value={fullName} onChange={setFullName} />
                    </div>
                )}

                <div className="border border-[#bbb] rounded">
                    <FloatingInput id="email" label={mode === "login" ? "Email or Mobile" : "Email Address"} value={email} onChange={setEmail} />
                </div>

                {mode === "register" && (
                    <div className="border border-[#bbb] rounded">
                        <FloatingInput id="mobile" label="Mobile Number" value={mobile} onChange={setMobile} />
                    </div>
                )}

                <div className="border border-[#bbb] rounded-md relative">
                    <FloatingInput id="password" label="Password" type={showPassword ? "text" : "password"} value={password} onChange={setPassword} />
                    <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-3.5 top-4 text-text-dark" aria-label="toggle password">
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                {mode === "register" && (
                    <>
                        <div className="border border-[#bbb] rounded-md relative">
                            <FloatingInput id="confirmPassword" label="Confirm Password" type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={setConfirmPassword} />
                            <button type="button" onClick={() => setShowConfirmPassword((s) => !s)} className="absolute right-3.5 top-4 text-text-dark" aria-label="toggle confirm password">
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="relative">
                                <label htmlFor="govId" className={`absolute left-4 transition-all duration-150 pointer-events-none text-xs text-text-gray ${fileFocused || idPreview ? '-top-2 bg-white px-1.5' : 'top-4.5'}`}>
                                    Upload Government ID (21+ Verification)
                                </label>
                                <div className={`border ${fileFocused ? 'border-[#bbb]' : 'border border-[#bbb]'} rounded-md p-6 text-center`}>
                                    {!idPreview ? (
                                        <div className="flex flex-col items-center pt-5">
                                            <div className="relative">
                                                <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mb-3">
                                                    <Upload size={20} className="text-yellow-500" />
                                                </div>
                                                <input ref={fileInputRef} id="govId" type="file" accept="image/*,.pdf" onFocus={() => setFileFocused(true)} onBlur={() => setFileFocused(false)} onChange={(e) => handleFileChange(e.target.files)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                            </div>
                                            <div className="text-sm text-text-gray font-medium mb-1">Click to upload</div>
                                            <div className="text-xs text-text-gray">Driver&apos;s License, State ID, or Passport (Pdf or Jpg)</div>
                                        </div>
                                    ) : (
                                        <div className="relative inline-block">
                                            <div className="w-full flex justify-center relative">
                                                <Image src={idPreview} alt="id-preview" width={300} height={240} className="object-contain max-h-40 rounded w-full" />
                                                <button type="button" onClick={removeFile} className="absolute -top-2 -right-2 bg-white border rounded-full p-1 shadow text-text-gray">
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="relative">
                                <label htmlFor="howDidYouHear" className={`absolute left-4 transition-all duration-150 pointer-events-none text-xs text-text-gray ${selectFocused || howDidYouHear ? '-top-2 bg-white px-1.5' : 'top-4.5'}`}>
                                    How did you hear about us?
                                </label>
                                <select id="howDidYouHear" value={howDidYouHear} onFocus={() => setSelectFocused(true)} onBlur={() => setSelectFocused(false)} onChange={(e) => setHowDidYouHear(e.target.value)} className="w-full border border-[#bbb] rounded px-4 py-2 bg-transparent leading-9 h-[52px]">
                                    <option value=""></option>
                                    <option>Social Media</option>
                                    <option>Friend</option>
                                    <option>Search</option>
                                </select>
                            </div>
                        </div>
                    </>
                )}

                {mode === "login" ? (
                    <>
                        <div className="flex items-center justify-between mb-2">
                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="form-checkbox h-4 w-4" />
                                Remember me
                            </label>
                            <a href="#" className="text-sm text-red-500">Forgot password?</a>
                        </div>

                        <button type="submit" className="w-full py-3 rounded-md bg-[#F0BA43] text-white font-medium">Log in</button>
                    </>
                ) : (
                    <>
                        <button type="submit" className="w-full py-3 rounded-md bg-[#F0BA43] text-white text-sm">Sign in Create Retail Account</button>
                        <div className="text-center text-base text-text-gray">Already have an account? <a href="/login" className="text-red-500">Login</a></div>
                    </>
                )}

                {mode === "login" && (
                    <>
                        <div className="flex items-center gap-3 my-2">
                            <span className="flex-1 h-px bg-text-gray w-5" />
                            <div className="text-xs text-text-gray">or</div>
                            <span className="flex-1 h-px bg-text-gray w-1" />
                        </div>
                        <div className="text-center">
                            <button type="button" className="w-full py-2 rounded-md border border-[#bbbbbb] flex items-center justify-center gap-2 mb-7.5 leading-9 text-text-gray text-sm">
                                {mode === "login" ? "Login with Google" : "Sign in with Google"}
                                <Image src="/images/google-icon.png" alt="google" width={16} height={16} />
                            </button>
                            <div className="flex items-center justify-center gap-5.5 mb-2.5">
                                <a href="#" className="text-text-dark"><Facebook /></a>
                                <a href="#" className="text-text-dark"><Twitter /></a>
                                <a href="#" className="text-text-dark"><Linkedin /></a>
                                <a href="#" className="text-text-dark"><Instagram /></a>
                            </div>
                            <div className="text-center text-lg text-text-dark leading-9">Don’t have an account? <a href="/register" className="text-red-500">Sign Up</a></div>
                        </div>
                    </>
                )
                }
            </form>
        </div>
    );

    // Full layout with background and left branding column
    return (
        <main
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/login-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-[1200px] w-full px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-center">
                    {/* Left side - branding */}
                    <div className="lg:col-span-6 flex flex-col justify-between text-white h-full">
                        <div className="pt-8">
                            <div className="flex flex-col sm:items-start items-center gap-4">
                                <div className="w-14 h-14 bg-white/20 rounded-full flex flex-col items-center justify-center">
                                    <Image src="/images/logo.png" alt="logo" width={40} height={40} className="object-contain" />
                                </div>
                                <h1 className="text-3xl font-semibold">Passion Farms</h1>
                            </div>
                        </div>

                        <div className="mb-8 flex flex-col gap-2 text-lg lg:items-start items-center lg:mt-0 mt-4">
                            <p>Register here for:</p>
                            <div className="flex gap-3">
                                <button className="bg-yellow-btn px-4 py-2 rounded text-sm font-medium">Wholesale</button>
                                <button className="bg-yellow-btn px-4 py-2 rounded text-sm font-medium">Vendor</button>
                            </div>
                        </div>
                    </div>

                    {/* Right side - auth card */}
                    <div className="lg:col-span-6 flex justify-center">{Card}</div>
                    <div className="flex lg:flex-row flex-col gap-2 text-white lg:col-span-6 justify-around mb-10 lg:mt-0 mt-10 lg:items-start items-center">
                        <p>
                            Copyright @ 2025 Passionfarms.org
                        </p>
                        <p>

                            Privacy Policy
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

