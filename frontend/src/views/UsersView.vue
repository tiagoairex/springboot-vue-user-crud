<script setup>

import { ref, onMounted } from "vue"
import AdminLayout from "../layouts/AdminLayout.vue"
import UserTable from "../components/UserTable.vue";
import UserService from "../services/userService.js";
import UserForm from "../components/UserForm.vue";

const users = ref([])
const selectedUser = ref(null)

const saveUser = async (user) => {

  if(user.id){

    await UserService.updateUser(user.id, user)

  }else{

    await UserService.createUser(user)

  }

  await loadUsers()

}

const loadUsers = async () => {
  const response = await UserService.getUsers()
  users.value = response.data
}

const deleteUser = async (id) => {
  await UserService.deleteUser(id)
  await loadUsers()
}

const editUser = (user) => {
  selectedUser.value = user
}

onMounted(() => {
  loadUsers()
})

</script>

<template>

  <AdminLayout>

    <h2 class="text-2xl font-bold mb-6">
      User Management
    </h2>

    <UserForm
        :user="selectedUser"
        @save-user="saveUser"
    />

    <UserTable
        :users="users"
        @delete-user="deleteUser"
        @edit-user="editUser"
    />

  </AdminLayout>

</template>

