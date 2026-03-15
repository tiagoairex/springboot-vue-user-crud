<template>

  <div class="bg-white shadow rounded-lg p-6 mb-6">

    <h3 class="text-lg font-bold mb-4">
      {{ form.id ? "Edit User" : "Create User" }}
    </h3>

    <form @submit.prevent="submitForm">

      <div class="mb-3">
        <label class="block text-sm mb-1">Name</label>
        <input
            v-model="form.name"
            type="text"
            class="border p-2 w-full rounded"
        />
      </div>

      <div class="mb-3">
        <label class="block text-sm mb-1">Email</label>
        <input
            v-model="form.email"
            type="email"
            class="border p-2 w-full rounded"
        />
      </div>

      <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {{ form.id ? "Update" : "Create" }}
      </button>

    </form>

  </div>

</template>

<script setup>

import { reactive, watch } from "vue"

const props = defineProps({
  user: Object
})

const emit = defineEmits(["save-user"])

const form = reactive({
  id: null,
  name: "",
  email: ""
})

watch(() => props.user, (newUser) => {

  if(newUser){

    form.id = newUser.id
    form.name = newUser.name
    form.email = newUser.email

  }

})

const submitForm = () => {

  emit("save-user", {...form})

  form.id = null
  form.name = ""
  form.email = ""

}

</script>