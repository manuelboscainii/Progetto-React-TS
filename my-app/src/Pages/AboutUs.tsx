// Creazione della pagina AboutUs.tsx che descrive la missione del sito di adozione gatti. 
// Contiene un titolo, un paragrafo descrittivo e un'immagine di due gatti adottati.

export default function AboutUs() {

    return (
        <>
            <h2>About Us</h2>
            <h4>Siamo nati nel 2020 con l'intenzione di trovare casa a piccole creature che sono rimaste orfane
                o che sono state meno fortunate di altre. <br />
                Da noi puoi trovare il tuo piccolo amichetto da compagnia a 4 zampe.
                Dai più stravaganti ai più tranquilli, da quelli monocolore a quelli di diversi colori! </h4>
            <img src={"/src/images/foto2.jpeg"} alt={"foto.gatti"} id={"foto2"} />
            <h4>Loro sono Nerone e Batuffolo, due fratelli inseparabili, i primi orfanelli che sono arrivati in questo centro adozione.
                Fortunatamente per loro, hanno già trovato un tetto e una famiglia che li accudisce nel migliore dei modi 😻</h4>
        </>);
}