"use client";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  ArrowRightIcon,
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import Lottie from "lottie-react";
import contactAnimation from "@public/en/message_en.json";
import smmAnimation from "@public/en/message_smm_en.json";
import webDevAnimation from "@public/web_development.json";
import leadsAnimation from "@public/leads.json";
import { cn } from "@/lib/utils";
import HoverControlledLottie from "./HoverControlledLottie";
import { Button } from "./button";
import { img } from "motion/react-client";
import HoverReverseLottie from "./HoverReverseLottie";
import { HandPlatter, Newspaper } from "lucide-react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name?: string;
  className: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

export const BentoGrid = ({
  children,
  className,
  ...props
}: BentoGridProps) => {
  return (
    <div
      className={cn("grid w-full auto-rows-auto grid-cols-3 gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        {Icon && (
          <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
        )}
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
      )}
    >
      <Button
        variant="link"
        asChild
        size="sm"
        className="pointer-events-auto p-0"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300  group-hover:dark:bg-neutral-800/10" />
  </div>
);

// --- From BentoGrid.tsx ---

export function BentoDemo() {
  const features = [
    {
      Icon: FileTextIcon,
      name: "Marketing (Lead Generation Focused)",
      description:
        "Satış odaklı dijital kampanyalarla markanız için nitelikli müşteri adayları oluşturuyoruz.",
      href: "/",
      cta: "Sayfaya git",
      background: (
        <HoverReverseLottie
          animationData={leadsAnimation}
          className="absolute inset-0 h-full w-[200%] pr-96  object-cover "
          speed={1.2}
        />
      ),
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: CalendarIcon,
      name: "CRM Sistemleri",
      description:
        "Satış ve müşteri yönetiminizi tek platformda toplayan akıllı CRM çözümleri sunuyoruz.",
      href: "/",
      cta: "Sayfaya git",
      background: <img className="" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "SMM (Social Media Management)",
      description:
        "Sosyal medyada markanızın sesini güçlendiriyor, içerik ve reklam süreçlerini yönetiyoruz.",
      href: "/",
      cta: "Sayfaya git",
      background: (
        <HoverReverseLottie
          animationData={smmAnimation}
          className="absolute inset-0 h-full w-full object-cover"
          speed={1.2}
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4",
    },
    {
      Icon: InputIcon,
      name: "Web Development",
      description: "Dijital varlığınızı güçlendiriyoruz.",
      href: "/",
      cta: "Sayfaya git",
      background: (
        <HoverReverseLottie
          animationData={webDevAnimation}
          className="absolute inset-0 h-full w-full object-cover"
          speed={1.2}
        />
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    },
    {
      description: "Gün içerisinde konuşalım.",
      name: "a",
      href: "/iletisim",
      cta: "İletişime Geç",
      background: (
        <HoverControlledLottie
          animationData={contactAnimation}
          className="h-1"
        />
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
  ];

  return (
  <section>
  <div className="mx-auto mb-14 max-w-xl text-center">
        <div className="gap-2 border-1 inline-flex p-1 px-3 rounded-full mb-4">
          <HandPlatter /> Our Services
        </div>
        <h2 className="from-primary mb-3 bg-gradient-to-r to-green-500 bg-clip-text text-6xl font-bold text-transparent">
          Our Key Services
        </h2>
        <p className="text-muted-foreground text-sm">
          There is the important services
        </p>
      </div>
      <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  </section>
  );
}
