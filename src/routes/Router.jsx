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
import About from '../pages/About';
import Service from '../pages/Service';
import Skills from '../pages/Skills';
import LatestWork from '../pages/LatestWork';
import ContactSection from '../pages/ContactSection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
          path: '/about',
        element: <About></About>
      },
      {
          path: '/project',
        element: <LatestWork></LatestWork>
      },
      {
          path: '/contact',
        element: <ContactSection></ContactSection>
      },
    ]
  }
]);

export default router;

