/**
 * Module pour la gestion des miniatures des applications
 * Utilise import.meta.glob de Vite pour gérer les ressources statiques
 * @module thumbnails
 */

// Importer toutes les images de miniatures
export const thumbnails = import.meta.glob(
    "../public/thumbnails/*.{png,jpg,jpeg,svg}",
    {
        eager: true, // Charger immédiatement (pas de chargement différé)
        import: "default", // Importer la valeur par défaut (URL de l'image)
    }
);

/**
 * Chemin de base pour les miniatures (pour compatibilité avec le code existant)
 * @type {string}
 */
export const THUMBNAIL_PATH = "./thumbnails/";

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

    // Si l'image existe exactement avec ce nom
    if (thumbnails[keyPath]) {
        return thumbnails[keyPath];
    }

    // Sinon, chercher de façon plus souple (utile si le nom de fichier n'est pas exact)
    const key = Object.keys(thumbnails).find((k) => k.includes(`/${filename}`));
    return key ? thumbnails[key] : "";
}

/**
 * Alias de getThumbnailUrl pour la compatibilité avec le code existant
 *
 * @param {string} filename - Nom du fichier image
 * @returns {string} URL de l'image
 */
export function getFullThumbnailPath(filename) {
    return getThumbnailUrl(filename);
}

/**
 * Alias de getThumbnailUrl pour la compatibilité avec le code existant
 *
 * @param {string} filename - Nom du fichier image
 * @returns {string} URL de l'image
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

    const keyPath = `../public/thumbnails/${filename}`;
    return (
        !!thumbnails[keyPath] ||
        Object.keys(thumbnails).some((k) => k.includes(`/${filename}`))
    );
}

export default {
    getThumbnailUrl,
    getFullThumbnailPath,
    getThumbnailPath,
    thumbnailExists,
    thumbnails,
    THUMBNAIL_PATH,
};
