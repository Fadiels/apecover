"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { HeroBackground } from "@/components/ui/heroBackground";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ShieldCheck,
  EnergyIcon,
  ChartIcon,
  SearchAreaIcon,
  ShieldKeyIcon,
  Settings01Icon,
  AiSecurity03Icon,
  StarsIcon,
  EarthLockIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const protectionOptions = [
  {
    name: "Basic",
    premium: "3%",
    payout: "15%",
  },
  {
    name: "Standard",
    premium: "5%",
    payout: "25%",
  },
  {
    name: "Degen Max",
    premium: "10%",
    payout: "50%",
  },
];

const faqItems = [
  {
    question: "What is ApeCover?",
    answer:
      "ApeCover is an on-chain protection protocol designed to reduce downside risk during the highest-risk period of a token launch.",
  },
  {
    question: "How does ApeCover work?",
    answer:
      "You pay a premium when entering an eligible trade. If the token reaches the defined launch-floor trigger during the protection window, the protocol automatically settles the applicable payout.",
  },
  {
    question: "How long does protection last?",
    answer:
      "The core design uses a 15-minute policy period, followed by a claim window.",
  },
  {
    question: "Does ApeCover protect every token?",
    answer:
      "No. Tokens and venues must pass ApeCover's eligibility requirements.",
  },
  {
    question: "Can I protect any size trade?",
    answer:
      "No. Position caps prevent trades large enough to manipulate their own protection trigger.",
  },
  {
    question: "Is ApeCover custodial?",
    answer: "No. ApeCover is designed to be non-custodial.",
  },
  {
    question: "Which chains are supported?",
    answer:
      "ApeCover is being developed for Solana and Robinhood Chain, with a multi-chain architecture for future expansion.",
  },
  {
    question: "Is ApeCover risk-free?",
    answer:
      "No. ApeCover is designed to manage risk through eligibility screening, reserves, utilization limits, position caps and data-driven pricing. It does not eliminate market or protocol risk.",
  },
];

