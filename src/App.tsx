import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const LazyHomePage = React.lazy(() => import("@/pages/home/page"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LazyHomePage />} />
    </Route>,
  ),
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
