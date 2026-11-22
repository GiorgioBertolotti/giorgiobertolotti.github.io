import { email } from "./site";

export type Locale = "it" | "en";

export const contactEmail = email;

export const lastUpdated: Record<Locale, string> = {
  it: "22 novembre 2026",
  en: "22 November 2026",
};

type Processor = { name: string; href: string; purpose: Record<Locale, string>; location: Record<Locale, string> };

export const processors: Processor[] = [
  {
    name: "Clerk",
    href: "https://clerk.com/legal/privacy",
    purpose: {
      it: "Account e accesso: email, nome, foto profilo, password cifrata, accesso con Apple o Google.",
      en: "Account and sign-in: email, name, profile picture, hashed password, Apple or Google sign-in.",
    },
    location: { it: "Stati Uniti", en: "United States" },
  },
  {
    name: "Supabase",
    href: "https://supabase.com/privacy",
    purpose: {
      it: "Database dell'app: profilo, gruppi, conversazioni private, film consigliati, note, stati, voti, reazioni e blocchi.",
      en: "App database: profile, groups, private conversations, recommended movies, notes, statuses, ratings, reactions and blocks.",
    },
    location: { it: "Unione Europea", en: "European Union" },
  },
  {
    name: "OneSignal",
    href: "https://onesignal.com/privacy_policy",
    purpose: {
      it: "Notifiche push: token del dispositivo e identificativo dell'account.",
      en: "Push notifications: device token and account identifier.",
    },
    location: { it: "Stati Uniti", en: "United States" },
  },
  {
    name: "PostHog",
    href: "https://posthog.com/privacy",
    purpose: {
      it: "Statistiche d'uso: azioni nell'app collegate all'identificativo dell'account.",
      en: "Usage statistics: in-app actions linked to the account identifier.",
    },
    location: { it: "Unione Europea", en: "European Union" },
  },
  {
    name: "Sentry",
    href: "https://sentry.io/privacy/",
    purpose: {
      it: "Segnalazione degli errori: dettagli tecnici del crash e del dispositivo.",
      en: "Error reporting: technical details of the crash and the device.",
    },
    location: { it: "Stati Uniti", en: "United States" },
  },
  {
    name: "TMDB",
    href: "https://www.themoviedb.org/privacy-policy",
    purpose: {
      it: "Ricerca dei film: riceve il testo cercato e l'indirizzo IP, nessun dato dell'account.",
      en: "Movie search: receives the search text and the IP address, no account data.",
    },
    location: { it: "Stati Uniti", en: "United States" },
  },
];

type Section = { title: string; paragraphs?: string[]; items?: string[] };

type PrivacyCopy = {
  title: string;
  summaryTitle: string;
  summary: string[];
  sections: Section[];
  processorsTitle: string;
  processorsIntro: string;
  processorsLink: string;
  contactTitle: string;
  contactBody: string;
  updated: string;
};

