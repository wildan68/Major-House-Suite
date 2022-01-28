<template>
  <div class="partnership" id="partnership">
    <Title label="Partnership" />
    <div class="partnership-container">
        <div class="partnership-item">
            <img src="@/assets/img/svg/stairbank.svg"/>
        </div>
        <div class="partnership-item">
            <img src="@/assets/img/svg/crypost.svg"/>
        </div>
        <div class="partnership-item">
            <img src="@/assets/img/svg/wonderfull.svg"/>
        </div>
        <div class="partnership-item">
            <img src="@/assets/img/svg/deltapark.svg"/>
        </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title";
export default {
  name: "partnership",
  components: {
    Title,
  },
};
</script>

<style scoped>
    .partnership-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em 0 1em 0;
    }
    .partnership-container .partnership-item {
        width: 150px;
        height: 150px;
        overflow: hidden;
        
    }
    .partnership-container .partnership-item img {
        width: 100%;
        height: 100%;
    }
</style>