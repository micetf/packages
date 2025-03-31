/**
 * Module pour accéder aux thumbnails
 *
 * @module thumbnails
 */

/**
 * Chemin de base vers les miniatures
 * Ce chemin sera résolu correctement par le bundler car les fichiers
 * sont dans node_modules
 */
export const THUMBNAILS_PATH = "@micetf/data/assets/thumbnails/";

/**
 * Récupère le chemin complet d'une miniature
 *
 * @param {string} filename - Nom du fichier image
 * @returns {string} Chemin complet vers la miniature
 */
export function getThumbnailPath(filename) {
    if (!filename) {
        return `${THUMBNAILS_PATH}default.jpg`;
    }

    // Si le chemin est déjà une URL complète, la retourner directement
    if (filename.startsWith("http")) {
        return filename;
    }

    // Construire le chemin vers l'image dans node_modules
    return `${THUMBNAILS_PATH}${filename}`;
}

export default {
    THUMBNAILS_PATH,
    getThumbnailPath,
};