export const privacy: Record<Locale, PrivacyCopy> = {
  it: {
    title: "Privacy policy di PassaFilm",
    summaryTitle: "In breve",
    summary: [
      "Raccogliamo solo i dati che servono a far funzionare l'app: account, gruppi, conversazioni private e film che consigli o voti.",
      "Quello che condividi in un gruppo o in una conversazione privata lo vedono solo le persone che ne fanno parte.",
      "Niente pubblicità, niente vendita di dati, niente tracciamento tra app diverse.",
      "Puoi eliminare l'account in qualsiasi momento dall'app.",
    ],
    sections: [
      {
        title: "Chi è il titolare",
        paragraphs: [
          "PassaFilm è sviluppata da Giorgio Bertolotti, persona fisica con sede a Dalmine (BG), Italia, che è il titolare del trattamento dei dati descritti in questa pagina.",
        ],
      },
      {
        title: "Quali dati raccogliamo",
        items: [
          "Account: email, nome e foto profilo (se accedi con Apple o Google, quelli che ci condividono), password gestita in forma cifrata da Clerk.",
          "Profilo: il nome visualizzato che scegli e la foto profilo.",
          "Contenuti dei gruppi: i gruppi di cui fai parte, i film che consigli con le eventuali note, i film che segni da vedere o visti, i voti e le reazioni che dai.",
          "Consigli privati: le conversazioni a due che hai aperto, i film che mandi o ricevi con le eventuali note, il codice del tuo link personale e le persone che hai bloccato.",
          "Attività: quando hai aperto l'app l'ultima volta e il tuo fuso orario, per il promemoria serale, e quando hai aperto per l'ultima volta ogni gruppo o conversazione, per segnarti i film nuovi.",
          "Dispositivo: token per le notifiche push, modello, sistema operativo, versione dell'app e lingua.",
          "Utilizzo: le azioni principali che compi nell'app (per esempio creare un gruppo, consigliare un film o mandarlo a una persona), collegate al tuo account.",
          "Errori: rapporti tecnici quando l'app si blocca o va in errore.",
        ],
        paragraphs: [
          "Non raccogliamo posizione, contatti, foto della galleria o dati di pagamento.",
        ],
      },
      {
        title: "Perché li usiamo",
        items: [
          "Per fornirti il servizio: creare l'account, farti entrare nei gruppi, farti mandare e ricevere film in privato, mostrare i film consigliati e inviarti le notifiche quando un amico ti consiglia o ti manda un film. La base giuridica è l'esecuzione del contratto (art. 6.1.b GDPR).",
          "Per capire come viene usata l'app e correggere gli errori. La base giuridica è il legittimo interesse a migliorare l'app (art. 6.1.f GDPR).",
        ],
      },
      {
        title: "Chi vede i tuoi dati",
        paragraphs: [
          "Gli altri membri di un gruppo vedono il tuo nome, la tua foto profilo e i film che consigli in quel gruppo con le note. Su quei film vedono anche se li hai visti, con che voto e con quale reazione.",
          "In una conversazione privata l'altra persona vede il tuo nome, la tua foto profilo, i film che le mandi con le note e, sui film della conversazione, se li hai visti, con che voto e con quale reazione.",
          "Possono mandarti film in privato solo le persone con cui condividi un gruppo, quelle con cui hai già una conversazione e quelle che aprono il tuo link personale: chi apre il link vede il tuo nome e la tua foto profilo. Se blocchi qualcuno non può più farlo, e non riceve nessun avviso del blocco.",
          "Chi non condivide con te un gruppo o una conversazione non vede nulla di tutto questo. La tua watchlist e i film che hai visto restano privati, tranne quelli consigliati in un gruppo o in una conversazione che condividete.",
          "I dati sono trattati anche dai fornitori elencati più sotto, ognuno solo per il proprio servizio. Non vendiamo e non cediamo dati a nessuno per fini pubblicitari.",
        ],
      },
      {
        title: "Trasferimenti fuori dall'Unione Europea",
        paragraphs: [
          "Alcuni fornitori hanno sede negli Stati Uniti. I trasferimenti avvengono sulla base dell'EU-U.S. Data Privacy Framework o delle clausole contrattuali standard approvate dalla Commissione Europea.",
        ],
      },
      {
        title: "Per quanto tempo li conserviamo",
        paragraphs: [
          "I dati dell'account e dei gruppi restano finché non elimini l'account. Le statistiche d'uso e i rapporti di errore restano presso i rispettivi fornitori per il periodo di conservazione previsto dai loro servizi.",
        ],
      },
      {
        title: "Eliminare l'account",
        paragraphs: [
          "Puoi eliminare l'account da Profilo, Elimina account. Vengono cancellati subito il tuo account, il profilo, i voti, gli stati dei film, le reazioni, il tuo link personale, i blocchi e la tua appartenenza ai gruppi. I film che hai consigliato restano nei gruppi senza il tuo nome, così gli altri membri non li perdono. Un gruppo in cui eri l'unico membro viene eliminato, e così tutte le tue conversazioni private, con i film che vi eravate mandati.",
          "Una singola conversazione privata si può eliminare in qualsiasi momento: sparisce per entrambe le persone.",
          "Se non hai più accesso all'app, puoi chiedere l'eliminazione via email all'indirizzo qui sotto.",
        ],
      },
      {
        title: "I tuoi diritti",
        paragraphs: [
          "Puoi chiedere in qualsiasi momento di accedere ai tuoi dati, correggerli, cancellarli, limitarne il trattamento, riceverne una copia in un formato leggibile o opporti al trattamento basato sul legittimo interesse. Puoi anche presentare un reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).",
        ],
      },
      {
        title: "Età minima",
        paragraphs: ["PassaFilm è pensata per persone dai 14 anni in su."],
      },
      {
        title: "Modifiche",
        paragraphs: [
          "Se questa pagina cambia, aggiorniamo la data in fondo. Le modifiche importanti vengono comunicate anche nell'app.",
        ],
      },
    ],
    processorsTitle: "Fornitori",
    processorsIntro: "Questi servizi trattano dati per conto di PassaFilm.",
    processorsLink: "Privacy policy di",
    contactTitle: "Contatti",
    contactBody: "Per domande su questa policy o per esercitare i tuoi diritti scrivi a",
    updated: "Ultimo aggiornamento",
  },
  en: {
    title: "PassaFilm privacy policy",
    summaryTitle: "In short",
    summary: [
      "We only collect the data the app needs to work: your account, your groups, your private conversations and the movies you recommend or rate.",
      "What you share in a group or a private conversation is visible only to the people in it.",
      "No ads, no selling of data, no tracking across other apps.",
      "You can delete your account at any time from the app.",
    ],
    sections: [
      {
        title: "Who is responsible",
        paragraphs: [
          "PassaFilm is developed by Giorgio Bertolotti, an individual based in Dalmine (BG), Italy, who is the data controller for the data described on this page.",
        ],
      },
      {
        title: "What we collect",
        items: [
          "Account: email, name and profile picture (when you sign in with Apple or Google, the ones they share with us), and a password stored in hashed form by Clerk.",
          "Profile: the display name you choose and your profile picture.",
          "Group content: the groups you belong to, the movies you recommend with any notes, the movies you mark as want to watch or watched, and your ratings and reactions.",
          "Private recommendations: the one-to-one conversations you've opened, the movies you send or receive with any notes, the code of your personal link and the people you've blocked.",
          "Activity: when you last opened the app and your time zone, for the evening reminder, and when you last opened each group or conversation, to flag new movies.",
          "Device: push notification token, model, operating system, app version and language.",
          "Usage: the main actions you take in the app (for example creating a group, recommending a movie or sending it to someone), linked to your account.",
          "Errors: technical reports when the app crashes or hits an error.",
        ],
        paragraphs: ["We don't collect your location, contacts, photo library or payment details."],
      },
      {
        title: "Why we use it",
        items: [
          "To provide the service: creating your account, letting you join groups, letting you send and receive movies privately, showing recommended movies and notifying you when a friend recommends or sends you one. The legal basis is the performance of a contract (Art. 6(1)(b) GDPR).",
          "To understand how the app is used and fix errors. The legal basis is our legitimate interest in improving the app (Art. 6(1)(f) GDPR).",
        ],
      },
      {
        title: "Who sees your data",
        paragraphs: [
          "Other members of a group see your name, your profile picture and the movies you recommend in that group with their notes. On those movies they also see whether you watched them, how you rated them and how you reacted.",
          "In a private conversation the other person sees your name, your profile picture, the movies you send them with their notes and, on the conversation's movies, whether you watched them, how you rated them and how you reacted.",
          "Only people you share a group with, people you already have a conversation with and people who open your personal link can send you movies privately: whoever opens the link sees your name and profile picture. If you block someone they can no longer do so, and they aren't told they were blocked.",
          "People who don't share a group or a conversation with you see none of this. Your watchlist and the movies you've watched stay private, except the ones recommended in a group or conversation you share.",
          "Data is also processed by the providers listed below, each only for its own service. We don't sell or share data with anyone for advertising.",
        ],
      },
      {
        title: "Transfers outside the European Union",
        paragraphs: [
          "Some providers are based in the United States. Transfers rely on the EU-U.S. Data Privacy Framework or on the standard contractual clauses approved by the European Commission.",
        ],
      },
      {
        title: "How long we keep it",
        paragraphs: [
          "Account and group data stays until you delete your account. Usage statistics and error reports stay with their providers for the retention period of their services.",
        ],
      },
      {
        title: "Deleting your account",
        paragraphs: [
          "You can delete your account from Profile, Delete account. Your account, profile, ratings, movie statuses, reactions, personal link, blocks and group memberships are deleted right away. The movies you recommended stay in their groups without your name, so the other members don't lose them. A group where you were the only member is deleted, and so are all your private conversations, with the movies you sent each other.",
          "A single private conversation can be deleted at any time: it disappears for both people.",
          "If you no longer have access to the app, you can ask for deletion by email at the address below.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "You can ask at any time to access your data, correct it, delete it, restrict its processing, receive a copy in a readable format, or object to processing based on legitimate interest. You can also lodge a complaint with the Italian data protection authority, the Garante per la protezione dei dati personali (garanteprivacy.it).",
        ],
      },
      {
        title: "Minimum age",
        paragraphs: ["PassaFilm is meant for people aged 14 and over."],
      },
      {
        title: "Changes",
        paragraphs: [
          "If this page changes, we update the date at the bottom. Important changes are also announced in the app.",
        ],
      },
    ],
    processorsTitle: "Providers",
    processorsIntro: "These services process data on behalf of PassaFilm.",
    processorsLink: "Privacy policy of",
    contactTitle: "Contact",
    contactBody: "For questions about this policy or to exercise your rights, write to",
    updated: "Last updated",
  },
};

type SupportCopy = { title: string; intro: string; contact: string; deleteTitle: string; deleteBody: string; privacy: string };

export const support: Record<Locale, SupportCopy> = {
  it: {
    title: "Supporto PassaFilm",
    intro: "PassaFilm è l'app per consigliarsi film tra amici, in gruppi privati o a tu per tu.",
    contact: "Per problemi, domande o suggerimenti scrivi a",
    deleteTitle: "Eliminare l'account",
    deleteBody:
      "Dall'app: Profilo, Elimina account. Se non hai più accesso all'app, scrivi all'indirizzo qui sopra dall'email del tuo account.",
    privacy: "Leggi la privacy policy",
  },
  en: {
    title: "PassaFilm support",
    intro: "PassaFilm is the app for recommending movies to friends, in private groups or one to one.",
    contact: "For problems, questions or suggestions, write to",
    deleteTitle: "Deleting your account",
    deleteBody:
      "In the app: Profile, Delete account. If you no longer have access to the app, write to the address above from your account's email.",
    privacy: "Read the privacy policy",
  },
};
