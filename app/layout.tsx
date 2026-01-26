// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "India Elevate",
//   description: "Empowering Next-Gen Education in India",
//   icons: {
//     icon: [
//       {
//         media: '(prefers-color-scheme: light)',
//         url: '/india-elevate-landing/logo-bg-removed.png',
//         href: '/india-elevate-landing/logo-bg-removed.png',
//       },
//       {
//         media: '(prefers-color-scheme: dark)',
//         url: '/india-elevate-landing/logo-bg-removed.png',
//         href: '/india-elevate-landing/logo-bg-removed.png',
//       },
//     ],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


//version 2

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ✅ Updated SEO Title
  title: "India Elevate | STEM, Robotics & AI Education in India",
  
  // ✅ Updated SEO Description
  description: "India Elevate is an EdTech company delivering STEM, Robotics, and AI education for schools and institutions across India.",
  
  // ✅ Added Keywords
  keywords: ["India Elevate", "STEM education India", "Robotics training", "AI education", "EdTech India"],

  // ✅ Kept your existing Favicon setup
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/india-elevate-landing/logo-bg-removed.png',
        href: '/india-elevate-landing/logo-bg-removed.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/india-elevate-landing/logo-bg-removed.png',
        href: '/india-elevate-landing/logo-bg-removed.png',
      },
    ],
  },

  // 🚀 Bonus: Better Social Media Previews (WhatsApp/LinkedIn)
  openGraph: {
    title: "India Elevate | STEM, Robotics & AI Education",
    description: "Empowering India's Next Generation with hands-on learning.",
    type: "website",
    url: "https://infoindiaelevate-tech.github.io/india-elevate-landing/",
    images: [
      {
        // Ensure this path matches one of your actual hero images
        url: "/india-elevate-landing/hero-images/img1.jpg", 
        width: 1200,
        height: 630,
        alt: "India Elevate Classroom",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}