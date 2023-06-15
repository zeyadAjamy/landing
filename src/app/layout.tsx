import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "DiagnoQuest",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-c1">
        <Header />
        {children}
      </body>
    </html>
  );
}
