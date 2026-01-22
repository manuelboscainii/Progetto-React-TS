// Pagina Home.tsx che contiene un titolo, una descrizione e un'immagine di un gatto. 
// La pagina accoglie gli utenti e li invita a esplorare il sito per trovare il loro nuovo amico a quattro zampe.

export default function Home() {

    return (
        <>
            <h2>Home Page</h2>
            <h4>Qui ci sono baffi curiosi, fusa infinite e gatti pronti a trovare finalmente casa. <br/>
                Ogni adozione è un nuovo inizio: per loro, ma soprattutto per te.</h4>
            {/* Immagine di un gatto per rendere la pagina più accogliente */}
            <img src={"/src/images/foto3.jpeg"} alt={"foto gatto"} id={"foto3"}/>
        </>
    );
}