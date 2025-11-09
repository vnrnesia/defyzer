"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState, useEffect } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

/* === ANA NAVBAR === */
export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-10 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

/* === NAV BODY === */
export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34,42,53,0.06)"
          : "none",
        width: visible ? "90%" : "100%",
        y: visible ? 10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full bg-transparent py-2  lg:flex dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

/* === NAV ITEMS (ORTADA SABİT MENÜ + FADE GEÇİŞ) === */
export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const dropdowns: Record<
    string,
    { href: string; img: string; title: string; desc: string }[]
  > = {
    Hizmetler: [
      {
        href: "/hizmetler/web",
        img: "/services/web.jpg",
        title: "Web Tasarımı",
        desc: "Modern ve hızlı web siteleri",
      },
      {
        href: "/hizmetler/seo",
        img: "/services/seo.jpg",
        title: "SEO Optimizasyonu",
        desc: "Google'da üst sıralara çıkın",
      },
    ],
    İletişim: [
      {
        href: "/iletisim/destek",
        img: "/contact/support.jpg",
        title: "Destek",
        desc: "Teknik yardım ve müşteri hizmeti",
      },
      {
        href: "/iletisim/ofisler",
        img: "/contact/office.jpg",
        title: "Ofislerimiz",
        desc: "Bizi yerinde ziyaret edin",
      },
    ],
  };

  const eligible = new Set(Object.keys(dropdowns));

  // aktif link & yön bilgisi (sağa/sola slide için)
  const [active, setActive] = useState<string | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const prevIdx = useRef<number | null>(null);

  // menünün kapanmaması için hover-zonu & küçük gecikme
  const [menuOpen, setMenuOpen] = useState(false);
  const hideTimer = useRef<NodeJS.Timeout | null>(null);

  const openMenu = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setMenuOpen(true);
  };

  const scheduleClose = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setMenuOpen(false);
      setActive(null);
      setActiveIdx(null);
    }, 150); // küçük gecikme flicker önler
  };

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const onLinkEnter = (name: string, idx: number) => {
    openMenu();
    prevIdx.current = activeIdx ?? idx;
    setActive(name);
    setActiveIdx(idx);
  };

  // dış kapsayıcı: linkler + dropdown aynı hover alanında
  return (
    <div
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-6 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex",
        className
      )}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      {/* Üst linkler */}
      {items.map((item, idx) => (
        <div key={item.name} className="relative">
          <a
            href={item.link}
            onMouseEnter={() => onLinkEnter(item.name, idx)}
            onClick={onItemClick}
            className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            {activeIdx === idx && eligible.has(item.name) && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        </div>
      ))}

      {/* Ortada sabitlenen dropdown kabı (kapanmaz, sadece içerik değişir) */}
      {menuOpen && active && eligible.has(active) && (
        <div className="pointer-events-auto absolute top-[calc(100%+1.2rem)] left-1/2 -translate-x-1/2 z-50">
          <div className="bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-2xl shadow-xl p-4 w-[340px]">
            {/* İçerik alanını sabit yükseklikte tutarak cross-fade'i pürüzsüz yapıyoruz */}
            <div className="relative h-[152px]"> 
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    x:
                      prevIdx.current !== null && activeIdx !== null
                        ? activeIdx > prevIdx.current
                          ? 20
                          : -20
                        : 10,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x:
                      prevIdx.current !== null && activeIdx !== null
                        ? activeIdx > prevIdx.current
                          ? -20
                          : 20
                        : -10,
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 grid grid-cols-2 gap-4"
                >
                  {dropdowns[active].map((d) => (
                    <DropdownCard
                      key={d.title}
                      href={d.href}
                      img={d.img}
                      title={d.title}
                      desc={d.desc}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* === DROPDOWN KART BİLEŞENİ === */
const DropdownCard = ({
  href,
  img,
  title,
  desc,
}: {
  href: string;
  img: string;
  title: string;
  desc: string;
}) => (
  <a
    href={href}
    className="flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-neutral-800 p-2 rounded-lg transition"
  >
    <img
      src={img}
      alt={title}
      className="w-12 h-12 object-cover rounded-md shadow-sm"
    />
    <div>
      <p className="font-semibold text-black dark:text-white text-sm">
        {title}
      </p>
      <p className="text-xs text-gray-500 dark:text-neutral-400">{desc}</p>
    </div>
  </a>
);

/* === MOBİL NAVBAR === */
export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 20px rgba(0,0,0,0.05)"
          : "none",
        borderRadius: visible ? "1rem" : "2rem",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 40,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children }: MobileNavHeaderProps) => (
  <div className="flex w-full flex-row items-center justify-between">
    {children}
  </div>
);

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={cn(
          "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-lg dark:bg-neutral-950",
          className
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) =>
  isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );

/* === LOGO === */
export const NavbarLogo = () => (
  <a
    href="/"
    className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black dark:text-white"
  >
    <img src="/NavbarLogo.png" alt="logo" width={100} height={130} />
  </a>
);

/* === BUTTON === */
export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-white text-black shadow-[0_0_24px_rgba(0,0,0,0.1)]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_10px_rgba(0,0,0,0.2)]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-inner",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
