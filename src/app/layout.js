import "../styles/globals.css";
// export default function RootLayout({ children }) {
//   return <html><body>{children}</body></html>;
// }
export const metadata = {
  title: "The Pizzeria",
  description: "Authentic Italian Pizza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
  <link rel="icon" href="/images/favicon-icon.png" />
  <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700&family=Inter:wght@800&display=swap"
          rel="stylesheet"/>
          <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
          <link href='https://fonts.googleapis.com/css?family=Source Sans Pro' rel='stylesheet'></link>
      </head>

      <body>{children}</body>
    </html>
  );
}