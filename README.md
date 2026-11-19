# HYDRA-EO Clone (GitHub Pages + Quarto)

Prototipo híbrido estático para publicar en **GitHub Pages** bajo `https://kundun14.github.io/github_page_hydra/`.

## Estructura del proyecto

- `index.html`, `css/styles.css`, `js/main.js`, `assets/`: Landing page estática sin dependencias de build.
- `docs-quarto/`: Subsitio de documentación en Quarto (`.qmd` + `_quarto.yml`).
- `.github/workflows/deploy.yml`: Workflow de GitHub Actions que instala Quarto, compila `docs-quarto/` en `_site/docs-quarto/`, copia la landing y despliega en GitHub Pages.

## Prueba local rápida

Para previsualizar la landing page (`index.html`) localmente:

```powershell
python -m http.server 8000
```

Luego abre `http://localhost:8000` en tu navegador. *(Nota: las subpáginas de `docs-quarto/` se compilan automáticamente en GitHub Actions al hacer push, o localmente si instalas Quarto CLI).*

## Publicación en GitHub Pages

1. Crea el repositorio `github_page_hydra` en `https://github.com/kundun14`.
2. Inicializa Git y sube los cambios a la rama `main`:
   ```powershell
   git init
   git add .
   git commit -m "Initial hybrid static + Quarto prototype"
   git branch -M main
   git remote add origin https://github.com/kundun14/github_page_hydra.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages** y en **Source** selecciona **GitHub Actions**.
4. Cuando termine el workflow, el sitio estará disponible en `https://kundun14.github.io/github_page_hydra/`.
