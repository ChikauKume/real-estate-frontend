<template>
    <div class="errors my-4 text-red-700">
        <div v-if="errors.name">{{ errors.name[0] }}</div>
        <div v-if="errors.image">{{ errors.image[0] }}</div>
        <div v-if="errors.zipcode">{{ errors.zipcode[0] }}</div>
        <div v-if="errors.address1">{{ errors.address1[0] }}</div>
        <div v-if="errors.address2">{{ errors.address2[0] }}</div>
        <div v-if="errors.address3">{{ errors.address3[0] }}</div>
        <div v-if="errors.address4">{{ errors.address4[0] }}</div>
        <div v-if="errors.lat">{{ errors.lat[0] }}</div>
        <div v-if="errors.lng">{{ errors.lng[0] }}</div>
        <div v-if="errors.transportation">{{ errors.transportation[0] }}</div>
        <div v-if="errors.area">{{ errors.area[0] }}</div>
        <div v-if="errors.real_estate_type_id">{{ errors.real_estate_type_id[0] }}</div>
        <div v-if="errors.real_estate_layout_id">{{ errors.real_estate_layout_id[0] }}</div>
        <div v-if="errors.age">{{ errors.age[0] }}</div>
        <div v-if="errors.favorite">{{ errors.favorite[0] }}</div>
    </div>
</template>