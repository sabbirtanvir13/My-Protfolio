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
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Certifications from '../pages/Certifications';
import Service from '../pages/Service';

// import LatestWork from '../pages/LatestWork';
import ContactSection from '../pages/ContactSection';
import PortfolioSection from '../components/PortfolioSection';

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
          path: '/experience',
        element: <Experience></Experience>
      },
      {
          path: '/education',
        element: <Education></Education>
      },
      {
          path: '/certifications',
        element: <Certifications></Certifications>
      },
      {
          path: '/project',
        element:<PortfolioSection></PortfolioSection>
      },
      {
          path: '/contact',
        element: <ContactSection></ContactSection>
      },
    ]
  }
]);

export default router;

