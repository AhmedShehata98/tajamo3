<template>
  <div class="p-6 min-h-screen bg-gradient-to-br bg-background/20">
    <!-- Header Section -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Attendance</h1>
      <div class="flex gap-4">
        <input
          type="date"
          v-model="selectedDate"
          class="px-4 py-2 bg-card backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        />
        <button
          @click="exportToCSV"
          class="px-4 py-2 bg-card/70 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-card/80 transition-colors shadow-sm border border-gray-200"
        >
          Export CSV
        </button>
      </div>
    </div>

    <!-- Search and Filter Section -->
    <div class="mb-6 flex gap-4">
      <div class="flex-1">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search employee..."
          class="w-full px-4 py-2 bg-card backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        />
      </div>
      <select
        v-model="statusFilter"
        class="px-4 py-2 bg-card backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
      >
        <option value="">All Status</option>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
        <option value="late">Late</option>
        <option value="leave">On Leave</option>
      </select>
    </div>

    <!-- Attendance Table -->
    <div
      class="bg-card/70 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-200"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee Name</TableHead>
            <TableHead>Employee ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Check-in</TableHead>
            <TableHead>Check-out</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="employee in filteredEmployees"
            :key="employee.id"
            class="hover:bg-card/50 transition-colors"
          >
            <TableCell>{{ employee.name }}</TableCell>
            <TableCell>{{ employee.id }}</TableCell>
            <TableCell>
              <span
                :class="{
                  'px-2 py-1 text-xs font-semibold rounded-full backdrop-blur-sm': true,
                  'bg-green-100/70 text-green-800':
                    employee.status === 'present',
                  'bg-red-100/70 text-red-800': employee.status === 'absent',
                  'bg-yellow-100/70 text-yellow-800':
                    employee.status === 'late',
                  'bg-blue-100/70 text-blue-800': employee.status === 'leave',
                }"
              >
                {{ getStatusText(employee.status) }}
              </span>
            </TableCell>
            <TableCell>{{ employee.checkIn || "-" }}</TableCell>
            <TableCell>{{ employee.checkOut || "-" }}</TableCell>
            <TableCell>
              <button
                @click="editRecord(employee)"
                class="text-blue-600 hover:text-blue-900"
              >
                Edit
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <!-- Floating Action Button -->
    <button
      @click="showMarkAttendanceModal = true"
      class="fixed bottom-6 right-6 bg-blue-600/90 backdrop-blur-sm text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors border border-white/20"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

// State
const selectedDate = ref(new Date().toISOString().split("T")[0]);
const searchQuery = ref("");
const statusFilter = ref("");
const showMarkAttendanceModal = ref(false);

// Sample data - replace with actual data from your backend
const employees = ref([
  {
    id: "EMP001",
    name: "John Doe",
    status: "present",
    checkIn: "09:00",
    checkOut: "17:00",
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    status: "late",
    checkIn: "09:45",
    checkOut: "17:00",
  },
  // Add more sample data as needed
]);

// Computed
const filteredEmployees = computed(() => {
  return employees.value.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      employee.id.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus =
      !statusFilter.value || employee.status === statusFilter.value;
    return matchesSearch && matchesStatus;
  });
});

// Methods
const getStatusText = (status) => {
  const statusMap = {
    present: "Present",
    absent: "Absent",
    late: "Late",
    leave: "On Leave",
  };
  return statusMap[status] || status;
};

const editRecord = (employee) => {
  // Implement edit functionality
  console.log("Edit employee:", employee);
};

const exportToCSV = () => {
  // Implement CSV export functionality
  console.log("Exporting to CSV...");
};

useSeoMeta({
  title: "Attendance",
  description: "Attendance",
});
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "default",
  },
  layout: "dashboard",
});
</script>
<style scoped>
/* Add any custom styles here */
</style>
