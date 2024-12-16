# Silent print in a web browser

Auto Printer est une application web permettant d'imprimer automatiquement depuis un navigateur web vers une imprimante thermique de 72mm.

## Fonctionnalités

- **Impression automatique** : Utilisation de la fonction native `window.print()` de JavaScript pour initier l'impression à partir du navigateur.
- **Configuration sans dialogue** : Modification de l'option par défaut dans Firefox pour activer l'impression silencieuse en supprimant la fenêtre de dialogue classique.
- **Style d'impression CSS** : Utilisation de la requête de média CSS `@media print` pour appliquer des styles spécifiques lors de l'impression, permettant de masquer le contenu non nécessaire de la page.

## Utilisation

1. **Installation des dépendances** :
   ```bash
   npm install
   ```

2. **Exécution du projet** :
   ```bash
   npm run dev
   ```

3. **Accès à l'application** :
   Ouvrez votre navigateur et rendez-vous sur le port correspondant configuré par Vite (affiché dans le terminal).

## Développé avec

- [ViteJS](https://vitejs.dev/) - Un outil de développement rapide pour les applications web modernes.

## Références

- Mise en œuvre de l'impression silencieuse : [https://stackoverflow.com/a/70289151](https://stackoverflow.com/a/70289151)

## License

Ce projet est sous licence MIT. Veuillez consulter le fichier LICENSE pour plus de détails.