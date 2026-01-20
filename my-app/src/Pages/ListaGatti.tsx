
import useFetch from "../Core/Hook/useFetch.ts";
import type { IGatto } from "../Core/Models/TListaGatti.ts";
import {Link, Route, Routes} from "react-router-dom";
import Adozione from "./Adotta.tsx";

type GattoUrl = IGatto & { url: string };

export default  function ListaGatti() {
    const { data: gatti, loading, error } = useFetch<GattoUrl[]>("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_R2tLa1J5cNoWlz7CcLMbPUFaqC5QQK7P3vETJcE4bEhjChdECHIHGrAE2hRLfptd");

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <div>
            <h2>Lista Gatti</h2>
            <ul>
                {gatti?.map((gatto) => (
                    <li key={gatto.id}>
                        <img src={gatto.url} alt={`Gatto ${gatto.id}`} width={200} />
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
