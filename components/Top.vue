<template>
    <div class="header flex mt-5">
        <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25898.661536462005!2d139.76266225!3d35.76720319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1653120815919!5m2!1sja!2sjp"
          width="550" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          class="rounded-md"
        ></iframe>
      </div>
      <div class="desc p-5 px-6">
        <div class="title text-3xl mb-5 flex">
          <img src="/image/home.png" class="rounded-md outline outline-1 w-1/6">
          <span class="flex items-center ml-5">住まいを探す</span>
        </div>
        <div class="pb-10">
          <div class="text-lg">1.エリアを選択</div>
          <div class="flex space-x-2 mt-2">
            <button type="button" class="cursor-pointer border border-indigo-700 py-3 px-4 text-lg rounded">
              静　岡
            </button>
            <button type="button" class="cursor-pointer border border-indigo-700 py-3 px-4 text-lg rounded">
              愛　知
            </button>
            <button type="button" class="cursor-pointer border border-indigo-700 py-3 px-4 text-lg rounded">
              岐　阜
            </button>
            <button type="button" class="cursor-pointer border border-indigo-700 py-3 px-4 text-lg rounded">
              三　重
            </button>
          </div>
        </div>
        <div class="text-lg">2.マップから家を選択</div>
        <button @click="getLocation">
          緯度：{{ latitude }}
          経度：{{ longitude }}
        </button>
      </div>
    </div>
</template>