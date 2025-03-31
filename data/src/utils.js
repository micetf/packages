/**
 * Module de fonctions utilitaires
 *
 * @module utils
 */

/**
 * Chemin de base pour les miniatures
 * @type {string}
 */
export const THUMBNAIL_PATH = "./assets/thumbnails/";

/**
 * Construit le chemin complet pour une miniature
 *
 * @param {string} filename - Nom du fichier image
 * @returns {string} Chemin complet vers la miniature
 */
export const getFullThumbnailPath = (filename) => {
    if (!filename) return `${THUMBNAIL_PATH}default.jpg`;
    if (filename.startsWith("http")) return filename; // URL externe
    return `${THUMBNAIL_PATH}${filename}`;
};

/**
 * Récupère l'URL complète d'une miniature, adaptée pour l'environnement de déploiement actuel
 *
 * @param {string} filename - Nom du fichier image
 * @param {string} [prefix] - Préfixe à utiliser en production (ex: "home")
 * @returns {string} URL complète vers la miniature
 */
export const getThumbnailUrl = (filename, prefix = null) => {
    console.log(filename);
    if (!filename) filename = "default.jpg";
    if (filename.startsWith("http")) return filename; // URL externe

    // Si nous sommes en production et qu'un préfixe est fourni
    if (prefix && prefix !== ".") {
        return `/${prefix}/assets/thumbnails/${filename}`;
    }

    // En développement
    return `./public/assets/thumbnails/${filename}`;
};

/**
 * Filtre les outils selon un terme de recherche
 *
 * @param {Object[]} tools - Liste des outils/applications à filtrer
 * @param {string} searchTerm - Terme de recherche
 * @returns {Object[]} Liste filtrée des outils
 */
export const filterToolsBySearchTerm = (tools, searchTerm) => {
    if (!searchTerm) return tools;

    const searchLower = searchTerm.toLowerCase();
    return tools.filter(
        (tool) =>
            tool.title.toLowerCase().includes(searchLower) ||
            tool.description.toLowerCase().includes(searchLower) ||
            (tool.keywords &&
                tool.keywords.some((keyword) =>
                    keyword.toLowerCase().includes(searchLower)
                ))
    );
};
