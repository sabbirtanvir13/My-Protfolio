import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Certifications from '../pages/Certifications';
import Service from '../pages/Service';
import ContactSection from '../pages/ContactSection';
import PortfolioSection from '../components/PortfolioSection';
import ProjectDetail from '../pages/ProjectDetail';

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
        element: <About />
      },
      {
        path: '/experience',
        element: <Experience />
      },
      {
        path: '/education',
        element: <Education />
      },
      {
        path: '/certifications',
        element: <Certifications />
      },
      {
        path: '/project',
        element: <PortfolioSection />
      },
      {
        path: '/project/:id',
        element: <ProjectDetail />
      },
      {
        path: '/contact',
        element: <ContactSection />
      },
    ]
  }
]);

export default router;
