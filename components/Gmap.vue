<template>
    <div>
        <GmapMap mapMap
          map-type-id="roadmap"
          :center="maplocation"
          :zoom="zoom"
          :style="styleMap"
          :options="mapOptions"/>
    </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      maplocation: { lng: 0, lat: 0 },
      zoom: 4,
      styleMap: {
        width: '100%',
        height: '400px',
      },
      mapOptions: {
        streetViewControl: false,
        styles: [],
      },
    }
  },
}
</script>