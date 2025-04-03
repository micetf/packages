/**
 * Module pour la gestion des miniatures des applications
 * @module thumbnails
 */

/**
 * Chemin de base pour les miniatures
 * @type {string}
 */
export const THUMBNAIL_PATH = "./thumbnails/";

// En mode Vite, utiliser import.meta.glob
let thumbnailsCache = {};

// Fonction d'initialisation des thumbnails qui peut être configurée selon l'environnement
try {
    // Essayer d'utiliser l'API Vite si disponible
    if (import.meta && typeof import.meta.glob === "function") {
        thumbnailsCache = import.meta.glob(
            "../public/thumbnails/*.{png,jpg,jpeg,svg}",
            {
                eager: true,
                import: "default",
            }
        );
    }
} catch (e) {
    console.warn(
        "L'API import.meta.glob n'est pas disponible. Les miniatures devront être gérées manuellement."
    );
}

/**
 * Obtient l'URL d'une miniature à partir de son nom de fichier
 *
 * @param {string} filename - Nom du fichier image (ex: "abaque.png")
 * @returns {string} URL de l'image utilisable dans une balise <img>
 */
export function getThumbnailUrl(filename) {
    if (!filename) return "";

    // Si c'est déjà une URL complète, la retourner telle quelle
    if (filename.startsWith("http")) return filename;

    // Chercher l'image dans les thumbnails importés en construisant le chemin relatif
    const keyPath = `../public/thumbnails/${filename}`;

    // Si l'environnement Vite est disponible et l'image existe avec ce nom
    if (Object.keys(thumbnailsCache).length > 0) {
        if (thumbnailsCache[keyPath]) {
            return thumbnailsCache[keyPath];
        }

        // Sinon, chercher de façon plus souple
        const key = Object.keys(thumbnailsCache).find((k) =>
            k.includes(`/${filename}`)
        );
        if (key) return thumbnailsCache[key];
    }

    // Fallback pour les environnements non-Vite
    return `${THUMBNAIL_PATH}${filename}`;
}

/**
 * Alias de getThumbnailUrl pour la compatibilité avec le code existant
 *
 * @param {string} filename - Nom du fichier image
 * @returns {string} URL de l'image
 * @deprecated Utilisez getThumbnailUrl à la place
 */
export function getFullThumbnailPath(filename) {
    return getThumbnailUrl(filename);
}

/**
 * Alias de getThumbnailUrl pour la compatibilité avec le code existant
 *
 * @param {string} filename - Nom du fichier image
 * @returns {string} URL de l'image
 * @deprecated Utilisez getThumbnailUrl à la place
 */
export function getThumbnailPath(filename) {
    return getThumbnailUrl(filename);
}

/**
 * Vérifie si une miniature existe
 *
 * @param {string} filename - Nom du fichier image
 * @returns {boolean} True si l'image existe
 */
export function thumbnailExists(filename) {
    if (!filename) return false;
    if (filename.startsWith("http")) return true;

    // Si l'environnement Vite est disponible
    if (Object.keys(thumbnailsCache).length > 0) {
        const keyPath = `../public/thumbnails/${filename}`;
        return (
            !!thumbnailsCache[keyPath] ||
            Object.keys(thumbnailsCache).some((k) => k.includes(`/${filename}`))
        );
    }

    // Dans les autres environnements, on ne peut pas vérifier facilement
    // Retourne true par défaut pour éviter des erreurs
    return true;
}
