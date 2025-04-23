<script setup lang="ts">
const { $localePath } = useNuxtApp();

await navigateTo($localePath("/auth/login"));
</script>

<template></template>
