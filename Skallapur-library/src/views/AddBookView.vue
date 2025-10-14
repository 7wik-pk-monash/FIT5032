<template>
<h1>Add Book</h1>

<form @submit.prevent="addBook">
  <label for="isbn">ISBN</label>
  <p><input type="text" placeholder="ISBN" id="isbn" v-model="isbn" required/></p>
  <label for="name">Name</label>
  <p><input type="text" placeholder="Name" id="name" v-model="name" required/></p>
  <p><button type="submit">Add Book</button></p>
</form>

<BookList/>

</template>

<script setup>

import { ref } from "vue"
import { collection, addDoc } from "firebase/firestore"
import db from "../firebase/init.js"
import BookList from "@/components/BookList.vue"

const isbn = ref ("")
const name = ref ("")

const addBook = async () => {

  try {
    const isbnNumber = Number(isbn.value);
    if (isNaN(isbnNumber)) {
      alert("Please enter a valid number for ISBN.");
      return;
    }

    const docRef = await addDoc(collection(db, "books"), {
    isbn: isbnNumber,
    name: name.value
  });
  console.log("Document written with ID: ", docRef.id);
  isbn.value = ""
  name.value = ""
  }
  catch (e) {
    console.error("Error adding document: ", e);
  }

}

</script>
