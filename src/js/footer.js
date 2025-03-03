const footer = document.querySelector('footer');

footer.innerHTML = `
    <div class="bg-gray-800 text-white text-center py-6 px-6 grid grid-row-2 gap-y-10 lg:grid-rows-1 lg:grid-cols-3">
            <div class="sm: lg:col-span-2">
                <p>© Proyecto hecho por <span class="font-bold text-lg">Alvarez Alejandro Nicolas</span></p>
                <p>Todos los derechos reservados.</p>
            </div>
            <div class="grid grid-row-1 grid-cols-5 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-4 lg:grid-row-1 lg:grid-cols-5 lg:gap-y-0 lg:items-center lg:col-start-4">
                <a href="#" class="text-xl"><i class="fa-brands fa-facebook p-1 hover:bg-blue-300 rounded-md transition delay-25"></i></a>
                <a href="#" class="text-xl"><i class="fa-brands fa-x-twitter p-1 hover:bg-blue-300 rounded-md transition delay-25"></i></a>
                <a href="#" class="text-xl"><i class="fa-brands fa-instagram p-1 hover:bg-blue-300 rounded-md transition delay-25"></i></a>
                <div class="grid col-span-2 grid-cols-2 sm:col-start-1 sm:row-start-2 sm:col-span-3 lg:grid-row-1 lg:col-start-4 lg:row-start-1 lg:place-items-stretch">
                    <a href="#" class="text-xl"><i class="fa-brands fa-github p-1 hover:bg-blue-300 rounded-md transition delay-25"></i></a>
                    <a href="#" class="text-xl"><i class="fa-brands fa-youtube p-1 hover:bg-blue-300 rounded-md transition delay-25"></i></a>
                </div>
            </div>
        </div>
`;