import PropTypes from "prop-types";

/**
 * Collection d'icônes SVG réutilisables
 *
 * @type {Object.<string, string>}
 */
export const ICONS = {
    CHEVRON_RIGHT: "chevron-right",
    SEARCH: "search",
    HEART: "heart",
    ENVELOPE: "envelope",
    QUESTION: "question",
    FRACTION: "fraction",
};

/**
 * Composant d'icône SVG réutilisable
 *
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.name - Nom de l'icône à afficher
 * @param {string} [props.className] - Classes CSS additionnelles
 * @param {string} [props.size="4"] - Taille de l'icône (en unités Tailwind)
 * @returns {JSX.Element} Le composant d'icône SVG
 */
const Icon = ({ name, className = "", size = "4" }) => {
    const baseClass = `h-${size} w-${size} fill-current`;
    const combinedClassName = className
        ? `${baseClass} ${className}`
        : baseClass;

    switch (name) {
        case ICONS.CHEVRON_RIGHT:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className={combinedClassName}
                >
                    <path d="m12.95 10.707.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
            );

        case ICONS.SEARCH:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className={combinedClassName}
                >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
            );

        case ICONS.HEART:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className={combinedClassName}
                >
                    <path d="m10 3.22-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                </svg>
            );

        case ICONS.ENVELOPE:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className={combinedClassName}
                >
                    <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
                </svg>
            );

        case ICONS.QUESTION:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className={combinedClassName}
                >
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 7a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            );

        case ICONS.FRACTION:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className={combinedClassName}
                >
                    <path d="M7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a6 6 0 0 0-6 6v3h12v-3a6 6 0 0 0-6-6zm6 10H1v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-1zm7-10h-3v2h2v6h-2v2h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" />
                </svg>
            );

        default:
            console.error(`Icon "${name}" not found`);
            return null;
    }
};

Icon.propTypes = {
    name: PropTypes.oneOf(Object.values(ICONS)).isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
};

export default Icon;
