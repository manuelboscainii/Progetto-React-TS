
import { useEffect, useState } from "react";

/**
 * IN: url: string
 * OUT:
 *      - dati
 *      - loading
 *      - error
 */

/**
 * 
 * Custom hook per il fetch dei dati da un URL
 * @param url - l'URL da cui effettuare il fetch
 * @returns Un oggetto contenente i dati, lo stato di loading e l'eventuale errore.
 */

export default function useFetch<T>(url: string) {

    // DATI
    const [data, setData] = useState<T>(); // T = generics

    // ERRORI
    const [error, setError] = useState<string>();

    // LOADING
    const [loading, setLoading] = useState<boolean>();

    // Funzione per il fetch dei dati
    async function getData() {

        // Imposto lo stato di loading a true
        setLoading(true);

        // Resetto errori e dati 
        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error("Si è verificato un errore nel recupero dei dati");
            }

            const data: T = await res.json();

            setData(data);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return { data, loading, error }
}