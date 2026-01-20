
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    const nav = useNavigate();

    return (
        <>
            <h1>Pagina non trovata</h1>
            <button onClick={() => nav('/home')}> Torna alla Home </button>
        </>
    );
}