# Ing-Devops-EV1

Proyecto desarrollado para la Evaluación Parcial N°1 de la asignatura Ingeniería DevOps.

El proyecto consiste en una landing page desplegada en una instancia EC2 de AWS Learner Lab, utilizando GitHub Actions para automatizar la integración y el despliegue.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Actions
- AWS EC2
- Apache HTTP Server

## Estrategia de ramificación

### Estrategia seleccionada: GitFlow

Para este proyecto se seleccionó **GitFlow** como estrategia de ramificación.

La estructura utilizada es:

- `main`: contiene la versión estable y desplegable del proyecto.
- `develop`: integra los cambios realizados durante el desarrollo.
- `feature/<nombre>`: se utiliza para desarrollar nuevas funcionalidades.
- `hotfix/<nombre>`: se utiliza para realizar correcciones urgentes sobre la versión estable.

El flujo general del proyecto es:

```text
feature/*
    ↓
develop
    ↓
Pull Request
    ↓
main
    ↓
GitHub Actions
    ↓
AWS EC2