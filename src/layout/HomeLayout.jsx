// import React from 'react';
// import Navbar from '../components/Navbar';
// import { Outlet } from 'react-router';
// import Footer from '../components/Footer';

// const HomeLayout = () => {
//     return (
//         <div>
//             <nav>
//                 <Navbar></Navbar>
//             </nav>
//             <main>
//                 <Outlet></Outlet>

//             </main>

//             <footer>
//                <Footer></Footer>
//             </footer>
//         </div>
//     );
// };

// export default HomeLayout;


import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router';
import { scrollToSection } from '../utils/scrollToSection';


const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      scrollToSection(sectionId, 300);
    }
  }, [location.pathname, location.hash]);

  return (
    <div  style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main  style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
