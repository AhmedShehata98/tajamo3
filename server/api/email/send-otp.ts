import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import { Resend } from "resend";
import { fileURLToPath } from "url";
import notificationApi from "notificationapi-node-server-sdk";
import { Region } from "notificationapi-node-server-sdk";

const loadEmailTemplate = ({
  code,
  time,
  year,
}: {
  code: string;
  time: number;
  year: number;
}) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const timeText = time === 1 ? "minute" : "minutes";
  const templatePath = path.join(
    process.cwd(),
    "server",
    "utils",
    "email",
    "templates",
    "otp-email.hbs"
  );
  const src = fs.readFileSync(templatePath, "utf-8");
  const template = handlebars.compile(src);

  return template({ code, time, year, timeText });
};

export default defineEventHandler(async (event) => {
  const notificationApiClientId =
    useRuntimeConfig().public.notificationApiClientId;
  const notificationApiClientSecret =
    useRuntimeConfig().notificationApiClientSecret;

  try {
    const queryParams = getQuery<{
      email: string;
      subject: string;
      otp: string;
    }>(event);
    // const resend = new Resend(resendApiKey);

    const template = loadEmailTemplate({
      code: queryParams.otp,
      time: 5,
      year: new Date().getFullYear(),
    });

    notificationApi.clientId = notificationApiClientId;
    notificationApi.clientSecret = notificationApiClientSecret;

    const { status, statusText } = await notificationApi.send({
      type: "email",
      to: {
        email: queryParams.email,
      },
      email: {
        subject: queryParams.subject,
        html: template,
        senderName: "Tajamu | Event Management system",
      },
    });

    if (status !== 200) {
      throw new Error(statusText);
    }
    return {
      message: "OTP sent successfully",
    };
  } catch (error) {
    return {
      message: "OTP sent failed",
      details: error instanceof Error ? error.message : error,
    };
  }
});