export default function Home() {
  return (
    <div className="full">
      <Header />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* hero */}
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center min-h-screen overflow-hidden">
          <HeroBackground />
          <div className="text-center">
            <Image
              src="/img/apecover-logo.png"
              alt="ApeCover"
              width="150"
              height="150"
              className="mx-auto mt-20 img"
            />
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl mt-4 max-w-4xl mx-auto">
              <span className="bg-linear-to-tr from-white via-[#c2d7ff] to-[#0097ff] bg-clip-text text-transparent">
                Ape boldly, Risk Smarter & Stay Covered.
              </span>
            </h1>
            <p className="font-light md:text-2xl max-w-md mx-auto mt-4">
              On-chain protection for the riskiest minutes of a token launch.
            </p>
          </div>
        </div>

        <div className="py-10 max-w-6xl mx-auto">
          <Card>
            <CardContent>
              <div className="lg:flex lg:justify-between lg:items-start">
                <p>
                  Pay a small premium when you buy. If the token returns to its
                  launch floor during the protection window, ApeCover
                  automatically pays a fixed portion of your trade back.
                  <br /> No paperwork. No custody. No manual claims.
                </p>
                <div className="w-full flex justify-center items-center gap-2 md:flex-row mt-2 lg:mt-0 lg:justify-end">
                  <Button
                    size="lg"
                    onClick={() =>
                      toast("Not available yet", {
                        position: "bottom-center",
                      })
                    }
                  >
                    Get Protected
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() =>
                      toast("Not available yet", {
                        position: "bottom-center",
                      })
                    }
                  >
                    Integrate ApeCover
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* how it works */}
        <div
          id="how"
          className="max-w-6xl mx-auto py-10 lg:grid lg:grid-cols-2"
        >
          {/* visual */}
          <div className="mx-auto lg:order-2">
            <Image
              src="/img/asset-1.png"
              alt="ApeCover"
              width="1000"
              height="1000"
              className="mx-auto"
              priority
            />
          </div>
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold lg:text-4xl">
              <HugeiconsIcon
                icon={Settings01Icon}
                className="inline-block mr-2"
              />
              <span className="bg-linear-to-tr from-white via-[#c2d7ff] to-[#0097ff] bg-clip-text text-transparent">
                How it Works?
              </span>
            </h2>
            <div className="text-left space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
              <Card>
                <CardHeader>
                  <CardTitle>01 — Buy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Buy an eligible token through a supported platform.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>02 — Protect</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Choose ApeCover protection and pay a small premium.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>03 — Trade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Your protection remains active during the highest-risk
                    period.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>04 — Get Paid</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    If the price returns to the defined launch floor, the smart
                    contract automatically settles the payout
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* highlights */}
        <div id="utility" className="max-w-6xl mx-auto py-10">
          <div className="space-y-6 text-center">
            <div className="text-left space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 md:items-stretch">
              <h2 className="text-2xl mb-6 font-bold text-center mb-2 md:text-6xl md:text-left lg:text-4xl ">
                <HugeiconsIcon
                  icon={AiSecurity03Icon}
                  className="inline-block mr-2"
                />
                <span className="bg-linear-to-tr from-white via-[#c2d7ff] to-[#0097ff] bg-clip-text text-transparent">
                  Protection, Built for DeFi
                </span>
              </h2>
              <Card>
                <CardHeader>
                  <HugeiconsIcon
                    icon={ShieldCheck}
                    size={24}
                    color="#0097ff"
                    strokeWidth={1.5}
                    className=" mr-2"
                  />
                  <CardTitle>Short-Term Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Designed specifically for the first 15 minutes after entry.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HugeiconsIcon
                    icon={EnergyIcon}
                    size={24}
                    color="#0097ff"
                    strokeWidth={1.5}
                  />
                  <CardTitle>Automatic Settlement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    No manual claims. Smart contracts handle the policy
                    lifecycle.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HugeiconsIcon
                    icon={ChartIcon}
                    size={24}
                    color="#0097ff"
                    strokeWidth={1.5}
                  />
                  <CardTitle>Data-Driven Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Premiums are based on measured trading data and calibrated
                    risk.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HugeiconsIcon
                    icon={SearchAreaIcon}
                    size={24}
                    color="#0097ff"
                    strokeWidth={1.5}
                  />
                  <CardTitle>Risk Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Only eligible tokens and venues can receive protection.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HugeiconsIcon
                    icon={ShieldKeyIcon}
                    size={24}
                    color="#0097ff"
                    strokeWidth={1.5}
                  />
                  <CardTitle>Non-Custodial</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Your assets remain under your control.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* choose */}
        <div
          id="protections"
          className="max-w-6xl mx-auto py-10 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 md:items-center"
        >
          <div className="space-y-6 text-center">
            <Card className="overflow-x-auto px-4 text-left">
              <h2 className="text-2xl font-bold lg:text-4xl">
                <HugeiconsIcon icon={StarsIcon} className="inline-block mr-2" />
                <span className="bg-linear-to-tr from-white via-[#c2d7ff] to-[#0097ff] bg-clip-text text-transparent">
                  Choose Your Protection
                </span>
              </h2>
              <Table>
                <TableCaption>
                  Protection is subject to eligibility, entry-price
                  requirements, position limits and available capacity.
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Premium</TableHead>
                    <TableHead>Payout</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {protectionOptions.map((option) => (
                    <TableRow key={option.name}>
                      <TableCell>{option.name}</TableCell>
                      <TableCell>{option.premium}</TableCell>
                      <TableCell>{option.payout}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
          <Image
            src="/img/asset-2.png"
            alt="ApeCover"
            width="500"
            height="500"
            className="w-[90%] mx-auto"
            priority
          />
        </div>
        {/* highlights II */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              <HugeiconsIcon
                icon={EarthLockIcon}
                className="inline-block mr-2"
              />
              <span className="bg-linear-to-tr from-white via-[#c2d7ff] to-[#0097ff] bg-clip-text text-transparent">
                Protection Wherever You Trade
              </span>
            </h2>
            <p>
              ApeCover is designed as a protection layer for existing trading
              platforms and launch environments.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Launchpad / DEX → ApeCover → Trader</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Platforms can integrate ApeCover without building their own
                underwriting and protection infrastructure. The protocol already
                includes a universal router, venue adapters and partner SDK.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                size="lg"
                onClick={() =>
                  toast("Not available yet", {
                    position: "bottom-center",
                  })
                }
              >
                Integrate ApeCover
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* faq */}
        <div id="faq" className="max-w-6xl mx-auto py-10">
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold">
              <span className="bg-linear-to-tr from-white via-[#c2d7ff] to-[#0097ff] bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <Accordion
              type="multiple"
              className="max-w-2xl mx-auto"
              defaultValue={["notifications"]}
            >
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.answer}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* banner */}
        <div className="max-w-6xl mx-auto py-10 space-y-6">
          <Card className="relative lg:h-[40vh] flex flex-col justify-center">
            <HeroBackground />
            <CardContent className="text-center">
              <span className="text-4xl font-bold">Ape Into the Next One.</span>
              <CardDescription>
                Don't eliminate the risk. Make the risk measurable.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center items-center gap-2">
              <Button
                size="lg"
                onClick={() =>
                  toast("Not available yet", {
                    position: "bottom-center",
                  })
                }
              >
                Get Protected
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  toast("Not available yet", {
                    position: "bottom-center",
                  })
                }
              >
                Integrate Cover
              </Button>
            </CardFooter>
          </Card>
          <div className="text-center">
            <span className="font-bold block">APECOVER</span>
            <span>Protection infrastructure for on-chain trading.</span>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="w-full pt-0.5 bg-linear-to-r from-black via-[#0097FF] to-black">
        <div className="w-full bg-black px-4 sm:px-6 lg:px-8 py-10">
          <footer className="max-w-6xl mx-auto space-y-6 py-10 text-center">
            <div className="flex justify-center flex-col items-center gap-2 md:flex-row md:justify-between">
              <Link href="/">
                <Image
                  src="/img/apecover-text-logo.png"
                  alt="ApeCover"
                  width="170"
                  height="170"
                  className="img cursor-pointer"
                />
              </Link>
              <div className="flex flex-col justify-center items-center text-center md:justify-end md:items-end md:text-right">
                <span className="font-bold">
                  Ape boldly, Risk Smarter & Stay Covered.
                </span>
                <span>
                  On-chain protection for the riskiest minutes of a token
                  launch.
                </span>
              </div>
            </div>
            <Card className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
              <div>
                <span className="font-bold">Product</span>
                <ul>
                  <li>
                    <Link href="#how">How it works?</Link>
                  </li>
                  <li>
                    <Link href="#protection">Protection</Link>
                  </li>
                  <li>
                    <Link href="#faq">FAQs</Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Developers</span>
                <ul>
                  <li>
                    <Link href="/">Docs</Link>
                  </li>
                  <li>
                    <Link href="/">SDK</Link>
                  </li>
                  <li>
                    <Link href="/">API</Link>
                  </li>
                  <li>
                    <Link href="/">GitHub</Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Partners</span>
                <ul>
                  <li>
                    <Link href="/">Integrate ApeSafe</Link>
                  </li>
                  <li>
                    <Link href="/">Partner Portal</Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Community</span>
                <ul>
                  <li>
                    <Link href="/">Telegram</Link>
                  </li>
                  <li>
                    <Link href="/">X</Link>
                  </li>
                  <li>
                    <Link href="/">Discord</Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Legal</span>
                <ul>
                  <li>
                    <Link href="/">Terms</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/">Risk Disclosure</Link>
                  </li>
                </ul>
              </div>
            </Card>
            <div className="text-center overflow-hidden">
              <span className="font-bold text-6xl bg-linear-to-br from-black via-[#07456e] to-black bg-clip-text text-transparent lg:text-[200px]">
                APECOVER
              </span>
            </div>
            <span className="font-light text-xs">
              © 2026 ApeCover. All rights reserved.
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
