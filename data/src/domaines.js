/**
 * Module de gestion des domaines thématiques
 *
 * @module domaines
 */

/**
 * Liste des domaines thématiques disponibles
 * @type {Object[]}
 */
export const domaines = [
    {
        name: "maths",
        label: "Mathématiques",
        href: "#maths",
        icon: "calculator",
    },
    {
        name: "français",
        label: "Français",
        href: "#francais",
        icon: "book",
    },
    {
        name: "sciences",
        label: "Sciences",
        href: "#sciences",
        icon: "beaker",
    },
    {
        name: "histoire",
        label: "Histoire",
        href: "#histoire",
        icon: "clock",
    },
    {
        name: "géographie",
        label: "Géographie",
        href: "#geographie",
        icon: "globe",
    },
];

/**
 * Récupère un domaine par son identifiant
 *
 * @param {string} id - Identifiant du domaine
 * @returns {Object|null} Le domaine trouvé ou null
 */
export const getDomaineById = (id) => {
    return domaines.find((domaine) => domaine.name === id) || null;
};

/**
 * Récupère tous les domaines
 *
 * @returns {Object[]} Liste de tous les domaines
 */
export const getAllDomaines = () => {
    return domaines;
};
