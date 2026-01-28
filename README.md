# Labor Stats Frontend

Frontend de una aplicación full-stack para la consulta y visualización interactiva de estadísticas oficiales de desempleo en Europa, utilizando datos de Eurostat.

La aplicación permite buscar la tasa de paro por país y año, así como visualizar la evolución temporal completa mediante gráficos dinámicos.

# Demo en producción:
https://labor-stats-frontend.vercel.app/

# Características principales

- Búsqueda de tasa de desempleo por país y año

- Visualización de la serie temporal completa

- Selector dinámico con todos los países disponibles en Eurostat

- Indicador de carga y estados deshabilitados (UX)

-  Manejo de errores y mensajes claros al usuario

-  Diseño responsive y limpio

# Arquitectura del proyecto

Este repositorio contiene únicamente el frontend.

La arquitectura completa es:

Frontend (React + Vite)  →  Backend (Node + Express)  →  Eurostat API

- Frontend: React + Vite (este repositorio)

- Backend: API REST propia desplegada en Render

Fuente de datos: Eurostat (data.europa.eu)

# Repositorio del backend:
https://github.com/LuisDavid-DeveloperSr/labor-stats-api

# Tecnologías utilizadas

- React

- Vite

- JavaScript 

- Recharts (gráficos)

- Fetch API

- CSS 

Vercel (despliegue)

# Instalación y ejecución local
1. Clonar el repositorio
git clone https://github.com/LuisDavid-DeveloperSr/labor-stats-frontend.git
cd labor-stats-frontend

2. Instalar dependencias
npm install

3. Configurar variables de entorno

Crea un archivo .env en la raíz:

VITE_API_URL=http://localhost:5000


Debe apuntar a la URL del backend (local o en producción).

4. Ejecutar en modo desarrollo
npm run dev


La aplicación estará disponible en:
http://localhost:5173

# Conexión con el backend

El frontend consume los siguientes endpoints del backend:

GET /api/unemployment?country=ES&year=2023

GET /api/timeseries?country=ES

GET /api/countries

El backend se encarga de:

Consultar Eurostat

Normalizar datos

Exponer una API sencilla para el frontend

# Experiencia de usuario (UX)

- Loader visible durante las búsquedas

- Botón y campos deshabilitados mientras se cargan datos

- Mensajes claros cuando no hay resultados

- Dropdown con placeholder mientras cargan países

- Año actual seleccionado por defecto

# Posibles mejoras futuras

Comparar múltiples países

Selección de rangos de años

Modo oscuro

Persistencia de búsquedas recientes

Tests unitarios (Vitest / Jest)

# Autor

Luis David Espinal Espinal

GitHub: https://github.com/LuisDavid-DeveloperSr

Portfolio: https://luisdavidespinal.com

📄 Licencia

Este proyecto se distribuye bajo licencia MIT.
Uso libre con fines educativos y profesionales.