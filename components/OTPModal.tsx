import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { Button } from "./ui/button";

const OTpModal = ({
  email,
  accountId,
}: {
  email: string;
  accountId: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // call api verify OTP
    } catch (error) {
      console.log("Failed to verify OTP", error);
    }
  };

  const handleResendOtp = async () => {
    // call api to resend OTP
  };

  return (
    <div>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="shad-alert-dialog">
          <AlertDialogHeader className="relative flex justify-center">
            <AlertDialogTitle className="h2 text-center">
              Enter Your OTP
              <Image
                src="/assets/icons/close-dark.svg"
                alt="close"
                width={20}
                height={20}
                onClick={() => setIsOpen(false)}
                className="otp-close-button"
              />
            </AlertDialogTitle>
            <AlertDialogDescription className="subtitle-2 text-center text-light-100">
              We&apos;ve sent a code to{" "}
              <span className="pl-1 text-brand">{email}</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <InputOTP maxLength={6} value={password} onChange={setPassword}>
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot index={0} className="shad-otp-slot" />
              <InputOTPSlot index={1} className="shad-otp-slot" />
              <InputOTPSlot index={2} className="shad-otp-slot" />
              <InputOTPSlot index={3} className="shad-otp-slot" />
              <InputOTPSlot index={4} className="shad-otp-slot" />
              <InputOTPSlot index={5} className="shad-otp-slot" />
            </InputOTPGroup>
            {/* <InputOTPSeparator />
            <InputOTPGroup>
            </InputOTPGroup> */}
          </InputOTP>
          <AlertDialogFooter>
            <div className="flex w-full flex-col gap-4">
              <AlertDialogAction
                onClick={handleSubmit}
                type="button"
                className="shad-submit-btn h-12 text-white"
              >
                Submit
                {isLoading && (
                  <Image
                    src="/assets/icons/loader.svg"
                    alt="loader"
                    width={24}
                    height={24}
                    className="ml-2 animate-spin"
                  />
                )}
              </AlertDialogAction>

              <div>
                Didn&apos;t get a code?
                <Button type="button" variant='link' className="pl-1 text-brand" onClick={handleResendOtp}>
                    Click to resend
                </Button>
              </div>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default OTpModal;
