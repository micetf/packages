/**
 * Module de fonctions utilitaires
 * @module utils
 */

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

/**
 * Formate une date au format français (JJ/MM/AAAA)
 *
 * @param {Date|string} date - Date à formater
 * @returns {string} Date formatée
 */
export const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("fr-FR");
};
