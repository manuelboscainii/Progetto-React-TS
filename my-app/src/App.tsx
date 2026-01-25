// Pagina principale dell'applicazione di adozione gatti con routing e gestione delle query.
// Importo i moduli necessari da React, React Router e React Query.
// Configuro il client di React Query con opzioni di default per le query.
// Definisco il componente principale App che include il provider di React Query, il router e le rotte per le pagine.
// Importo i moduli necessari per il routing e la gestione delle query

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from "./Pages/Home.tsx";
import AboutUs from "./Pages/AboutUs.tsx";
import ListaGatti from "./Pages/ListaGatti.tsx";
import Contact from "./Pages/Contacts.tsx";
import Adozione from "./Pages/Adotta.tsx";
import PageNotFound from "./Pages/404.tsx";
import Footer from "./Components/Footer.tsx";

// Configuro il client di React Query con opzioni di default
const client = new QueryClient({
    defaultOptions: {
        queries:
        {
            retryDelay: 1000,
            retry: 3,
        }
    }
});

// Componente principale dell'applicazione, creo la funzione App per gestire il routing e le query
function App() {

    return (
        <>
            {/* Fornisco il client di React Query a tutta l'applicazione */}
            <QueryClientProvider client={client}>

                <h1 id={"adozione-gatti"}>🐱 ADOZIONE GATTI 🐱</h1>

                {/* Configuro il router per gestire la navigazione tra le pagine */}
                <BrowserRouter>
                    <nav>
                        <Link to='/home'>Home</Link>
                        <Link to='/listagatti'>Lista Gatti</Link>
                        <Link to='/aboutus'>About Us</Link>
                        <Link to='/contact'>Contacts</Link>
                        <Link to='/adotta'>Adotta</Link>
                    </nav>

                    {/* Definisco le rotte per le diverse pagine dell'applicazione */}
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

            <Footer />
        </>);
}

export default App;