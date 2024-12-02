# Strava Activities Tracker

Aplicación móvil desarrollada con React Native y Expo para rastrear y analizar actividades de Strava.

## Características

- Autenticación con Strava mediante OAuth
- Visualización de actividades recientes
- Estadísticas mensuales de actividades
- Interfaz de usuario intuitiva y moderna

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Expo CLI
- Cuenta de Strava y credenciales de API

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/CristianZen77/strava-activities-tracker.git
cd strava-activities-tracker
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
   - Crear un archivo `.env` en la raíz del proyecto
   - Agregar las siguientes variables:
   ```
   STRAVA_CLIENT_ID=tu_client_id
   STRAVA_CLIENT_SECRET=tu_client_secret
   STRAVA_REDIRECT_URI=exp://localhost:19000/--/oauth2redirect
   ```

## Configuración de Strava API

1. Ir a [Strava API Settings](https://www.strava.com/settings/api)
2. Crear una nueva aplicación
3. Copiar el Client ID y Client Secret
4. Configurar el Authorization Callback Domain como: `localhost:19000`

## Ejecutar la Aplicación

1. Iniciar el servidor de desarrollo:
```bash
npx expo start
```

2. Opciones para ejecutar:
   - Escanear código QR con la app Expo Go en tu teléfono
   - Presionar 'a' para abrir en emulador de Android
   - Presionar 'i' para abrir en simulador de iOS (solo en Mac)

## Estructura del Proyecto

```
strava-activities-tracker/
├── api/                    # Configuración y llamadas a la API
├── components/             # Componentes reutilizables
├── navigation/             # Configuración de navegación
├── screens/                # Pantallas de la aplicación
├── state/                  # Manejo de estado con Zustand
└── utils/                  # Utilidades y helpers
```

## Tecnologías Utilizadas

- React Native
- Expo
- Zustand (manejo de estado)
- React Query (fetching de datos)
- React Navigation
- Axios

## Solución de Problemas

1. Error de puerto en uso:
   - Usar un puerto alternativo cuando se solicite
   - Cerrar otras instancias de Expo

2. Problemas de dependencias:
   - Ejecutar `npm install --legacy-peer-deps`
   - Verificar compatibilidad de versiones en package.json

## Contribuir

1. Hacer fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Hacer commit de tus cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Crear un Pull Request


