"use client";

import React from "react";
import { AuthForm } from "@/components/Auth";

const LoginPage: React.FC = () => {
    // AuthForm contains the full background + left branding column.
    // Keep this page as a thin wrapper so layout is centralized in the component.
    return <AuthForm mode="login" />;
};

export default LoginPage;