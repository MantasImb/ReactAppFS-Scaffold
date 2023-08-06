// import { trpc } from "./utils/trpc";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  // const postQuery = trpc.post.test.useQuery();

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
