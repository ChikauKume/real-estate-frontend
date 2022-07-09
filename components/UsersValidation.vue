<template>
    <div class="errors my-4 text-red-700">
        <div v-if="errors.name">{{ errors.name[0] }}</div>
        <div v-if="errors.email">{{ errors.email[0] }}</div>
        <div v-if="errors.password">{{ errors.password[0] }}</div>
        <div v-if="errors.user_status_id">{{ errors.user_status_id[0] }}</div>
        <div v-if="errors.error">{{ errors.error }}</div>
    </div>
</template>