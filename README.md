# Librería de Componentes Reutilizables

Este proyecto es una librería de componentes desarrollada con Vue 3, TypeScript y Vite. Los componentes están diseñados para ser reutilizables y distribuidos a través de npm.

## Estructura del Proyecto

La estructura general del proyecto es la siguiente:

```plaintext
root/ # Directorio raíz del proyecto
|
├── src/ # Código fuente de la librería
│   ├── assets/ # Recursos estáticos como imágenes, fuentes, etc.
│   ├── components/ # Componentes reutilizables
│   │   └── ComponentName/ # Carpeta del componente
│   │       ├── ComponentName.vue # Componente Vue
│   │       ├── ComponentName.spec.ts # Pruebas unitarias del componente
│   │       ├── ComponentName.styles.css # Estilos específicos del componente
│   │       └── ComponentName.stories.ts # Historias para Storybook
│   ├── composables/ # Composables reutilizables
│   ├── utils/ # Funciones y utilidades generales
│   ├── types/ # Tipos de TypeScript
│   ├── interfaces/ # Interfaces de TypeScript
│   ├── styles/ # Estilos globales o específicos de los componentes
│   ├── lib/ # Punto de entrada de la librería
│   └── main.ts # Punto de entrada principal de la aplicación
│
├── tests/ # Pruebas unitarias y de integración
│   ├── components/ # Pruebas de los componentes
│   ├── utils/ # Pruebas de las utilidades
│   └── setup.ts # Configuración de pruebas
│
├── dist/ # Archivos generados para distribución
├── node_modules/ # Dependencias del proyecto
│
├── public/ # Archivos públicos para documentación o ejemplos
│   └── demo.html # Ejemplo de uso de la librería
│
├── .storybook/ # Configuración de Storybook
│   ├── main.ts # Configuración principal de Storybook
│   ├── preview.ts # Configuración de la vista previa de Storybook
│   └── vitest.setup.ts # Configuración de Vitest para Storybook
│
├── .env # Variables de entorno
├── .gitignore # Archivos y directorios ignorados por Git
├── .gitmodules # Submódulos de Git
├── .prettierignore # Archivos y directorios ignorados por Prettier
├── .prettierrc # Configuración de Prettier
├── .nvmrc # Versión de Node.js utilizada en el proyecto
├── .idea/ # Configuración de WebStorm
├── .vscode/ # Configuración de Visual Studio Code
│
├── index.html # Archivo principal de la aplicación
│
├── package.json # Configuración de dependencias y scripts
├── package-lock.json # Dependencias específicas de la instalación
│
├── tsconfig.json # Configuración de TypeScript
├── tsconfig.app.json # Configuración de TypeScript para la aplicación
├── tsconfig.node.json # Configuración de TypeScript para Node.js
│
├── tailwind.config.ts # Configuración de Tailwind CSS
├── postcss.config.js # Configuración de PostCSS
├── eslint.config.js # Configuración de ESLint
├── vite.config.ts # Configuración de Vite
├── vitest.config.ts # Configuración de Vitest
│
└── README.md # Documentación del proyecto
```

## Glosario de carpetas

- `src/`: Contiene el código fuente de la aplicación principal.
- `assets/`: Contiene recursos estáticos como imágenes, estilos, etc.
- `styles/`: Contiene estilos de la aplicación.
- `tests/`: Contiene pruebas unitarias y de integración.
- `router/`: Contiene la configuración de rutas de la aplicación, definiendo cómo se navega entre las diferentes vistas.
- `config/`: Contiene la configuración de la aplicación o librerías externas.
- `layouts/`: Contiene los layouts de la aplicación, que son componentes de alto nivel que definen la estructura de la
  página.
- `views/`: Contiene las vistas de la aplicación, que son componentes de alto nivel que representan páginas completas.
- `components/`: Contiene componentes reutilizables que pueden ser utilizados en múltiples vistas o en otros
  componentes.
- `stores/`: Contiene los estados globales de la aplicación, gestionados con Pinia, para compartir datos entre
  componentes.
- `utils/`: Contiene funciones y utilidades generales que pueden ser reutilizadas en diferentes partes de la aplicación.
- `utils/cconfig/`: Contiene funciones y utilidades específicas para extraer y manejar la configuración del partner.
- `interfaces/`: Contiene las interfaces de la aplicación, que se utilizan para definir contratos en el código,
  asegurando que las clases y objetos sigan una estructura específica.
