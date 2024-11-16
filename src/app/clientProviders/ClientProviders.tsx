'use client';

import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = "888721585564-58hil6pk5f4j6vu91ovfmjdqu1gelt36.apps.googleusercontent.com";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <GoogleOAuthProvider clientId={CLIENT_ID}>{children}</GoogleOAuthProvider>;
}
