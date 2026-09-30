import "./globals.css";

export const metadata = {
  title: "STRAVA Triathlon Club",
  description: "Swim. Bike. Run. One team. One goal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
