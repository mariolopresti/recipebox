# 🍽️ RecipeBox – Raccolta di Ricette

Una web app sviluppata in **Angular 21** per la consultazione e la gestione di ricette culinarie, con un sistema completo di CRUD e autenticazione.

---

## 👥 Team
| Nome Cognome | Ruolo | Email |
| :--- | :--- | :--- |
| **Mario Lo Presti** | Frontend/Backend Developer | mlopresti084@gmail.com |
| **Gaetano Nicotra** | Frontend/Backend Developer | nicotragaetano10@gmail.com |

---

## 📌 Descrizione del progetto
RecipeBox consente agli utenti di esplorare un catalogo di ricette culinarie e gestire i propri piatti preferiti. L'applicazione si concentra sull'esperienza utente e sull'utilizzo delle ultime feature di Angular.

**Cosa puoi fare:**
* 🌐 Visualizzare un catalogo pubblico di ricette.
* ⚖️ Filtrare le ricette per livello di difficoltà.
* 📖 Accedere ai dettagli tecnici di ogni preparazione.
* ➕ Aggiungere nuove ricette (area riservata).
* 🗂️ Gestire il proprio ricettario personale.

### 🎯 Obiettivo
Mettere in pratica le funzionalità moderne di Angular (Signals, Standalone Components, New Control Flow) per fornire una piattaforma semplice, intuitiva e performante.

---

## ⚙️ Funzionalità principali
- [x] **Lista ricette:** Visualizzazione asincrona dei contenuti.
- [x] **Routing Dinamico:** Dettaglio ricetta su `/recipes/:id`.
- [x] **Filtro Custom:** Direttiva strutturale personalizzata per la difficoltà.
- [x] **Forms:** Inserimento ricette tramite *Template-driven forms*.
- [x] **Signals:** Badge difficoltà gestiti con `input()` e `output()` signals.
- [x] **Sicurezza:** Autenticazione utente e protezione delle rotte tramite `authGuard`.
- [x] **Full CRUD:** Gestione completa dei dati tramite Angular Service e Fetch API.

---

## 🧱 Tecnologie utilizzate

### Frontend
* **Angular 21**
* **TypeScript**
* **HTML5 / CSS3**

### Backend & Database
* **Node.js + Express** 
* **MySQL** ospitato su **FreeSQLDatabase**

---

## 🗺️ Routing dell'app
| Path | Componente | Accesso |
| :--- | :--- | :--- |
| `/` | Lista ricette | Pubblico |
| `/recipes/:id` | Dettaglio ricetta | Pubblico |
| `/recipe-form` | Creazione ricetta | **Protetto** |
| `/recipe-user` | Ricette utente | **Protetto** |
| `/login` | Login | Pubblico |

---

## 🚀 Avvio in locale

### 1. Frontend
```bash
# Clonare il repository
git clone https://github.com/mariolopresti/recipebox.git
cd recipebox

# Installare le dipendenze
npm install

# Avviare il server di sviluppo
ng serve
```

### 2. Backend
```bash
# Clonare il repository backend
git clone https://github.com/mariolopresti/recipebox-server.git
cd recipebox-server

# Installare e avviare
npm install
node serve.js

#credenziali
username: user
password: 123456