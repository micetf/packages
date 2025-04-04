/**
 * Point d'entrée principal du package de données
 * Exporte toutes les fonctionnalités publiques
 *
 * @module data
 */

// Exporter les données des applications
export {
    applications,
    getApplicationById,
    getAllApplications,
    getApplicationsByDomaine,
} from "./applications.js";

// Exporter les données des domaines
export { domaines, getDomaineById, getAllDomaines } from "./domaines.js";

// Exporter les constantes
export {
    VERSION,
    LAST_UPDATE,
    PAYPAL_ID,
    CONTACT_EMAIL,
    BASE_URL,
} from "./constants.js";

// Exporter les fonctions utilitaires
export { filterToolsBySearchTerm, formatDate } from "./utils.js";

// Exporter les fonctions de gestion des miniatures
export {
    getThumbnailUrl,
    thumbnailExists,
    THUMBNAIL_PATH,
} from "./thumbnails.js";
