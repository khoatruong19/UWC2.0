import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import { routes } from './routes';
import MCPInfoModal from './components/modals/MCPInfoModal';
import Calendar from './components/TAModal';
import { janitorSchedule } from './components/TAModal/EmployeeList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.component;
            const Layout = route.auth ? AuthLayout : MainLayout;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
