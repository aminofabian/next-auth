import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { Jost } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/LoginButton";

const font = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <div className="flex w-4xl h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 text-center border">
      <div className="space-y-6">
        <div className="flex text-center">
          <h1 className="text-4xl font-bold text-slate-50">🔐Next Auth</h1>
        </div>
        <p
          className={cn(
            "text-slate-50 text-xl font-bold text-center",
            font.className
          )}
        >
          Simple Authentication Service
        </p>
        <LoginButton>
          <Button size="lg" variant="secondary" className="my-4">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </div>
  );
}
