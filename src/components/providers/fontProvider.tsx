import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { clsx } from "clsx";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

type FontProviderProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export const FontProvider = ({ children, className }: FontProviderProps) => (
  <body
    className={clsx(inter.variable, "font-inter", { className: className })}
  >
    {children}
  </body>
);
