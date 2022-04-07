import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Loading } from "./components/Loading";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const Add = lazy(() => import(/* webpackChunkName: "add" */ "./pages/Add"));

function App() {
  const state = {
    title: "EMDB",
    nav: [
      { url: "/", label: "Home" },
      { url: "/add", label: "Add movie" },
      { url: "/random", label: "Random" },
    ],
  };

  return (
    <>
      <Nav title={state.title} data={state.nav} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/add"
            element={
              <Suspense fallback={<Loading />}>
                <Add />
              </Suspense>
            }
          />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
