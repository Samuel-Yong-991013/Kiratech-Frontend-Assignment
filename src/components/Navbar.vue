<script setup>
import logo from '@/assets/img/Logo.png'

</script>

<template>
    <nav class="z-10 bg-white text-white p-4 shadow-lg w-full fixed top-0 left-0">
        <div class="max-w-7xl mx-auto flex justify-between items-center px-4">
        <!-- Logo -->
        <RouterLink class="flex items-center space-x-3 hover:opacity-75 !important" to="/">
            <img :src="logo" alt="Logo" class="h-10 w-100">
        </RouterLink>

        <!-- Navigation Links -->
        <ul class="flex space-x-6">
            <li><a href="#" class="text-black hover:underline">Home</a></li>
            <li><a href="#" class="text-black hover:underline">Settings</a></li>
            <li><a href="#" class="text-black hover:underline">Log Out</a></li>
        </ul>
        </div>
    </nav>
</template>