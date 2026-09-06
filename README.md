# Ing-Devops-EV1

Proyecto desarrollado para lagit  Evaluación N°1. de la asignatura Ingenieria DevOps.

El proyecto consiste en una landing page para **Cartones del Sur**, desplegada en una instancia EC2 de AWS Learner Lab mediante un workflow de GitHub Actions.

## Funcionalidades

- Presentacion de productos de carton corrugado.
- Hero principal con mensaje comercial conciso y etiqueta superior subrayada.
- Cotizador rapido para estimar valores segun medidas, tipo de carton y cantidad.
- Formulario de contacto para solicitar una cotizacion formal.
- Bloque informativo con horario de atencion.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Actions
- AWS EC2
- Apache HTTP Server

## Estrategia de ramificacion

Para este proyecto se utiliza **GitFlow** como estrategia de ramificacion.

- `main`: contiene la version estable y desplegable del proyecto.
- `develop`: integra los cambios realizados durante el desarrollo.
- `feature/<nombre>`: se utiliza para desarrollar nuevas funcionalidades.
- `hotfix/<nombre>`: se utiliza para realizar correcciones urgentes sobre la version estable.

## Flujo general

```text
feature/*
  -> develop
  -> Pull Request
  -> main
  -> GitHub Actions
  -> AWS EC2
```
