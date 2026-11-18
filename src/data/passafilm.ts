import { email } from "./site";

export type Locale = "it" | "en";

export const contactEmail = email;

export const lastUpdated: Record<Locale, string> = {
  it: "18 novembre 2026",
  en: "18 November 2026",
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
      it: "Database dell'app: profilo, gruppi, film consigliati, note, stati e voti.",
      en: "App database: profile, groups, recommended movies, notes, statuses and ratings.",
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
      "Raccogliamo solo i dati che servono a far funzionare l'app: account, gruppi e film che consigli o voti.",
      "Quello che pubblichi in un gruppo lo vedono solo i membri di quel gruppo.",
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
          "Contenuti dei gruppi: i gruppi di cui fai parte, i film che consigli con le eventuali note, i film che segni da vedere o visti e i voti che dai.",
          "Dispositivo: token per le notifiche push, modello, sistema operativo, versione dell'app e lingua.",
          "Utilizzo: le azioni principali che compi nell'app (per esempio creare un gruppo o consigliare un film), collegate al tuo account.",
          "Errori: rapporti tecnici quando l'app si blocca o va in errore.",
        ],
        paragraphs: [
          "Non raccogliamo posizione, contatti, foto della galleria o dati di pagamento.",
        ],
      },
      {
        title: "Perché li usiamo",
        items: [
          "Per fornirti il servizio: creare l'account, farti entrare nei gruppi, mostrare i film consigliati e inviarti le notifiche quando un amico consiglia un film. La base giuridica è l'esecuzione del contratto (art. 6.1.b GDPR).",
          "Per capire come viene usata l'app e correggere gli errori. La base giuridica è il legittimo interesse a migliorare l'app (art. 6.1.f GDPR).",
        ],
      },
      {
        title: "Chi vede i tuoi dati",
        paragraphs: [
          "Gli altri membri di un gruppo vedono il tuo nome, la tua foto profilo, i film che consigli in quel gruppo con le note, e se li hai visti e con che voto. Gli utenti che non fanno parte del gruppo non vedono nulla di tutto questo.",
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
          "Puoi eliminare l'account da Profilo, Elimina account. Vengono cancellati subito il tuo account, il profilo, i voti, gli stati dei film e la tua appartenenza ai gruppi. I film che hai consigliato restano nei gruppi senza il tuo nome, così gli altri membri non li perdono. Un gruppo in cui eri l'unico membro viene eliminato.",
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
      "We only collect the data the app needs to work: your account, your groups and the movies you recommend or rate.",
      "What you share in a group is visible only to the members of that group.",
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
          "Group content: the groups you belong to, the movies you recommend with any notes, the movies you mark as want to watch or watched, and your ratings.",
          "Device: push notification token, model, operating system, app version and language.",
          "Usage: the main actions you take in the app (for example creating a group or recommending a movie), linked to your account.",
          "Errors: technical reports when the app crashes or hits an error.",
        ],
        paragraphs: ["We don't collect your location, contacts, photo library or payment details."],
      },
      {
        title: "Why we use it",
        items: [
          "To provide the service: creating your account, letting you join groups, showing recommended movies and notifying you when a friend recommends one. The legal basis is the performance of a contract (Art. 6(1)(b) GDPR).",
          "To understand how the app is used and fix errors. The legal basis is our legitimate interest in improving the app (Art. 6(1)(f) GDPR).",
        ],
      },
      {
        title: "Who sees your data",
        paragraphs: [
          "Other members of a group see your name, your profile picture, the movies you recommend in that group with their notes, and whether you watched them and how you rated them. People outside the group see none of this.",
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
          "You can delete your account from Profile, Delete account. Your account, profile, ratings, movie statuses and group memberships are deleted right away. The movies you recommended stay in their groups without your name, so the other members don't lose them. A group where you were the only member is deleted.",
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
    intro: "PassaFilm è l'app per consigliarsi film tra amici, in gruppi privati.",
    contact: "Per problemi, domande o suggerimenti scrivi a",
    deleteTitle: "Eliminare l'account",
    deleteBody:
      "Dall'app: Profilo, Elimina account. Se non hai più accesso all'app, scrivi all'indirizzo qui sopra dall'email del tuo account.",
    privacy: "Leggi la privacy policy",
  },
  en: {
    title: "PassaFilm support",
    intro: "PassaFilm is the app for recommending movies to friends, in private groups.",
    contact: "For problems, questions or suggestions, write to",
    deleteTitle: "Deleting your account",
    deleteBody:
      "In the app: Profile, Delete account. If you no longer have access to the app, write to the address above from your account's email.",
    privacy: "Read the privacy policy",
  },
};
