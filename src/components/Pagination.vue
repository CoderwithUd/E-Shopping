<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" @click.prevent="changePage(currentPage - 1)">Previous</a>
      </li>
      <li class="page-item" v-if="startPage > 1">
        <a class="page-link" @click.prevent="changePage(1)">1</a>
      </li>
      <li class="page-item" v-if="startPage > 2">
        <span class="page-link">...</span>
      </li>
      <li 
        class="page-item" 
        v-for="page in pagesToShow" 
        :key="page" 
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" v-if="endPage < totalPages - 1">
        <span class="page-link">...</span>
      </li>
      <li class="page-item" v-if="endPage < totalPages">
        <a class="page-link" @click.prevent="changePage(totalPages)">{{ totalPages }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" @click.prevent="changePage(currentPage + 1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      return Math.max(this.currentPage - 2, 1);
    },
    endPage() {
      return Math.min(this.currentPage + 2, this.totalPages);
    },
    pagesToShow() {
      const pages = [];
      for (let i = this.startPage; i <= this.endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit('page-changed', page);
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}
.page-link {
  color: #ffcc80;
  cursor: pointer;
}
.page-item.active .page-link {
  background-color: #ff9800;
  border-color: #ff9800;
}
.page-item.disabled .page-link {
  color: #666666;
}
@media (max-width: 768px) {
  .page-link {
    padding: 0.5rem;
  }
}
</style>
