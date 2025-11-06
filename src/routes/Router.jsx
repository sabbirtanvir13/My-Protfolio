// import { createBrowserRouter } from "react-router";

// import HomeLayout from "../layout/HomeLayout";
// import Home from "../pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeLayout></HomeLayout>,
//     children:[

//       {
//         path:'/',
//         element:<Home></Home>
//       }
//     ]
    
//   },
// ]);
//  export default router




import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

export default router;

