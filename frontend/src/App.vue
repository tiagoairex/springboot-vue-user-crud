<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const name = ref('')
const email = ref('')

const loadUsers = async () => {
  const res = await axios.get('http://localhost:8080/users')
  users.value = res.data
}

const createUser = async () => {
  await axios.post('http://localhost:8080/users', {
    name: name.value,
    email: email.value
  })

  name.value = ''
  email.value = ''
  loadUsers()
}

const deleteUser = async (id) => {
  await axios.delete(`http://localhost:8080/users/${id}`)
  loadUsers()
}

onMounted(loadUsers)
</script>

<template>

  <div class="flex min-h-screen bg-gray-100">

    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex-1 p-10">

      <h1 class="text-3xl font-bold mb-6">
        User Management
      </h1>

      <!-- Form -->
      <div class="flex gap-3 mb-6">

        <input
            v-model="name"
            placeholder="Name"
            class="border p-2 rounded w-1/3"
        />

        <input
            v-model="email"
            placeholder="Email"
            class="border p-2 rounded w-1/3"
        />

        <button
            @click="createUser"
            class="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Add User
        </button>

      </div>

      <!-- Table -->
      <div class="bg-white rounded shadow">

        <table class="w-full">

          <thead class="bg-gray-200">
          <tr>
            <th class="p-3 text-left">ID</th>
            <th class="p-3 text-left">Name</th>
            <th class="p-3 text-left">Email</th>
            <th class="p-3 text-left">Action</th>
          </tr>
          </thead>

          <tbody>

          <tr
              v-for="user in users"
              :key="user.id"
              class="border-t hover:bg-gray-50"
          >

            <td class="p-3">{{user.id}}</td>
            <td class="p-3">{{user.name}}</td>
            <td class="p-3">{{user.email}}</td>

            <td class="p-3">

              <button
                  @click="deleteUser(user.id)"
                  class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>

            </td>

          </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>

</template>