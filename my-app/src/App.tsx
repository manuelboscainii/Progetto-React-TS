
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from "./Pages/Home.tsx";
import AboutUs from "./Pages/AboutUs.tsx";
import ListaGatti from "./Pages/ListaGatti.tsx";
import Contact from "./Pages/Contacts.tsx";
import Adozione from "./Pages/Adotta.tsx";
import PageNotFound from "./Pages/404.tsx";

const client = new QueryClient({
    defaultOptions: {
        queries:
            {
                retryDelay: 1000,
                retry: 3,
            }
    }
});

function App(){

    return(
        <>
            <QueryClientProvider client = {client}>

            <h1>🐱 ADOZIONE GATTI 🐱</h1>

            <BrowserRouter>
                <nav>
                    <Link to ='/home'>Home</Link>
                    <Link to ='/listagatti'>Lista Gatti</Link>
                    <Link to ='/aboutus'>About Us</Link>
                    <Link to ='/contact'>Contacts</Link>
                    <Link to ='/adotta'>Adotta</Link>
                </nav>

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/listagatti" element={<ListaGatti />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/adotta" element={<Adozione />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>

            </BrowserRouter>
            </QueryClientProvider>

        </>);
}

export default App;