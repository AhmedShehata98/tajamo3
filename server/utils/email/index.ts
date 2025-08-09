const sendVerifyEmail = async ({
  email,
  otp,
}: {
  otp: string;
  email: string;
}): Promise<{ message: string }> => {
  try {
    const frontendUrl = useRuntimeConfig().public.websiteUrl;

    const searchParams = new URLSearchParams();
    searchParams.append("email", email);
    searchParams.append("otp", otp);
    searchParams.append("subject", "Tajamu | Account Verification Code");

    // Use absolute URL with proper base URL
    const baseUrl = frontendUrl || "http://localhost:3000";
    const url = new URL("/api/email/send-otp", baseUrl);
    url.search = searchParams.toString();

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Failed to send email, " + res.statusText);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};
export { sendVerifyEmail };
