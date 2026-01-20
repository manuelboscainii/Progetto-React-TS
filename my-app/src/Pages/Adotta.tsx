
import React, { useState } from "react";

type FormState = {
    nome: string;
    cognome: string;
    email: string;
    telefono: string;
};

export default function Adotta() {
    const [form, setForm] = useState<FormState>({
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
    });

    const [error, setError] = useState<Partial<FormState>>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (values: FormState) => {
        const e: Partial<FormState> = {};
        if (!values.nome.trim()) e.nome = "Nome richiesto";
        if (!values.cognome.trim()) e.cognome = "Cognome richiesto";
        if (!values.email.trim()) e.email = "Email richiesta";
        if (!values.telefono.trim()) e.telefono = "Telefono richiesto";
        return e;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
        setError((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validation = validate(form);
        setError(validation);
        if (Object.keys(validation).length === 0) {
            // qui si potrebbe chiamare un'API per registrare l'adozione
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
                <h2>Conferma avvenuta</h2>
                <p>Grazie {form.nome} {form.cognome}, la tua richiesta è stata ricevuta.</p>
                <p>Riceverai una email di conferma a <strong>{form.email}</strong> e verrai contattato al numero <strong>{form.telefono}</strong>.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "0 auto", textAlign: "left" }}>
            <h2>Modulo per appuntamento adozione</h2>
            <h5>Qui potrai compilare il modulo per essere contattato e per poter venire a vedere i nostri meravigliosi amici a 4 zampe! </h5>

            <label>
                Nome
                <input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    type="text"
                    required
                    style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
                />
            </label>
            {error.nome && <div style={{ color: "red", marginTop: 4 }}>{error.nome}</div>}

            <label style={{ marginTop: 12, display: "block" }}>
                Cognome
                <input
                    name="cognome"
                    value={form.cognome}
                    onChange={handleChange}
                    type="text"
                    required
                    style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
                />
            </label>
            {error.cognome && <div style={{ color: "red", marginTop: 4 }}>{error.cognome}</div>}

            <label style={{ marginTop: 12, display: "block" }}>
                Email
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                    style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
                />
            </label>
            {error.email && <div style={{ color: "red", marginTop: 4 }}>{error.email}</div>}

            <label style={{ marginTop: 12, display: "block" }}>
                Numero di telefono
                <input
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    type="tel"
                    required
                    style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
                />
            </label>
            {error.telefono && <div style={{ color: "red", marginTop: 4 }}>{error.telefono}</div>}

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