// Creazione della pagina Adotta.tsx che contiene un modulo per prenotare un appuntamento di adozione gatti. 
// Il modulo richiede nome, cognome, email e numero di telefono. 
// Al momento dell'invio, viene mostrato un messaggio di conferma con i dettagli inseriti.

import React, { useState } from "react";

// Definisco la struttura dei dati da richiedere nel modulo
type FormState = {
    nome: string;
    cognome: string;
    email: string;
    telefono: string;
};

// Componente principale della pagina Adotta, creo la funzione Adotta per permettere all'utente di prenotare un appuntamento di adozione gatti
export default function Adotta() {

    // Stato del modulo
    const [form, setForm] = useState<FormState>({
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
    });

    // Stato degli errori di validazione
    const [error, setError] = useState<Partial<FormState>>({});
    const [submitted, setSubmitted] = useState(false);

    // Funzione di validazione del modulo, controllo che tutti i campi siano compilati
    const validate = (values: FormState) => {
        const e: Partial<FormState> = {};
        if (!values.nome.trim()) e.nome = "Nome richiesto";
        if (!values.cognome.trim()) e.cognome = "Cognome richiesto";
        if (!values.email.trim()) e.email = "Email richiesta";
        if (!values.telefono.trim()) e.telefono = "Telefono richiesto";
        return e;
    };

    // Gestione del cambiamento dei campi del modulo, aggiorna lo stato del modulo e resetto gli errori
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
        setError((prev) => ({ ...prev, [name]: undefined }));
    };

    // Gestione dell'invio del modulo, valida i dati e mostra il messaggio di conferma
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validation = validate(form);
        setError(validation);
        if (Object.keys(validation).length === 0) {
            setSubmitted(true);
        }
    };

    // Se il modulo è stato inviato con successo, mostra il messaggio di conferma
    if (submitted) {
        return (
            <div>
                <h2>Conferma avvenuta</h2>
                <p>Grazie {form.nome} {form.cognome}, la tua richiesta è stata ricevuta.</p>
                <p>Riceverai una email di conferma a <strong>{form.email}</strong> e verrai contattato al numero <strong>{form.telefono}</strong>.</p>
            </div>
        );
    }

    // Renderizzo il modulo di adozione
    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "0 auto", textAlign: "left" }}>
            <h2>Modulo per appuntamento adozione</h2>
            <h5>Qui potrai compilare il modulo per essere contattato e per poter venire a vedere i nostri meravigliosi amici a 4 zampe! </h5>

            {/* Campo Nome */}
            <label>
                Nome
                {/* Input per il nome */}
                <input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    type="text"
                    required
                    style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
                />
            </label>
            {/* Messaggio di errore per il campo Nome */}
            {error.nome && <div style={{ color: "red", marginTop: 4 }}>{error.nome}</div>}

            {/* Campo Cognome */}
            <label style={{ marginTop: 12, display: "block" }}>
                Cognome
                {/* Input per il cognome */}
                <input
                    name="cognome"
                    value={form.cognome}
                    onChange={handleChange}
                    type="text"
                    required
                    style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
                />
            </label>
            {/* Messaggio di errore per il campo Cognome */}
            {error.cognome && <div style={{ color: "red", marginTop: 4 }}>{error.cognome}</div>}

            {/* Campo Email */}
            <label style={{ marginTop: 12, display: "block" }}>
                Email
                {/* Input per l'email */}
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                    style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
                />
            </label>
            {/* Messaggio di errore per il campo Email */}
            {error.email && <div style={{ color: "red", marginTop: 4 }}>{error.email}</div>}

            <label style={{ marginTop: 12, display: "block" }}>
                Numero di telefono
                {/* Input per il numero di telefono */}
                <input
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    type="tel"
                    required
                    style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
                />
            </label>
            {/* Messaggio di errore per il campo Telefono */}
            {error.telefono && <div style={{ color: "red", marginTop: 4 }}>{error.telefono}</div>}

            {/* Pulsante di invio */}
            <button
                type="submit"
                style={{
                    marginTop: 16,
                    padding: "10px 16px",
                    background: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                }}
            >
                Prenota Appuntamento
            </button>
        </form>
    );
}