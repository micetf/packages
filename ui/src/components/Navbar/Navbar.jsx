import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon, { ICONS } from "../Icon";

/**
 * Composant de barre de navigation réutilisable pour les applications du domaine
 *
 * @param {Object} props - Les propriétés du composant
 * @param {Array<string>} props.breadcrumb - Tableau des éléments du fil d'Ariane (["micetf", "appli1", "sous-page"])
 * @param {string} [props.subtitle] - Sous-titre optionnel à afficher après le dernier élément du fil d'Ariane
 * @param {function} [props.onHelpClick] - Fonction de callback pour le bouton d'aide (optionnel)
 * @param {boolean} [props.showHelp=false] - Indique si le bouton d'aide doit être affiché
 * @param {string} [props.baseUrl="https://micetf.fr"] - URL de base du domaine
 * @param {string} [props.paypalId="Q2XYVFP4EEX2J"] - ID PayPal pour les donations
 * @param {string} [props.contactEmail="webmaster@micetf.fr"] - Email de contact
 * @returns {JSX.Element} Le composant de barre de navigation
 */
const Navbar = ({
    breadcrumb,
    subtitle,
    onHelpClick,
    showHelp = false,
    baseUrl = "https://micetf.fr",
    paypalId = "Q2XYVFP4EEX2J",
    contactEmail = "webmaster@micetf.fr"
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Construction du sujet pour l'email
    const appPath =
        breadcrumb.length > 1 ? `/${breadcrumb.slice(1).join("/")}` : "";
    const emailSubject = `À propos de ${appPath}`;

    return (
        <nav className="fixed top-0 w-full bg-gray-800 text-white z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Fil d'Ariane */}
                    <div className="flex items-center space-x-2 overflow-x-auto">
                        {breadcrumb.map((item, index) => (
                            <div key={index} className="flex items-center whitespace-nowrap">
                                {index > 0 && (
                                    <Icon
                                        name={ICONS.CHEVRON_RIGHT}
                                        className="text-gray-400 mx-2"
                                    />
                                )}

                                {index === 0 ? (
                                    <a
                                        href={baseUrl}
                                        className="text-xl font-bold hover:text-gray-300"
                                        title="Retour à l'accueil"
                                    >
                                        {item}
                                    </a>
                                ) : index === breadcrumb.length - 1 ? (
                                    <span className="text-xl font-bold">
                                        {item}
                                    </span>
                                ) : (
                                    <a
                                        href={`${baseUrl}/${breadcrumb
                                            .slice(1, index + 1)
                                            .join("/")}`}
                                        className="text-gray-300 hover:text-white"
                                    >
                                        {item}
                                    </a>
                                )}
                            </div>
                        ))}

                        {subtitle && (
                            <span className="text-gray-400 text-sm ml-2">
                                – {subtitle}
                            </span>
                        )}
                    </div>

                    {/* Bouton menu mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Actions desktop */}
                    <div className="hidden md:flex items-center space-x-2">
                        {/* Bouton d'aide (optionnel) */}
                        {showHelp && onHelpClick && (
                            <button
                                onClick={onHelpClick}
                                className="bg-gray-600 p-2 rounded hover:bg-gray-700 transition-colors"
                                title="Aide"
                                aria-label="Aide"
                            >
                                <Icon name={ICONS.QUESTION} />
                            </button>
                        )}

                        {/* Bouton PayPal */}
                        <form
                            action="https://www.paypal.com/cgi-bin/webscr"
                            method="post"
                            target="_blank"
                        >
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input
                                type="hidden"
                                name="hosted_button_id"
                                value={paypalId}
                            />
                            <button
                                type="submit"
                                className="bg-yellow-500 p-2 rounded hover:bg-yellow-600 transition-colors"
                                title="Si vous pensez que ces outils le méritent... Merci !"
                                aria-label="Faire un don"
                            >
                                <Icon name={ICONS.HEART} />
                            </button>
                        </form>

                        {/* Bouton Recherche */}
                        <a
                            href={`${baseUrl}/outils/`}
                            className="bg-gray-600 p-2 rounded hover:bg-gray-700 transition-colors"
                            title="Chercher un outil sur micetf.fr..."
                            aria-label="Rechercher un outil"
                        >
                            <Icon name={ICONS.SEARCH} />
                        </a>

                        {/* Bouton Contact */}
                        <a
                            href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                                emailSubject
                            )}`}
                            className="bg-gray-600 p-2 rounded hover:bg-gray-700 transition-colors"
                            title="Contacter le webmaster"
                            aria-label="Contacter le webmaster"
                        >
                            <Icon name={ICONS.ENVELOPE} />
                        </a>
                    </div>
                </div>

                {/* Menu mobile */}
                <div
                    className={`md:hidden ${isOpen ? "block" : "hidden"} pb-4`}
                    id="mobile-menu"
                >
                    {showHelp && onHelpClick && (
                        <button
                            onClick={onHelpClick}
                            className="flex items-center w-full text-left py-2 text-gray-300 hover:text-white"
                            aria-label="Aide"
                        >
                            <Icon name={ICONS.QUESTION} className="mr-2" />
                            <span>Aide</span>
                        </button>
                    )}
                    <a
                        href={`https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${paypalId}`}
                        className="flex items-center py-2 text-gray-300 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Faire un don"
                    >
                        <Icon name={ICONS.HEART} className="mr-2" />
                        <span>Faire un don</span>
                    </a>
                    <a
                        href={`${baseUrl}/outils/`}
                        className="flex items-center py-2 text-gray-300 hover:text-white"
                        aria-label="Rechercher un outil"
                    >
                        <Icon name={ICONS.SEARCH} className="mr-2" />
                        <span>Chercher un outil sur micetf.fr</span>
                    </a>
                    <a
                        href={`mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}`}
                        className="flex items-center py-2 text-gray-300 hover:text-white"
                        aria-label="Contacter le webmaster"
                    >
                        <Icon name={ICONS.ENVELOPE} className="mr-2" />
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    breadcrumb: PropTypes.arrayOf(PropTypes.string).isRequired,
    subtitle: PropTypes.string,
    onHelpClick: PropTypes.func,
    showHelp: PropTypes.bool,
    baseUrl: PropTypes.string,
    paypalId: PropTypes.string,
    contactEmail: PropTypes.string,
};

export default Navbar;