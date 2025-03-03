const footer = document.querySelector('footer');

footer.innerHTML = `
    <footer class="bg-white shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800 antialiased">
  <p class="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
      &copy; 2025 <a href="/index.html" class="hover:underline" target="_blank">Cines Alvarez</a>. Todos los derechos reservados.
  </p>
  <div class="flex justify-center items-center space-x-1">
    <a href="#" data-tooltip-target="tooltip-facebook" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
        <i class="fa-brands fa-facebook"></i>
        <span class="sr-only">Facebook</span>
    </a>
    <a href="#" data-tooltip-target="tooltip-twitter" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
        <i class="fa-brands fa-x-twitter"></i>
        <span class="sr-only">Twitter</span>
    </a>
    <a href="#" data-tooltip-target="tooltip-github" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
        <i class="fa-brands fa-github"></i>
        <span class="sr-only">Github</span>
    </a>
    <a href="#" data-tooltip-target="tooltip-dribbble" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
        <i class="fa-brands fa-instagram"></i>
        <span class="sr-only">Instagram</span>
    </a>
</div>
</footer>
`;