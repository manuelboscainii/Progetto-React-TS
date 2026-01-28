# Progetto-React-TS

Progetto in React + TypeScript.
Questo repository contiene una piccola applicazione per la gestione di una lista di gatti (visualizzazione, adozione...) e la sua implementazione.

---

Indice
---
- Descrizione
- Requisiti
- Installazione ed esecuzione
- Struttura del progetto
- Come collegare una repository remota (GitHub)
- Elenco delle funzionalità completate

---

➤ Descrizione

Questa applicazione è un template didattico in React + TypeScript. 
Quello che volevo andare a creare era una SPA (Single Page Application) che permettesse di visualizzare una lista di gatti, 
con la possibilità di adottarli e visualizzare alcune informazioni aggiuntive.
Oltre alla chiamata alla API pubblica per ottenere i dati dei gatti, ho strutturato l'applicazione
in più pagine (Home, Lista Gatti, Adozione, About Us, Contact) navigabili tramite React Router.
Per la parte di css e del footer mi sono fatto dare una mano da copilot, facendomi spiegare passo passo cosa stava facendo e le funzioni che stava implementando. 

---

➤ Requisiti

- Node.js LTS
- npm (fornito con Node.js)
- macOS/Linux/Windows con shell (qui sono mostrati comandi per zsh)

---

➤ Installazione (locale)

1. Apri una shell nella cartella del progetto:

```zsh
cd "/Users/manuelboscaini/Desktop/Boscaini - Progetto React + TS/my-app"
```

2. Installa le dipendenze:

```zsh
npm install
```

3. Avvia l'ambiente di sviluppo:

```zsh
npm run dev
```

---

➤ Struttura del progetto (principali cartelle/file)

- `src/App.tsx` — root component
- `src/Pages/` — pagine (Home, ListaGatti, Adozione, AboutUs, Contact, 404)
- `src/Core/Hook/` — hook personalizzati (es. `useFetch.ts`)
- `src/Core/Models/` — modelli/typedefs (es. `TListaGatti.ts`)
- `src/Components/` — componenti riutilizzabili (es. `Footer.tsx`)
- `src/assets/` — immagini e risorse statiche
- `public/` — file serviti staticamente

---

➤ Collegare il progetto a GitHub (linkare a una repository esistente)

Se vuoi collegare questo progetto a una repository remota esistente (ad es. GitHub), i passaggi principali sono:

1. Inizializza git se non è presente:

```zsh
git init
```

2. Aggiungi tutti i file e fai commit:

```zsh
git add .
git commit -m "Initial commit"
```

3. Aggiungi il remote (HTTPS o SSH):

```zsh
# HTTPS
git remote add origin https://github.com/username/repo.git

# oppure SSH
git remote add origin git@github.com:username/repo.git
```

4. Se il remote è vuoto:

```zsh
git branch -M main
git push -u origin main
```

5. Se il remote ha già una storia e vuoi unirla senza sovrascriverla:

```zsh
git pull origin main --allow-unrelated-histories
# risolvi conflitti se presenti
git push -u origin main
```

---

➤ Elenco delle funzionalità completate:
- Setup del progetto in React + TypeScript con script di sviluppo (npm run dev).
- Single Page Application (SPA) con routing tramite React Router.
- Pagine principali implementate in `src/Pages/`: Home, ListaGatti, Adozione, AboutUs, Contact e pagina 404.
- Integrazione con API pubblica per dati sui gatti e le loro immagini.
- Hook personalizzato `useFetch.ts` in `src/Core/Hook/` per chiamate API e gestione stato di caricamento/errore.
- Tipi/modelli in `src/Core/Models/` (es. `TListaGatti.ts`) per tipizzazione dei dati.
- Componenti riutilizzabili in `src/Components/` (es. `Footer.tsx`) e styling CSS integrato.
- Form di adozione attraverso la pagina Adozione.
- Documentazione: README.md con istruzioni di installazione, esecuzione e collegamento a GitHub.

---

➤ Licenza

MIT License

---

➤ Autore

Manuel Boscaini

---