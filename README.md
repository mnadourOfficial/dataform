# Dataform Project

## Structure

```
definitions/
  sources/    # Déclarations des tables sources (type: "declaration")
  staging/    # Modèles de staging — nettoyage et typage (préfixe stg_)
  marts/      # Modèles finaux exposés aux outils BI
includes/
  utils.js    # Fonctions JS réutilisables
```

## Configuration

Mettre à jour `workflow_settings.yaml` :
- `defaultProject` → ton GCP Project ID
- `defaultLocation` → région BigQuery (ex: `EU`, `US`)
- `dataformCoreVersion` → version de `@dataform/core` dans `package.json`

## Lancer le projet

```bash
# Installer les dépendances
npm install

# Compiler
dataform compile

# Exécuter (dry run)
dataform run --dry-run

# Exécuter
dataform run
```

## Environnements

Trois environnements définis dans `environments.json` : `dev`, `staging`, `production`.

```bash
dataform run --env dev
```

## Credentials BigQuery

Créer un fichier `.df-credentials.json` (ignoré par git) :

```json
{
  "projectId": "YOUR_GCP_PROJECT_ID",
  "location": "EU"
}
```
