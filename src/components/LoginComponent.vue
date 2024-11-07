<template>
  <div class="login-page">
    <div class="login-container">
      <img class="logo" :src="chiensLogo" alt="Chiens Logo">
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="account">帳號</label>
          <input
              type="text"
              id="account"
              v-model="account"
              placeholder="請輸入帳號"
              required
          />
        </div>
        <div class="form-group">
          <label for="password">密碼</label>
          <input
              type="password"
              id="password"
              v-model="password"
              placeholder="請輸入密碼"
              required
          />
        </div>
        <button type="submit" class="login-button">登入</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import chiensLogo from '@/assets/chiensLogo.jpg';
import router from "@/router";

const account = ref("");
const password = ref("");

const handleLogin = () => {
  if (account.value && password.value) {
    router.push({ name: 'MainQuery' })
  } else {
    alert("請輸入帳號和密碼");
  }
};
</script>

<style scoped>
.logo{
  max-width: 400px; 
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #79a2dc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #79a2dc;
}
</style>
