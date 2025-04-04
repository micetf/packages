export const THUMBNAIL_PATH = "./thumbnails/";

// Initialisation du cache ViteJS
let thumbnailsCache = {};
try {
    if (import.meta && typeof import.meta.glob === "function") {
        thumbnailsCache = import.meta.glob(
            "../thumbnails/*.{png,jpg,jpeg,svg}",
            { eager: true }
        );
    }
} catch (e) {
    console.warn("L'API import.meta.glob n'est pas disponible.");
}

/**
 * Retourne l'URL d'une miniature.
 * @param {string} filename - Nom du fichier image.
 * @returns {string} URL de la miniature.
 */
export function getThumbnailUrl(filename) {
    if (!filename) return "";
    if (filename.startsWith("http")) return filename;

    const keyPath = `../thumbnails/${filename}`;
    if (thumbnailsCache[keyPath]) {
        return thumbnailsCache[keyPath];
    }

    return `${THUMBNAIL_PATH}${filename}`;
}

/**
 * Vérifie si une miniature existe.
 * @param {string} filename - Nom du fichier image.
 * @returns {Promise<boolean>} True si l'image existe.
 */
export async function thumbnailExists(filename) {
    if (!filename) return false;
    if (filename.startsWith("http")) return true;

    const keyPath = `../thumbnails/${filename}`;
    if (thumbnailsCache[keyPath]) return true;

    try {
        const response = await fetch(`${THUMBNAIL_PATH}${filename}`);
        return response.ok;
    } catch {
        return false;
    }
}
