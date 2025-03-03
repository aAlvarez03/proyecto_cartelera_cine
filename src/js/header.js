document.addEventListener('DOMContentLoaded', () => {
    const menuBoton = document.querySelector('nav button');
    const cerrarBoton = document.getElementById('cerrarMenu');
    const mobileMenu = document.querySelector(".lg\\:hidden[role='dialog']");
    const backdrop = document.querySelector(".fixed.inset-0.z-50");


    if(menuBoton && cerrarBoton && mobileMenu){
        menuBoton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });

        cerrarBoton.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        })

        backdrop.addEventListener('click', () => {
            mobileMenu.classList.add("hidden");
        })
    }
})

const header = document.querySelector('header');


header.innerHTML = `
<div class="inset-x-0 top-0 z-50">
        <nav
          class="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <a href="../index.html" class="-m-1.5 p-1.5">
              <span class="font-bold text-2xl">Cines Alvarez</span>
            </a>
          </div>
          <div class="flex lg:hidden">
            <button
              id="menuBoton"
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md cursor-pointer p-2.5 text-gray-700 hover:bg-gray-100 transition delay-50"
            >
              <span class="sr-only">Abrir menu mobile</span>
              <svg
                class="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a
              href="${window.location.pathname !== 'index.html' ? '../index.html' : '#'}"
              class="text-md font-semibold text-gray hover:bg-blue-500 hover:text-white ${window.location.pathname === '/index.html' ? 'bg-blue-500 text-white' : ''} p-1 rounded transition delay-50"
              >Inicio</a
            >
            <a
              href="${window.location.pathname !== 'salas.html' ? '../salas.html' : '#'}"
              class="text-md font-semibold text-gray hover:bg-blue-500 hover:text-white ${window.location.pathname === '/salas.html' ? 'bg-blue-500 text-white' : ''} p-1 rounded transition delay-50"
              >Salas</a
            >
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="${window.location.pathname !== 'login.html' ? '../login.html' : '#'}" class="text-lg font-semibold text-gray-900 mx-2 hover:bg-blue-500 hover:text-white p-1 rounded transition delay-50 ${window.location.pathname === '/login.html' ? 'bg-blue-500 text-white' : ''}"
              >Login</a
            >
            <a href="${window.location.pathname !== 'registro.html' ? '../registro.html' : '#'}" class="text-lg font-semibold text-gray-900 hover:bg-blue-500 hover:text-white p-1 rounded transition delay-50 ${window.location.pathname === '/registro.html' ? 'bg-blue-500 text-white' : ''}">Registro</a>

            <a href="${window.location.pathname !== 'usuario.html' ? '../usuario.html' : '#'}" class="text-xl mx-2 font-semibold text-gray-900 hover:bg-blue-500 hover:text-white p-1 rounded transition delay-50 ${window.location.pathname === '/usuario.html' ? 'bg-blue-500 text-white' : ''}"><i class="fa-solid fa-circle-user"></i></a>
          </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div
          id="mostrarMenu"
          class="lg:hidden hidden"
          role="dialog"
          aria-modal="true"
        >
          <!-- Background backdrop, show/hide based on slide-over state. -->
          <div class="fixed inset-0 z-50"></div>
          <div
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="font-bold text-xl">Cines-Nicolas</span>
              </a>
              <button
                id="cerrarMenu"
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer hover:bg-gray-100 transition delay-50"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a
                    href="${window.location.pathname !== 'index.html' ? '../index.html' : '#'}"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >Inicio</a
                  >
                  <a
                    href="${window.location.pathname !== 'salas.html' ? '../salas.html' : '#'}"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >Salas</a
                  >
                  
                </div>
                <div class="py-6">
                  <a
                    href="${window.location.pathname !== 'usuario.html' ? '../usuario.html' : '#'}"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >Perfil</a
                  >
                  <a
                    href="${window.location.pathname !== 'login.html' ? '../login.html' : '#'}"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >Login</a
                  >
                  <a
                    href="${window.location.pathname !== 'registro.html' ? '../registro.html' : '#'}"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >Registro</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;