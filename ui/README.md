# Domaine UI

Un ensemble de composants UI réutilisables pour les applications du domaine.

## Installation

### Dans le monorepo

Si vous travaillez dans le monorepo, les dépendances sont déjà gérées par les workspaces npm.

### Dans un projet externe

Si vous souhaitez utiliser ces composants dans un projet externe, vous pouvez les installer via npm :

```bash
# Si vous avez publié le package sur npm :
npm install @domaine/ui

# Si vous utilisez un lien local :
npm install file:../path/to/packages/ui
```

## Utilisation

### Navbar

Le composant Navbar est conçu pour être réutilisé dans toutes les applications du domaine, tout en permettant une personnalisation facile :

```jsx
import { Navbar } from "@domaine/ui";

function App() {
    return (
        <div>
            <Navbar
                breadcrumb={["MiCetF", "appli1", "page-1"]}
                subtitle="Générateur"
                showHelp={true}
                onHelpClick={() => alert("Aide!")}
            />
            {/* Le reste de votre application */}
        </div>
    );
}
```

#### Props

-   `breadcrumb` (Array<string>, obligatoire) : Un tableau qui définit le fil d'Ariane, où le premier élément est typiquement le nom du domaine.
-   `subtitle` (string, optionnel) : Un sous-titre à afficher après le dernier élément du fil d'Ariane.
-   `showHelp` (boolean, optionnel, défaut: false) : Indique si le bouton d'aide doit être affiché.
-   `onHelpClick` (function, optionnel) : Fonction appelée lors du clic sur le bouton d'aide.

### Icon

Le composant Icon permet d'afficher des icônes cohérentes dans toutes les applications :

```jsx
import { Icon, ICONS } from "@domaine/ui";

function MyComponent() {
    return (
        <button className="bg-blue-500 p-2 rounded">
            <Icon name={ICONS.SEARCH} className="text-white" />
        </button>
    );
}
```

#### Props

-   `name` (string, obligatoire) : Le nom de l'icône à afficher, utilisez les constantes ICONS.
-   `className` (string, optionnel) : Classes CSS additionnelles.
-   `size` (string, optionnel, défaut: "4") : Taille de l'icône (en unités Tailwind).

## Développement

### Ajout d'une nouvelle icône

Pour ajouter une nouvelle icône, modifiez le fichier `Icon/Icon.jsx` :

1. Ajoutez le nom de l'icône dans l'objet `ICONS`
2. Ajoutez le SVG correspondant dans le switch