- `types/`: Contiene los tipos de TypeScript, que se utilizan para definir la forma de los datos y mejorar la seguridad
  del código.
- `composables/`: Contiene los composables de la aplicación, que son funciones reutilizables que encapsulan lógica
  reactiva y pueden ser utilizadas en componentes Vue.
- `microservices/`: Contiene los microservicios de la aplicación, que son aplicaciones independientes que se integran en
  la aplicación principal.

## Estandarización de Nombres

Para mantener una estructura de código clara y consistente, siempre deben ser en INGLÉS y seguir las siguientes
convenciones de nombres:

- **Componentes de Vue:** Deben ser descriptivos y seguir la convención de PascalCase. Para componentes comunes utiliza los siguientes formatos:
    - **Botones:** `ButtonPrimary.vue`, `ButtonSecondary.vue`, `IconButton.vue`
    - **Menús:** `MenuDropdown.vue`, `MenuSidebar.vue`
    - **Modales:** `ModalConfirm.vue`, `ModalInfo.vue`
    - **Sliders:** `ImageSlider.vue`, `ProductSlider.vue`
    - **Banners:** `BannerPromo.vue`, `BannerInfo.vue`
    - **Otros componentes:** Sigue el patrón `<TipoDeComponente><Descripción>.vue` (ejemplo: `CardProduct.vue`, `TableUser.vue`)
- **Archivos de Configuración:** Deben tener un nombre descriptivo y seguido de `.config` (`config-name.config.ts`).
- **Configuración:** Debe tener un nombre descriptivo y seguir la convención de CamelCase (`configName`).
- **Archivos de Estilos:** Deben tener el nombre estándar y seguir la convención KebabCase (`styles-name.css`). Si son
  estilos globales, deben tener el nombre `styles.css` y estar en el `src/` de cada microservicio.
- **Archivos de Estados Globales:** Deben tener el nombre del recurso que están manejando, seguir la convención
  KebabCase y seguido de `.store` (
  `home.store.ts`).
- **Archivos de Utilidades:** Deben tener un nombre descriptivo, seguir la convención KebabCase y seguido de `.util` (
  `function-name.util.ts`).
- **Utilidad:** Debe tener un nombre descriptivo y seguir la convención de CamelCase (`functionName`).
- **Archivos de Composables:** Deben tener un nombre descriptivo, seguir la convención CamelCase y seguido de
  `.composable` (
  `useFunction.composable.ts`).
- **Composable:** Debe tener un nombre descriptivo y seguir la convención de CamelCase (`useFunction`).
- **Archivos de Interfaces:** Deben tener un nombre descriptivo y seguido de `.interface` (`IInterface.interface.ts`).
- **Interface:** Debe tener un nombre descriptivo y seguir la convención de PascalCase (`InterfaceName`).
- **Archivos de Tipos:** Deben tener un nombre descriptivo y seguido de `.type` (`Type.type.ts`).
- **Tipo:** Debe tener un nombre descriptivo y seguir la convención de PascalCase (`TypeName`).
- **Pruebas Unitarias:** Deben tener un nombre descriptivo y seguido de `.spec` (`function.spec.ts`).
- **Variables:** Deben tener un nombre descriptivo y seguir la convención de CamelCase (`variableName`). Si es una
  constante, debe estar en mayúsculas y separar las palabras con guiones (`CONSTANT_NAME`).
- **Funciones:** Deben tener un nombre descriptivo y seguir la convención de CamelCase (`functionName`).
    - Si es una función que devuelve un booleano, debe comenzar con `is` o `has` (`isReady`, `hasPermission`).
    - Si es una función que no devuelve nada, debe comenzar con `handle` (`handleClick`, `handleError`).
    - Si es una función que devuelve un valor, debe comenzar con `get` (`getUsers`, `getProducts`).
    - Si es una función que modifica un valor, debe comenzar con `set` (`setUser`, `setProduct`).
    - Si es una función que elimina un valor, debe comenzar con `delete` (`deleteUser`, `deleteProduct`).
    - Si es una función que válida un valor, debe comenzar con `validate` (`validateEmail`, `validatePassword`).
