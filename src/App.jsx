import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoutes/AppRoutes";
import AuthProvider from "./Provider/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
