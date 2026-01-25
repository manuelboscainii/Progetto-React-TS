// Creo il componente rutilizzabile Footer che mostra le informazioni di copyright e link utili.

import React from "react";

// Definisco le proprietà del componente Footer
type FooterProps = {
    year?: number;
    className?: string;
};

// Componente Footer che mostra le informazioni di copyright e autore
const Footer: React.FC<FooterProps> = ({ year = new Date().getFullYear(), className = "" }) => {
    
    // Renderizzo il footer con le informazioni
    return (

        // Struttura del footer
        <footer className={className} aria-label="footer-sito">
            <div style={{ textAlign: "center", padding: "12px 8px", fontSize: 14 }}>
                <div style={{ fontWeight: 600 }}>Adozione Gatti</div>
                <div style={{ marginTop: 6, color: "#6b7280" }}>© {year} — Tutti i diritti riservati</div>
                <div style={{ marginTop: 8 }}> Manuel Boscaini </div>
            </div>
        </footer>
    );
};

export default Footer;
