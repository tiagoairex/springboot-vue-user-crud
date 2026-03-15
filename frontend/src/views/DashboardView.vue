<template>

  <AdminLayout>

    <h2 class="text-2xl font-bold mb-6">
      Dashboard
    </h2>

    <div class="grid grid-cols-3 gap-6">
      <StatCard
          title="Total Users"
          :value="totalUsers"
      />

      <StatCard
          title="Active Users"
          :value="totalUsers"
      />

      <StatCard
          title="System Status"
          value="Online"
      />

    </div>

  </AdminLayout>

</template>

<script setup>

import { ref, onMounted } from "vue"
import axios from "axios"
import AdminLayout from "../layouts/AdminLayout.vue"
import StatCard from "../components/StatCard.vue"


const totalUsers = ref(0)

const loadStats = async () => {
  const response = await axios.get("http://localhost:8080/users")
  totalUsers.value = response.data.length
}

onMounted(() => {
  loadStats()
})

</script>