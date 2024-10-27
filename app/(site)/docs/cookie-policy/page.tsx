import SidebarLink from "@/components/Docs/SidebarLink";

export default function CookiePolicy() {
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/4">
            <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
              <ul className="space-y-2">
                <SidebarLink href="/docs" text="Introduction" />
                <SidebarLink href="/docs/privacy-policy" text="Política de Privacidad" />
                <SidebarLink href="/docs/cookie-policy" text="Política de Cookies" />
              </ul>
            </div>
          </div>

          <div className="w-full px-4 lg:w-3/4">
            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h1>Política de Cookies</h1>

              <h3>1. ¿Qué Son las Cookies?</h3>
              <p>
                Las cookies son pequeños archivos de texto almacenados en tu dispositivo cuando visitas un sitio web. Ayudan a mejorar la experiencia del usuario al recordar tus preferencias y datos de navegación.
              </p>

              <h3>2. Cómo Usamos las Cookies</h3>
              <p>En Vantren utilizamos cookies para:</p>
              <ul className="list-disc ml-6">
                <li><strong>Personalización del sitio:</strong> Adaptar el contenido y los servicios a tus preferencias.</li>
                <li><strong>Análisis de rendimiento:</strong> Entender cómo los usuarios interactúan con nuestro sitio y mejorar la funcionalidad.</li>
                <li><strong>Publicidad:</strong> Mostrar anuncios relevantes según tus intereses (cuando aplique).</li>
              </ul>

              <h3>3. Tipos de Cookies que Utilizamos</h3>
              <ul className="list-disc ml-6">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio.</li>
                <li><strong>Cookies de rendimiento:</strong> Recopilan datos anónimos sobre cómo los usuarios navegan en el sitio.</li>
                <li><strong>Cookies de funcionalidad:</strong> Recuerdan tus preferencias para ofrecer una experiencia más personalizada.</li>
              </ul>

              <h3>4. Gestión de Cookies</h3>
              <p>
                Puedes gestionar y desactivar las cookies desde la configuración de tu navegador. Ten en cuenta que, al desactivar ciertas cookies, algunas funciones del sitio podrían no estar disponibles.
              </p>

              <h3>5. Cambios en la Política de Cookies</h3>
              <p>
                Esta política de cookies puede actualizarse para reflejar cambios en la tecnología o en nuestras prácticas. Te recomendamos revisarla periódicamente para mantenerte informado.
              </p>

              <h3>6. Contacto</h3>
              <p>
                Para cualquier duda sobre nuestra Política de Uso de Cookies, contáctanos en:  
                <strong>Correo:</strong> contacto@vantren.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
