// File ListaGatti.tsx per visualizzare una lista di gatti da adottare con immagini e link alla pagina di adozione.
// Importo il custom hook useFetch per il recupero dei dati
// Importo il modello IGatto per tipizzare i dati dei gatti
// Importo i componenti Link, Route e Routes da react-router-dom per la navigazione

import useFetch from "../Core/Hook/useFetch.ts";
import type { IGatto } from "../Core/Models/TListaGatti.ts";
import {Link, Route, Routes} from "react-router-dom";
import Adozione from "./Adotta.tsx";

// Definisco un nuovo tipo GattoUrl che estende IGatto aggiungendo la proprietà url
type GattoUrl = IGatto & { url: string };

// Componente principale della pagina ListaGatti, creo la funzione ListaGatti per mostrare una lista di gatti con immagini e link alla pagina di adozione
export default  function ListaGatti() {
    
    // Utilizzo il custom hook useFetch per recuperare i dati dei gatti dall'API
    const { data: gatti, loading, error } = useFetch<GattoUrl[]>("https://api.thecatapi.com/v1/images/search?limit=30&breed_ids=beng&api_key=live_R2tLa1J5cNoWlz7CcLMbPUFaqC5QQK7P3vETJcE4bEhjChdECHIHGrAE2hRLfptd");

    // Gestione degli stati di loading e error
    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    // Renderizzo la lista dei gatti con immagini e link alla pagina di adozione
    return (
        <div>
            <h2>Lista Gatti</h2>
            <ul>
                {/* Mappo i dati dei gatti per creare gli elementi della lista */}
                {gatti?.map((gatto) => (
                    <li key={gatto.id}> <br></br>
                        {/* Mostro l'immagine del gatto */}
                        <img src={gatto.url} alt={`Gatto ${gatto.id}`} width={200} /><br></br>
                        {/* Link alla pagina di adozione */}
                        <button>
                            <Link to='/adotta'>Adotta</Link>
                            <Routes>
                                <Route path="/adotta" element={<Adozione />} />
                            </Routes>
                        </button> 
                    </li>
                ))}
            </ul>
        </div>
    );
}