- **Hooks:** Deben tener un nombre descriptivo y seguir la convención de CamelCase (`useHook`).
    - Si es un hook que devuelve un booleano, debe comenzar con `useIs` o `useHas` (`useIsReady`, `useHasPermission`).
    - Si es un hook que no se devuelve nada, debe comenzar con `useHandle` (`useHandleClick`, `useHandleError`).
    - Si es un hook que devuelve un valor, debe comenzar con `useGet` (`useGetUsers`, `useGetProducts`).
    - Si es un hook que modifica un valor, debe comenzar con `useSet` (`useSetUser`, `useSetProduct`).
    - Si es un hook que elimina un valor, debe comenzar con `useDelete` (`useDeleteUser`, `useDeleteProduct`).
    - Si es un hook que válida un valor, debe comenzar con `useValidate` (`useValidateEmail`, `useValidatePassword`).
    - Si es un hook que se ejecuta en un evento, debe comenzar con `useOn` (`useOnClick`, `useOnScroll`).
- **IDs y Clases CSS:**
    - Si es un identificador único, debe seguir la convención de snake_case (`id_name`) y comenzar con `id-` (
      `id-element`).
    - Si es una clase reutilizable, debe seguir la convención de KebabCase (`class-name`).
    - Si es una clase específica para un componente, debe comenzar con el nombre del componente (`home-cta`).
    - Si es una clase de un elemento específico, debe comenzar con el nombre del componente y el nombre del elemento (
      `home-cta-button`).
    - Si es una clase de un estado específico, debe comenzar con el nombre del componente y el nombre del estado (
      `home-cta-button-active`).

## Configuración y Ejecución

Para configurar y ejecutar el proyecto, sigue estos pasos:

1. **Versión de Node.js:** Asegúrate de tener instalada la versión de Node.js especificada en el archivo `.nvmrc`.
2. **Instalar dependencias:**

    ```sh
    npm install
    ```

3. **Ejecutar la aplicación:**

    ```sh
    npm run dev
    ```

## Actualización de la Librería en npm

### Publicar en Producción (Release Estable)

1. **Aumentar la versión:**  
   Actualiza la versión en el archivo `package.json` siguiendo el esquema semántico (`major.minor.patch`).

    ```json
    {
        "version": "1.0.1"
    }
    ```

    ```json
    {
        "release:patch": "npm version patch && npm publish",
        "release:minor": "npm version minor && npm publish",
        "release:major": "npm version major && npm publish"
    }
    ```

2. **Construir la librería:**  
   Genera los archivos de distribución:

    ```sh
    npm run build
    ```

3. **Iniciar sesión en npm:**  
   Asegúrate de estar autenticado:

    ```sh
    npm login
    ```

4. **Publicar la librería en producción:**  
   Publica la versión estable (por defecto, el tag es `latest`):

    ```sh
    npm publish --access=restricted
    ```

5. **Verificar la publicación:**  
   Confirma que la nueva versión está disponible:

    ```sh
    npm view <nombre-de-la-libreria>
    ```

---

### Publicar en Desarrollo (Pre-release: dev, beta, alpha, etc.)

1. **Aumentar la versión pre-release:**  
   Usa un identificador de pre-release en la versión, por ejemplo:

    ```json
    {
        "version": "1.0.2-dev.0"
    }
    ```

    ```json
    {
        "release:dev": "npm version prerelease --preid=dev && npm publish --tag dev"
    }
    ```

    O usa el comando npm para incrementar y etiquetar la versión:

    ```sh
    npm version prerelease --preid=dev
    ```

2. **Construir la librería:**  
   Genera los archivos de distribución:

    ```sh
    npm run build
    ```

3. **Iniciar sesión en npm:**  
   Asegúrate de estar autenticado:

    ```sh
    npm login
    ```

4. **Publicar la librería con tag de desarrollo:**  
   Publica la versión pre-release con un tag personalizado (por ejemplo, `dev`):

    ```sh
    npm publish --tag dev --access=restricted
    ```

5. **Verificar la publicación:**  
   Confirma que la versión pre-release está disponible:

    ```sh
    npm view <nombre-de-la-libreria> --tag dev
    ```

## Buenas Prácticas de Desarrollo

