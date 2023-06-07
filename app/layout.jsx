import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

const RootLayout = ({ children }) => {
  const metadata = {
    title: "Promptompia",
    description: "Page made with NextJS",
  };

  return (
    <html lang="es">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
