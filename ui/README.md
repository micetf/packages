# @micetf/ui

Bibliothèque de composants UI réutilisables pour les applications MiCetF.

## Installation

```bash
# Avec npm
npm install @micetf/ui

# Avec pnpm
pnpm add @micetf/ui

# Avec yarn
yarn add @micetf/ui
```

## Fonctionnalités

- Composants React optimisés pour l'écosystème MiCetF
- Style intégré avec Tailwind CSS
- Accessibilité prise en compte
- Composants adaptés aux besoins spécifiques des applications éducatives

## Composants disponibles

### Navbar

Barre de navigation avec fil d'Ariane pour une navigation cohérente entre les applications.

```jsx
import { Navbar } from "@micetf/ui";

function App() {
    return (
        <div>
            <Navbar
                breadcrumb={["MiCetF", "mathematiques", "fractions"]}
                subtitle="Exercices"
                showHelp={true}
                onHelpClick={() => setShowHelp(true)}
            />
            {/* Contenu de votre application */}
        </div>
    );
}
```

#### Props

| Prop           | Type         | Default                 | Description                                                    |
| -------------- | ------------ | ----------------------- | -------------------------------------------------------------- |
| `breadcrumb`   | `string[]`   | (obligatoire)           | Tableau représentant le fil d'Ariane                           |
| `subtitle`     | `string`     | `undefined`             | Sous-titre à afficher après le dernier élément du fil d'Ariane |
| `showHelp`     | `boolean`    | `false`                 | Affiche le bouton d'aide si `true`                             |
| `onHelpClick`  | `() => void` | `undefined`             | Fonction appelée au clic sur le bouton d'aide                  |
| `baseUrl`      | `string`     | `"https://micetf.fr"`   | URL de base du site                                            |
| `paypalId`     | `string`     | `"Q2XYVFP4EEX2J"`       | ID PayPal pour le bouton de don                                |
| `contactEmail` | `string`     | `"webmaster@micetf.fr"` | Email de contact                                               |

### Icon

Composant pour afficher des icônes cohérentes dans toutes les applications.

```jsx
import { Icon, ICONS } from "@micetf/ui";

function MyComponent() {
    return (
        <button className="bg-blue-500 p-2 rounded">
            <Icon name={ICONS.SEARCH} className="text-white" />
        </button>
    );
}
```

#### Props

| Prop        | Type     | Default       | Description                                      |
| ----------- | -------- | ------------- | ------------------------------------------------ |
| `name`      | `string` | (obligatoire) | Nom de l'icône (utiliser les constantes `ICONS`) |
| `className` | `string` | `""`          | Classes CSS additionnelles                       |
| `size`      | `string` | `"4"`         | Taille de l'icône (en unités Tailwind)           |

#### Icônes disponibles

- `ICONS.CHEVRON_RIGHT` - Flèche vers la droite
- `ICONS.SEARCH` - Loupe de recherche
- `ICONS.HEART` - Cœur
- `ICONS.ENVELOPE` - Enveloppe (email)
- `ICONS.QUESTION` - Point d'interrogation
- `ICONS.HOME` - Maison

## Utilisation avec Tailwind CSS

Pour utiliser cette bibliothèque avec Tailwind CSS, ajoutez le chemin vers les composants dans votre configuration Tailwind :

```js
// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        // Ajoutez cette ligne pour scanner les composants de @micetf/ui
        "./node_modules/@micetf/ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    // Reste de votre configuration...
};
```

## Personnalisation des styles

Les composants utilisent Tailwind CSS et peuvent être personnalisés en surchargeant les classes CSS dans votre application ou en étendant le thème Tailwind :

```js
// tailwind.config.js
module.exports = {
    // ...
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#f0f9ff",
                    // ...autres teintes
                    600: "#0284c7", // Couleur principale
                },
            },
        },
    },
};
```

## Développement

### Prérequis

- Node.js ≥ 18
- pnpm ≥ 8

### Installation des dépendances

```bash
pnpm install
```

### Build

```bash
pnpm build
```

### Développement en mode watch

```bash
pnpm dev
```

## Licence

MIT