- **Composition API:** Utiliza la Composition API para estructurar la lógica de los componentes de forma clara y
  reutilizable. Vue recomienda usar la en aplicaciones web grandes debido a su mejor escalabilidad y
  organización del código. La Composition API permite encapsular la lógica relacionada en funciones reutilizables, lo
  que facilita el mantenimiento y la extensión del código.
    - **Componentes Reutilizables:** Utiliza componentes reutilizables para evitar la duplicación de código y facilitar el mantenimiento. Los componentes deben ser modulares y cumplir con el principio de responsabilidad única.
        - **Pasos para crear un componente reutilizable:**
            1. **Crear su respectiva carpeta:** Dentro de la carpeta `src/components/`, crea una nueva carpeta con el nombre del componente siguiendo la convención PascalCase (`ComponentName/`).
            2. **Crear el archivo `.vue`:** Dentro de la carpeta del componente, crea el archivo principal del componente con la extensión `.vue` (`ComponentName.vue`).
            3. **Crear su documentación en `.stories`:** Crea un archivo `.stories.ts` dentro de la carpeta del componente para documentar y mostrar ejemplos de uso del componente (`ComponentName.stories.ts`).
            4. **Crear el archivo `.css` (opcional):** Si el componente requiere estilos específicos, crea un archivo `.css` dentro de la carpeta del componente (`ComponentName.styles.css`) y define los estilos necesarios. Posteriormente, puedes importar este archivo en el componente Vue.

            5. **Crear las pruebas unitarias:** Crea un archivo `.spec.ts` dentro de la carpeta del componente para escribir pruebas unitarias que verifiquen el correcto funcionamiento del componente (`ComponentName.spec.ts`).
            6. **Exportar el componente:** Una vez finalizado el desarrollo del componente, exporta el componente en el archivo `src/lib/main.ts` para que esté disponible en la librería.

        - **Ejemplo de estructura de un componente:**

            ```plaintext
            src/components/ComponentName/
            ├── ComponentName.vue
            ├── ComponentName.stories.ts
            ├── ComponentName.styles.css
            └── ComponentName.spec.ts
            ```

- **Tipos y Interfaces:** Utiliza tipos y interfaces para definir la forma de los datos y mejorar la seguridad del
  código. Las interfaces se utilizan para definir contratos en el código, mientras que los tipos se utilizan para
  definir la forma de los datos.
    - **Interfaces:** Las interfaces se utilizan para definir la estructura de un objeto y asegurar que las clases y
      objetos
      sigan una estructura específica.

        ```typescript
        export interface User {
            id: number;
            name: string;
            email: string;
        }

        const user: User = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
        };
        ```

    - **Tipos:** Los tipos se utilizan para definir la forma de los datos y mejorar la seguridad del código.

        ```typescript
        type UserId = number;

        const userId: UserId = 1;
        ```

- **Utilidades:** Utiliza utilidades para encapsular lógica no reactiva y no dependen de la Composition API. Se utilizan
  para tareas comunes y repetitivas en la aplicación.

    ```typescript
    export function formatDate(date: Date): string {
        return date.toISOString().split('T')[0];
    }
    ```

- **Composables:** Utiliza composables para encapsular lógica reactiva y utilizar la Composition API (ref, reactive,
  computed, watch, etc.). Se utilizan para compartir y reutilizar lógica entre componentes Vue.

    ```typescript
    import { ref, watch } from 'vue';

    export function useLocalStorage(key: string, initialValue: any) {
        const storedValue = ref(localStorage.getItem(key) || initialValue);

        watch(storedValue, (newValue) => {});

        return storedValue;
    }
    ```

