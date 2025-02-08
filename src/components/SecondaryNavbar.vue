<script setup>
    import avatar from "@/assets/img/Avatar.png";
</script>

<template>
  <!-- User Profile (Blue Navbar) -->
  <div class="z-10 bg-[#2596be] text-white text-sm p-3 w-full fixed top-16 left-0 flex flex-col space-y-2 min-h-[200px]">
    <!-- Avatar -->
    <img :src="avatar" alt="Logo" class="absolute left-5 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]">
    
    <!-- Buttons -->
    <div class="w-full flex flex-wrap justify-start items-center gap-4 max-w-7xl mx-auto pl-20">
      <button class="bg-white hover:text-white hover:bg-[#2596be] border-2 border-white text-black font-bold py-2 px-4 rounded-full">
        <span class="pi pi-send"></span> Send Message
      </button>
      <button class="bg-white hover:text-white hover:bg-[#2596be] border-2 border-white text-black font-bold py-2 px-4 rounded-full">
        <span class="pi pi-user-plus"></span> Add Friend
      </button>
    </div>

    <!-- User Info -->
    <div class="text-2xl sm:text-3xl md:text-4xl font-semibold w-full flex justify-start items-center max-w-7xl mx-auto pl-20">
      John Doe
    </div>
    <div class="w-full flex justify-start items-center max-w-7xl mx-auto pl-20">
      Last online: 2 days ago
    </div>
  </div>
</template>