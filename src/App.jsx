import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { lazy, Suspense } from "react";
import { MainLayout } from "./layouts/main-layout";
import { Loading } from "./components/loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map(({ id, path, component }) => {
              const LazyComponent = lazy(component);

              return (
                <Route
                  key={id}
                  index={!path ? true : undefined}
                  path={path}
                  element={<LazyComponent />}
                />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
