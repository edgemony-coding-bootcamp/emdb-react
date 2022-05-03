import { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Loading } from "./components/Loading";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Alert } from "./components/Alert";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const Add = lazy(() => import(/* webpackChunkName: "add" */ "./pages/Add"));
const Edit = lazy(() => import(/* webpackChunkName: "edit" */ "./pages/Edit"));

function App() {
  const state = {
    title: "EMDB",
    nav: [
      { url: "/", label: "Home" },
      { url: "/add", label: "Add movie" },
    ],
  };

  const [alert, setAlert] = useState({
    visible: false,
    content: "",
  });

  const editSuccess = () => {
    setAlert({
      visible: true,
      content: "scheda aggiornata correttamente",
    });
  };

  const hideAlert = () => {
    setAlert({
      visible: false,
      content: "",
    });
  };

  return (
    <>
      <Nav title={state.title} data={state.nav} />
      <main>
        <Alert
          visible={alert.visible}
          content={alert.content}
          timeoutCallback={hideAlert}
        />
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
          <Route
            path="/edit/:id"
            element={
              <Suspense fallback={<Loading />}>
                <Edit editCallback={editSuccess} />
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
