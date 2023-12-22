import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider } from './theme-provider';
import AuthProvider from './auth/authContext';
import Header from './header/header';
import 'reflect-metadata';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Memory Card',
  description: 'Video game review social media',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">      
      <body className={`${inter.className} antialiased dark bg-background`}>
        <Header/>
        <AuthProvider>
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
   
  )
}
