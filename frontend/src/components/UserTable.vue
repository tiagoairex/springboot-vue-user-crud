<template>

  <div class="bg-white shadow rounded-lg p-6">

    <table class="w-full text-left border-collapse">

      <thead>
      <tr class="border-b">
        <th class="p-3">ID</th>
        <th class="p-3">Name</th>
        <th class="p-3">Email</th>
        <th class="p-3">Action</th>
      </tr>
      </thead>

      <tbody>

      <tr
          v-for="user in users"
          :key="user.id"
          class="border-b hover:bg-gray-50"
      >

        <td class="p-3">{{ user.id }}</td>
        <td class="p-3">{{ user.name }}</td>
        <td class="p-3">{{ user.email }}</td>

        <td class="p-3">

          <div class="flex gap-2">

            <button
                class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition"
                @click="$emit('edit-user', user)"
            >
              Edit
            </button>

            <button
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                @click="$emit('delete-user', user.id)"
            >
              Delete
            </button>

          </div>

        </td>

      </tr>

      </tbody>

    </table>

  </div>

</template>

<script setup>

defineProps({
  users: Array
})

</script>