<template>
  <div>
    <h2>Book List (ISBN > 1000)</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }}  - ISBN: {{ book.isbn }}
      </li>
    </ul>
  </div>
</template>

<script setup>

import db from "../firebase/init.js"
import { collection, getDocs, where, query } from "firebase/firestore"
import { ref, onMounted } from "vue"

const books = ref ([]);

const fetchBooks = async () => {

  try {
    const q = query(collection(db, 'books'), where('isbn', '>', 1000));
    const querySs = await getDocs(q);

    querySs.forEach((doc) => {
      console.log(doc.data());
      books.value.push({id: doc.id, ...doc.data()});
    });
  }
  catch (error) {
    console.error('Failed to query db with the following error: ', error)
  }
};

onMounted(() => {
  fetchBooks();
})

</script>