- **Pruebas:** Escribe las pruebas para garantizar el correcto funcionamiento de las funciones y
  componentes. Utiliza vitest y vue-test-utils para escribir pruebas unitarias y de integración.

    ```vue
    <!-- src/components/ButtonWithClick.vue -->
    <template>
        <button @click="handleClick">{{ text }}</button>
    </template>

    <script setup lang="ts">
    import { defineEmits, defineProps } from 'vue';

    const props = defineProps<{ text: string }>();
    const emit = defineEmits(['click']);

    const handleClick = () => {
        emit('click');
    };
    </script>
    ```

    - Las pruebas unitarias son esenciales para garantizar que cada componente o función individual de la aplicación
      funcione correctamente de manera aislada. Estas pruebas se centran en verificar la lógica interna de una unidad de
      código sin depender de otras partes del sistema.

    ```typescript
    // tests/components/Button.spec.ts
    import { mount } from '@vue/test-utils';
    import { describe, expect, it } from 'vitest';

    import Button from '@/components/Button.vue';

    describe('Button.vue', () => {
        it('renders the correct text', () => {
            const wrapper = mount(Button, {
                props: {
                    text: 'Click Me',
                },
            });
            expect(wrapper.text()).toBe('Click Me');
        });
    });
    ```

    - Las pruebas de integración son pruebas automatizadas que validan la interacción entre diferentes módulos o
      componentes de una aplicación. El objetivo es asegurarse de que funcionen correctamente juntos y que las
      dependencias entre ellos estén bien gestionadas.

    ```typescript
    // tests/components/ButtonWithClick.spec.ts
    import { mount } from '@vue/test-utils';
    import { describe, expect, it, vi } from 'vitest';

    import ButtonWithClick from '@/components/ButtonWithClick.vue';

    describe('ButtonWithClick.vue', () => {
        it('renders the correct text and emits click event', async () => {
            const wrapper = mount(ButtonWithClick, {
                props: {
                    text: 'Click Me',
                },
            });

            expect(wrapper.text()).toBe('Click Me');

            await wrapper.find('button').trigger('click');
            expect(wrapper.emitted()).toHaveProperty('click');
        });
    });
    ```

- **Documentación:** Documenta el código y la estructura del proyecto para facilitar el mantenimiento y la colaboración.
  Utiliza comentarios con TSDoc para documentar funciones, clases y módulos.

    ```typescript
    /**
     * Suma dos números.
     * @param {number} a - El primer número.
     * @param {number} b - El segundo número.
     * @returns {number} La suma de los dos números.
     */
    export function sum(a: number, b: number): number {
        return a + b;
    }
    ```

- **Rendimiento:** Optimiza el rendimiento de la aplicación para garantizar una experiencia rápida y receptiva para los
  usuarios. Algunas recomendaciones de Vue incluyen:
    - **Desmontar eventos:** Asegúrate de desmontar los eventos cuando ya no sean necesarios para evitar el consumo
      innecesario de memoria.

        ```typescript
        import { onMounted, onUnmounted } from 'vue';

        export function useEventListener(event: string, handler: EventListener) {
            onMounted(() => {
                window.addEventListener(event, handler);
            });

            onUnmounted(() => {
                window.removeEventListener(event, handler);
            });
        }
        ```

    - **Lazy Loading:** Carga los componentes y recursos de forma diferida para reducir el tiempo de carga inicial.

        ```typescript
        const LazyComponent = defineAsyncComponent(() => import('./LazyComponent.vue'));
        ```

    - **Optimización de imágenes:** Utiliza imágenes optimizadas y formatos modernos como WebP y WebM para reducir el
      tamaño de los archivos.

- **Internacionalización:** Diseña la aplicación para que sea internacionalizable y pueda ser utilizada por usuarios de
  diferentes idiomas y regiones. Utiliza la biblioteca `vue-i18n` para gestionar las claves de traducciones y el
  contenido
  multilingüe.
    - **Claves de Traducción:** Define las claves de traducción usando la convención de KebabCase y agrúpalas por
      página, componentes o módulos. Por ejemplo, para las páginas de inicio y acerca de, puedes tener las siguientes
      claves de traducción:

        ```json
        {
            "home": {
                "title": "Welcome to our website",
                "description": "This is a demo website"
            },
            "about": {
                "title": "About Us",
                "description": "Learn more about our company"
            }
        }
        ```

    - **Traducción de Texto:** Utiliza las claves de traducción en los componentes Vue para mostrar el texto en el
      idioma correcto. Puedes utilizar la función `t` del hook `useI18n` para traducir el texto.

        ```vue
        <script setup>
        import { useI18n } from 'vue-i18n';

        const { t } = useI18n();
        </script>

        <template>
            <div>
                <h1>{{ t('home.title') }}</h1>
                <p>{{ t('home.description') }}</p>
            </div>
        </template>
        ```

- **Formateo y Linting:** Utiliza las herramientas de formateo y linting para mantener un código limpio y consistente en
  todo el proyecto. Usa los siguientes scripts para verificar si hay problemas en el código.
    - **Prettier:** Utiliza Prettier para formatear automáticamente el código según las reglas de estilo definidas en el
      archivo de configuración.

        ```sh
        npm run format
        ```

    - **ESLint:** Utiliza ESLint para identificar y corregir problemas en el código, siguiendo las reglas de estilo
      definidas en el archivo de configuración.

        ```sh
        npm run lint
        ```

    - **Check:** Utiliza el script `check` para ejecutar Prettier y ESLint y verificar si hay problemas en el código.

        ```sh
        npm run check
        ```

