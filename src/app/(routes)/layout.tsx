import { FontProvider } from "@/components/providers/fontProvider";
import { QueryProvider } from "@/components/providers/queryProvider";
import type { Metadata } from "next";
import { ChildrenProp } from "@/app/_types";
import { Navbar } from "@/components/ui/nav";
import { Toaster } from "react-hot-toast";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Slash Task",
  description: "Slash Task - Blog Application",
};

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <html lang="en">
      <FontProvider>
        <QueryProvider>
          <Navbar />
          {children}
          <Toaster />
        </QueryProvider>
      </FontProvider>
    </html>
  );
}
