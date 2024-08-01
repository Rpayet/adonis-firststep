# Commandes Pratiques

## Migration

- Créer une migration :
    ```sh
    node ace make:migration <nom_migration>
    ```
- Exécuter les migrations :
    ```sh
    node ace migration:run
    ```
- Annuler les migrations :
    ```sh
    node ace migration:rollback
    ```

## Model

- Créer un model :
    ```sh
    node ace make:model <nom_model>
    ```
- Créer un model avec un controller :
    ```sh
    node ace make:model <nom_model> -c
    ```
- Créer un model avec un controller et une migration :
    ```sh
    node ace make:model <nom_model> -cm
    ```
    