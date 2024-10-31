import type { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Meta } from './components/meta';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class">
      <Meta />
      <div className="flex min-h-screen flex-col dark:bg-black dark:text-white">
        <Header />
        <main className="wrapper">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
