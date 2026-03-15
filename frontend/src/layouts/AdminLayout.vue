<template>

  <div class="flex h-screen bg-gray-100">

    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white p-4">

      <h1 class="text-xl font-bold mb-6">
        Admin Panel
      </h1>

      <ul class="space-y-3">

        <li>
          <router-link to="/" class="hover:text-gray-300">
            Dashboard
          </router-link>
        </li>

        <li>
          <router-link to="/users" class="hover:text-gray-300">
            Users
          </router-link>
        </li>

      </ul>

    </aside>

    <!-- Content -->
    <main class="flex-1 p-8">
      <slot />
    </main>

  </div>

</template>