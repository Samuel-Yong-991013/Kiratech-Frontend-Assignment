<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const users = ref([]); // Store user data
const searchQuery = ref(""); // Search input
const refresh =ref(false); //Refresh button state
const selectedUser = ref();//Store data of selected user
const router = useRouter();

const isPopupOpen = ref(false);

const openPopup = (userData) => {
  selectedUser.value = userData;
  console.log(selectedUser.value);
  isPopupOpen.value = true;
};

const closePopup = (event) => {
  if (event.target.id === "popup-overlay") {
    isPopupOpen.value = false;
  }
};


// Fetch Data from API
const fetchData = async () => {
  try {
    refresh.value = true;
    const response = await fetch("https://randomuser.me/api/?page=1&results=20");
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    users.value = data.results; // Extract user data
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    refresh.value = false;
  }
};

// Computed Property for Search Filtering
const filteredUsers = computed(() => {
  return users.value.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
  );
});

// Fetch data on component mount
onMounted(fetchData);
</script>

<template>
  <!-- Heading -->
  <div class="p-6 w-full pt-[300px]">
    <!-- This div is to prevent the heading from scrolling along with the table -->
    <div class="fixed top-[250px] left-0 w-screen bg-[#181818] shadow-md z-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex gap-x-5 items-center py-1">
          <h1 class="text-2xl text-white font-bold">Users List</h1>

          <!-- Refresh button -->
          <button 
          @click="fetchData" 
          class="bg-white hover:bg-[#181818] hover:text-white border-2 border-white text-black font-bold py-2 px-4 rounded-full"
          :disabled="loading"
          >
            {{ loading ? "Refreshing..." : "Refresh table" }}
          </button>
        </div>

        <!-- Search bar -->
        <input v-model="searchQuery" type="text" placeholder="Search by name..." 
          class="text-black border p-2 w-full mb-4 rounded shadow-sm"
        />
      </div>
    </div>
    
    <!-- Table -->
    <div class="w-screen max-w-7xl pt-[50px]"> 
      <table class="w-full">
        <thead class="bg-gray-200">
          <tr>
            <th class="text-black font-semibold border px-6 py-3 text-left w-[1%]">Picture</th>
            <th class="text-black font-semibold border px-6 py-3 text-left w-[18%]">Name</th>
            <th class="text-black font-semibold border px-6 py-3 text-left w-[18%]">Email</th>
            <th class="text-black font-semibold border px-6 py-3 text-left w-[5%]">Age</th>
            <th class="text-black font-semibold border px-6 py-3 text-left">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.login.uuid" class="hover:bg-gray-100 hover:text-black" @click="openPopup(user)">
            <td class="border px-4 py-2">
              <img :src="user.picture.thumbnail" alt="User Image" class="w-12 h-12 rounded-full">
            </td>
            <td class="border px-4 py-2">{{ user.name.first }} {{ user.name.last }}</td>
            <td class="border px-4 py-2">{{ user.email }}</td>
            <td class="border px-4 py-2">{{ user.dob.age }}</td>
            <td class="border px-4 py-2">{{ user.location.state }}, {{ user.location.country }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>


  <!-- Popup div for user details -->
  <div v-if="isPopupOpen" id="popup-overlay" @click="closePopup"
        class="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-6 rounded-lg shadow-lg w-[600px] text-center">
      <h2 class="text-lg font-bold text-black">User Details</h2>

      <!-- Display user details -->
      <div class="mt-4 grid grid-cols-2 gap-y-3">
        <p class="font-semibold text-black text-left">Name:</p>
        <p class="text-black text-left">{{ selectedUser.name.first }} {{ selectedUser.name.last }}</p>

        <p class="font-semibold text-black text-left">Gender:</p>
        <p class="text-black text-left">{{ selectedUser.gender }}</p>

        <p class="font-semibold text-black text-left">Phone:</p>
        <p class="text-black text-left">{{ selectedUser.phone }}</p>

        <p class="font-semibold text-black text-left">Email:</p>
        <p class="text-black text-left">{{ selectedUser.email }}</p>

        <p class="font-semibold text-black text-left">Age:</p>
        <p class="text-black text-left">{{ selectedUser.dob.age }}</p>

        <p class="font-semibold text-black text-left">Location:</p>
        <p class="text-black text-left">{{ selectedUser.location.state }}, {{ selectedUser.location.country }}</p>

        <p class="font-semibold text-black text-left">City:</p>
        <p class="text-black text-left"> {{ selectedUser.location.city}} </p>

        <p class="font-semibold text-black text-left">State:</p>
        <p class="text-black text-left"> {{ selectedUser.location.state}} </p>

        <p class="font-semibold text-black text-left">Country:</p>
        <p class="text-black text-left">{{ selectedUser.location.country }}</p>
        
    </div>

      <!-- Button to close popup -->
      <button @click="isPopupOpen = false" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Close
      </button>
    </div>
  </div>
</template>
