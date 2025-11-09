"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"            // adiciona .light / .dark no <html>
      defaultTheme="system"        // respeita o tema do sistema
      enableSystem
      disableTransitionOnChange    // evita flash ao trocar o tema
    >
      {children}
    </NextThemesProvider>
  );
}
