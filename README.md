# 🪚 Factory AI Backend - Asistente para Carpintería de Algarrobo

Este es el motor de backend para un asistente virtual inteligente diseñado para una fábrica de muebles de algarrobo con más de 20 años de trayectoria. El sistema utiliza **Inteligencia Artificial (Claude API)** para gestionar consultas de clientes, diferenciar entre productos de catálogo y pedidos personalizados, y optimizar el flujo de ventas.

## 🚀 Tecnologías Utilizadas

* **Node.js & TypeScript**: Base del servidor con tipado estricto para mayor seguridad.
* **Express**: Framework robusto para la creación de la API REST.
* **Anthropic SDK (Claude 3.5 Sonnet)**: Orquestación de modelos de lenguaje avanzados.
* **PostgreSQL**: Base de datos relacional para la gestión de diseños y leads.
* **TSX**: Entorno de ejecución moderno para soporte nativo de ES Modules (ESM).

## 🏗️ Arquitectura del Sistema

El proyecto sigue una arquitectura limpia (Clean Architecture) desacoplada en capas:
* **Routes**: Definición de endpoints y contratos de API.
* **Controllers**: Manejo de peticiones y respuestas HTTP.
* **Services**: Lógica de negocio e integración con la IA (Tool Calling).
* **Config**: Gestión de variables de entorno y conexiones externas.



## 🤖 Lógica del Asistente (Agentic Workflow)

A diferencia de un chatbot convencional, este agente está programado para entender la naturaleza del negocio de fabricación a pedido:
1.  **Consulta de Catálogo**: Identifica si el pedido es un diseño estándar.
2.  **Plazos de Fabricación**: Informa automáticamente el tiempo de producción (14 días).
3.  **Pedidos Personalizados**: Detecta cuando un cliente requiere un diseño a medida e inicia el proceso de presupuesto con el carpintero.

## 🛠️ Configuración Local

1.  Clonar el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/factory-ai-backend.git](https://github.com/tu-usuario/factory-ai-backend.git)
    ```
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Configurar variables de entorno:
    Crea un archivo `.env` basado en `.env.example`:
    ```env
    PORT=3001
    ANTHROPIC_API_KEY=tu_api_key_aqui
    DATABASE_URL=tu_url_de_postgres
    ```
4.  Correr en modo desarrollo:
    ```bash
    npm run dev
    ```

## 📈 Próximos Pasos
- [ ] Conexión completa a base de datos PostgreSQL.
- [ ] Integración de Tool Calling para inserción de leads automática.
- [ ] Implementación de WebSockets para respuestas en tiempo real.

---
Desarrollado por [Tu Nombre] - Systems Analyst & Fullstack Developer.