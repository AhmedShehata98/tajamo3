import {
  type AuthOTPStrategy,
  type OpenAuthStrategy,
  PhoneAuthStrategy,
  EmailAuthStrategy,
  GoogleAuth,
} from "~/services/auth/auth.strategy";

type AuthOTPFactoryType = "sms" | "email" | "oauth_google";
type OpenAuthFactoryType = "google";

export class AuthOtpFactory {
  static createOTPStrategy(type: AuthOTPFactoryType): AuthOTPStrategy {
    switch (type) {
      case "sms":
        return new PhoneAuthStrategy();
      case "email":
        return new EmailAuthStrategy();

      default:
        throw new Error("auth type not implemented");
    }
  }
}

export class OpenAuthFactory {
  static createOpenAuthStrategy(type: OpenAuthFactoryType): OpenAuthStrategy {
    switch (type) {
      case "google":
        return new GoogleAuth();
      default:
        throw new Error("auth type not implemented");
    }
  }
}