- **Revisión de Código:** Realiza revisiones de código y pruebas del desarrollo en un entorno local con distintos
  partners antes de hacer un pull request para garantizar la calidad y consistencia del código en todo el proyecto.

## Commit Messages

Los mensajes de commit deben seguir el siguiente formato convencional para mantener un historial de cambios claro y
consistente.

```
<tipo>:"([IDProyecto]-[codigo])-[descripción]"
```

- **Tipo:** El tipo de commit indica la naturaleza del cambio realizado. Puede ser uno de los siguientes:
    - **feat:** Nueva funcionalidad o característica.
    - **fix:** Corrección de errores o bugs.
    - **docs:** Cambios en la documentación.
    - **style:** Cambios en el estilo del código (espacios, sangrías, etc.).
    - **refactor:** Refactorización del código sin cambios funcionales.
    - **test:** Añadir o modificar pruebas.
    - **chore:** Tareas de mantenimiento, actualizaciones, etc.
- **IDProyecto:** Identificador del proyecto.
- **Codigo:** Código de la tarea.
- **Descripción:** Descripción breve y concisa del cambio realizado.

## Pull Requests

Los pull requests deben seguir las siguientes recomendaciones para facilitar la revisión y la integración del código.

```
PR_[prefijo]-[IDProyecto]-[codigo]-[descripcion]
```

- **PR:** Prefijo para identificar el pull request.
- **Prefijo:** Prefijo del proyecto.
    - **Feature:** Nueva funcionalidad o característica.
    - **Bugfix:** Corrección de errores o bugs.
    - **Hotfix:** Corrección urgente de errores críticos.
- **IDProyecto:** Identificador del proyecto.
- **Codigo:** Código de la tarea.
- **Descripción:** Descripción breve y concisa del cambio realizado.

## Autenticación para Librerías Privadas en npm

Existen dos maneras principales de autenticar para acceder a una librería privada en npm:

### 1. **Autenticación con `npm login`**

Este método requiere que el usuario inicie sesión manualmente en npm utilizando sus credenciales. Sigue estos pasos:

1. **Iniciar sesión en npm:** Ejecuta el siguiente comando en la terminal y proporciona tu usuario, contraseña y correo electrónico asociado a tu cuenta de npm.

    ```sh
    npm login
    ```

2. **Instalar la librería:** Una vez autenticado, puedes instalar la librería privada utilizando el siguiente comando:

    ```sh
    npm install @scope/<nombre-de-la-libreria>
    ```

Este método es útil para autenticaciones temporales o cuando no se desea almacenar el token en el proyecto.

---

### 2. **Autenticación con archivo `.npmrc`**

Este método utiliza un archivo de configuración `.npmrc` para almacenar el token de autenticación, permitiendo acceso continuo a la librería privada. Sigue estos pasos:

1. **Obtener el token de autenticación:** Después de iniciar sesión con `npm login`, el token se genera automáticamente y se puede encontrar en el archivo global de configuración `.npmrc` ubicado en tu carpeta de usuario (`~/.npmrc`).

2. **Crear un archivo `.npmrc` en el proyecto:** En el directorio raíz del proyecto, crea un archivo `.npmrc` y agrega la siguiente configuración:

    ```plaintext
    @<SCOPE>:registry=https://registry.npmjs.org/
    //registry.npmjs.org/:_authToken=<tu-token-de-autenticación>
    ```

3. **Instalar la librería:** Una vez configurado el archivo `.npmrc`, puedes instalar la librería privada utilizando el siguiente comando:

    ```sh
    npm install @scope/<nombre-de-la-libreria>
    ```

Este método es ideal para proyectos donde se necesita acceso continuo a la librería privada sin requerir autenticación manual cada vez.

---

Ambos métodos permiten acceder a librerías privadas en npm, pero la elección depende de las necesidades del proyecto y las preferencias de seguridad.

## Historial de Versiones

### [0.0.0]

- Se ha añadido la estructura inicial del proyecto.
