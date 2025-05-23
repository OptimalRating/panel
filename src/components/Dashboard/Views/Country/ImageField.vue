<template>
  <div class="banner-images">
    <img
      :src="imageUrl + 'images/country/' + row.flag"
      width="50"
      height="30"
    />
  </div>
</template>

<script>
export default {
  props: ["row", "field", "xprops"],
  data() {
    return {
      imageUrl: "https://server.optimalrating.com/cdn/",
    };
  },
};
</script>
