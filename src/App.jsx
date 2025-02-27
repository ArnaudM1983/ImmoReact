
import HomePage from './routes/homePage/homePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './routes/listPage/listPage';
import Layout from './routes/layout/layout';
import SinglePage from './routes/singlePage/singlePage';
import ProfilePage from './routes/profilePage/profilePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/list",
        element: <ListPage />
      },
      {
        path: "/:id",
        element: <SinglePage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },
    ]
  }
]);

function App() {
  return (
    //<div className="layout">
    //  <div className="navbar">
    //    <Navbar />
    //  </div>
    //  <div className="content">
    //    <HomePage />
    //  </div>
    //</div>
    <RouterProvider router = { router }/>
  )
}

export default App