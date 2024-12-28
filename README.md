# Microservicios en nestjs

- Monolithic : usando TCP:
https://docs.nestjs.com/microservices/basics
* http://localhost:3000/test
<p>
 monolíticas, Nest admite de forma nativa el estilo de desarrollo arquitectónico de microservicios. La mayoría de los conceptos analizados en otras partes de esta documentación, como la inyección de dependencias, decoradores, filtros de excepción, canalizaciones, protecciones e interceptores, se aplican igualmente a los microservicios. Siempre que es posible, Nest abstrae los detalles de implementación para que los mismos componentes puedan ejecutarse en plataformas basadas en HTTP, WebSockets y microservicios. Esta sección cubre los aspectos de Nest que son específicos de los microservicios.

</p>

- Redis : https://docs.nestjs.com/microservices/redis

* http://localhost:3000/test1
* http://localhost:3000/test2

📡 Comunicación en Tiempo Real (Pub/Sub)

Redis permite que los microservicios se comuniquen en tiempo real mediante su sistema Publicar/Suscribir (Pub/Sub).
Ejemplo: Un microservicio publica un mensaje, y otros servicios suscritos a ese canal reciben automáticamente la información.
⚡ Alta Velocidad y Baja Latencia

Redis almacena los datos en memoria RAM, lo que hace que las operaciones sean increíblemente rápidas.
Perfecto para tareas que requieren respuestas inmediatas (ej. autenticación, colas de tareas).
🔄 Persistencia Opcional

Redis permite mantener los datos solo en memoria (para velocidad) o guardarlos en disco para persistencia.
📊 Estructuras de Datos Ricas

Redis maneja estructuras como listas, conjuntos, hashes, streams y sorted sets, lo que facilita modelos de datos complejos.
🧠 Gestión de Sesiones y Caché

Redis es ampliamente utilizado para almacenar sesiones de usuarios y como sistema de caché para reducir la carga en bases de datos tradicionales.

🧩 Casos de Uso Comunes de Redis en Microservicios

✅ 1. Sistema de Caché
Redis se usa como un almacenamiento en caché para reducir la carga de consultas en bases de datos más pesadas como MySQL o MongoDB.
Ejemplo: Datos de productos más consultados en una tienda en línea.

✅ 2. Gestión de Sesiones de Usuarios
Redis almacena sesiones de usuario y permite autenticaciones más rápidas en sistemas distribuidos.
Ejemplo: Un usuario inicia sesión, y la sesión se almacena temporalmente en Redis.

✅ 3. Sistema de Pub/Sub
Redis facilita la comunicación en tiempo real entre servicios a través de su sistema de Publicar/Suscribir.
Ejemplo: Un microservicio publica una actualización de stock y otros microservicios reciben la notificación.

✅ 4. Colas de Tareas (Task Queues)
Redis se utiliza para gestionar colas de trabajos en segundo plano (background jobs).
Ejemplo: Procesar miles de correos electrónicos o notificaciones de forma asíncrona.

✅ 5. Control de Rate Limiting (Límite de Peticiones)
Redis puede actuar como un contador para limitar el número de solicitudes de un usuario en un tiempo determinado.
Ejemplo: Máximo 5 intentos de inicio de sesión en 1 minuto.

✅ 6. Almacenamiento Temporal de Datos
Redis es excelente para almacenar datos temporales que no necesitan persistencia prolongada.

Ejemplo: Tokens de recuperación de contraseña con caducidad automática.

NOTA: se debe tener Redis instlado en el sistema , comando para Linux : 

- sudo apt install redis-server
