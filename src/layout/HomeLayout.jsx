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


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';


const HomeLayout = () => {
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
