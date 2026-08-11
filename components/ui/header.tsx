import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "./sheet";
import { HugeiconsIcon } from "@hugeicons/react";
import { PanelLeftOpenIcon } from "@hugeicons/core-free-icons";
import { Button } from "./button";

export function Header() {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-2 fixed z-50">
      <div className="w-full py-3 px-8 bg-black/10 border border-[#0097ff]/20 rounded-full flex justify-between items-center backdrop-blur-2xl">
        <Link href="/">
          <Image
            src="/img/apecover-text-logo.png"
            alt="ApeCover"
            width="100"
            height="100"
            className="cursor-pointer img"
            priority
          />
        </Link>
        <nav>
          <ul className="hidden md:flex gap-4">
            <li>
              <Link href="#how">How it works?</Link>
            </li>
            <li>
              <Link href="#protections">Protections</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <HugeiconsIcon icon={PanelLeftOpenIcon} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <nav className="flex items-center mt-20">
                  <ul className="flex flex-col gap-4">
                    <li>
                      <Link href="#how">How it works?</Link>
                    </li>
                    <li>
                      <Link href="#protections">Protections</Link>
                    </li>
                    <li>
                      <Link href="#faq">FAQ</Link>
                    </li>
                  </ul>
                </nav>
              </SheetHeader>
              <SheetFooter>
                <Button size="lg">Get Protected</Button>
                <Button size="lg" variant="outline">
                  Integrate ApeSafe
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
