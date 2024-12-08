import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Account from './pages/Account';
import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import User from './pages/User';
import Product from './pages/Product';
import Categories from './pages/Categories';
import { Toaster } from 'react-hot-toast';
import ProtectedRouter from './ui/ProtectedRouter';
import SideDish from './pages/SideDish';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <ProtectedRouter>
                                <AppLayout />
                            </ProtectedRouter>
                        }
                    >
                        <Route
                            index
                            element={<Navigate replace to="dashboard" />}
                        />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/category" element={<Categories />} />
                        <Route path="/sideDish" element={<SideDish />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/user" element={<User />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
            <Toaster />
        </QueryClientProvider>
    );
}

export default App;
