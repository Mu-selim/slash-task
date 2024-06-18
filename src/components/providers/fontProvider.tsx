import { ReactNode } from "react";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { clsx } from "clsx";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const niconne = LocalFont({
  src: "../../assets/fonts/niconne.ttf",
  variable: "--font-niconne",
  display: "swap",
});

type FontProviderProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export const FontProvider = ({ children, className }: FontProviderProps) => (
  <body
    className={clsx(inter.variable, niconne.variable,  "font-inter overflow-x-hidden", { className: className })}
  >
    {children}
  </body>
);
