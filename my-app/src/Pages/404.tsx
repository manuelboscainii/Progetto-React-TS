// Pagina 404.tsx che mostra un messaggio di errore e un pulsante per tornare alla home.
// Se l'url inserito non dovesse corrispondere a nessuna pagina esistente, l'utente verrà reindirizzato a questa pagina.

import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    
    // Hook per la navigazione tra le pagine
    const nav = useNavigate();

    return (
        <>
            <h3>Errore 404: La pagina che stai cercando non esiste.</h3>
            {/* Pulsante per tornare alla home */}
            <button onClick={() => nav('/home')}> Torna alla Home </button>
        </>
    );
}