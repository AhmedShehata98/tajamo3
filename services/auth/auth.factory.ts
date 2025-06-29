import {
    type AuthOTPStrategy,
    PhoneAuthStrategy,
    EmailAuthStrategy
} from "~/services/auth/auth.strategy";


type AuthOTPFactoryType = "sms" | "email";

export class AuthOtpFactory  {
    static createOTPStrategy(type: AuthOTPFactoryType): AuthOTPStrategy  {
        switch (type){
            case "sms":
                return new PhoneAuthStrategy()
            case "email":
                return new EmailAuthStrategy()
            default: throw new Error("auth type not implemented");
        }
    }
}