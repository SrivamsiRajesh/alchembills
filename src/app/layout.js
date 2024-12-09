import "./globals.css";

export const metadata = {
  title: "Alchem Bills",
  description: "Your GenZ Finance Sensei",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
