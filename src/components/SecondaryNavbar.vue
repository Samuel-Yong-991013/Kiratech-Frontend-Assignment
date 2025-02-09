<script setup>
    import avatar from "@/assets/img/Avatar.png";
</script>

<template>
  <!-- User Profile (Blue Navbar) -->
<div class="z-10 bg-[#2596be] text-white text-sm p-6 w-full fixed top-16 left-0 flex items-center gap-6 min-h-[200px]">
  <!-- Avatar -->
  <img :src="avatar" alt="Avatar" class="w-[150px] h-[150px]">

  <!-- Content (Buttons & User Info) -->
  <div class="flex flex-col space-y-3">
    <!-- Buttons -->
    <div class="flex flex-wrap items-center gap-4">
      <button class="bg-white hover:text-white hover:bg-[#2596be] border-2 border-white text-black font-bold py-2 px-4 rounded-full">
        <span class="pi pi-send"></span> Send Message
      </button>
      <button class="bg-white hover:text-white hover:bg-[#2596be] border-2 border-white text-black font-bold py-2 px-4 rounded-full">
        <span class="pi pi-user-plus"></span> Add Friend
      </button>
    </div>

    <!-- User Info -->
    <div class="text-2xl sm:text-3xl md:text-4xl font-semibold">
      John Doe
    </div>
    <div>
      Last online: 2 days ago
    </div>
  </div>
</div>

</template>