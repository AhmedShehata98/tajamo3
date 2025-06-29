import type { AuthForm, AuthOTPStrategy } from "~/services/auth/auth.strategy";
import type { User, UserForm } from "~/types/users";
import type { Otp as OtpType } from "~/types/otps";

interface IAuthOTPCommand<R> {
  execute(): Promise<R>;
}

export class SendOTPByPhoneCommand implements IAuthOTPCommand<AuthForm> {
  constructor(
    private readonly phone: string,
    private readonly authOtpStrategy: AuthOTPStrategy
  ) {}

  async execute(): Promise<AuthForm> {
    const otp = await this.authOtpStrategy.sendOtp(this.phone);
    console.log("Command: Send OTP By Phone");
    console.log("otp :", otp);
    return otp;
  }
}

export class VerifyOtpByPhoneCommand implements IAuthOTPCommand<boolean> {
  constructor(
    private readonly phone: string,
    private readonly otp: string,
    private readonly authOtpStrategy: AuthOTPStrategy
  ) {}
  async execute(): Promise<boolean> {
    const verified = await this.authOtpStrategy.verifyOtp({
      resource: this.phone,
      otp: this.otp,
    });
    console.log("Command: Verify OTP By Phone");
    console.log("verify :", verified);
    return verified;
  }
}

export class CreateTokenOtpByPhoneCommand implements IAuthOTPCommand<void> {
  constructor(
    private readonly userId: number,
    private readonly authOtpStrategy: AuthOTPStrategy
  ) {}
  async execute(): Promise<void> {
    const token = await this.authOtpStrategy.createToken(this.userId);
    console.log("Command: Create Token OTP By Phone");
    console.log("token :", token);
  }
}

export class GetUserByPhoneNumberCommand implements IAuthOTPCommand<User> {
  constructor(
    private readonly phone: string,
    private readonly authOtpStrategy: AuthOTPStrategy
  ) {}
  execute(): Promise<User> {
    try {
      const user = this.authOtpStrategy.getUserByPhoneNumber(this.phone);
      console.log("Fetched User", user);
      return user;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "bad request");
    }
  }
}

export class CreateUserByPhoneCommand implements IAuthOTPCommand<User> {
  constructor(
    private readonly user: UserForm,
    private readonly authOtpStrategy: AuthOTPStrategy
  ) {}

  execute(): Promise<User> {
    try {
      return this.authOtpStrategy.createUser(this.user);
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "bad request");
    }
  }
}

export class RemoveOtpCommand implements IAuthOTPCommand<OtpType> {
  constructor(
    private readonly OtpId: number,
    private readonly authOtpStrategy: AuthOTPStrategy
  ) {}

  execute(): Promise<OtpType> {
    try {
      return this.authOtpStrategy.removeOtp(this.OtpId);
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "bad request");
    }
  }
}
