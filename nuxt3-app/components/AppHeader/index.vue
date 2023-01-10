<script setup lang="ts">
// type Iprops = {
//   title?: string
// }

// const props = withDefaults(defineProps<Iprops>(), {
//   title: '',
// })
const userData = useFetch('/api/hello').then((res) => {
  console.log(res.data.value)
})
</script>

<template>
  <nav class="headr">
    <div class="flex w-[80%] justify-around">
      <NuxtLink to="/" target="_self">
        <img src="@/assets/images/hb.svg" class="title" />
      </NuxtLink>
      <NuxtLink to="/screenshot" target="_self">
        <span>截图展示</span>
      </NuxtLink>
      <NuxtLink to="/technologystack">
        <span>工具说明</span>
      </NuxtLink>
      <NuxtLink to="https://nuxt.com/" target="_blank">
        <span>Nuxt3文档</span>
      </NuxtLink>
      <NuxtLink to="https://nuxt.com/support/solutions" target="_blank">
        <span>support</span>
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/">
        <span>github地址</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.title {
  width: 32px;
  height: 32px;
}
.headr {
  @apply flex justify-around p-3 backdrop-blur-sm shadow-sm border-b-2 bg-transparent;
}
span:hover {
  color: rgb(192, 185, 174);
  transition: all 0.5s;
  transform: scale(1.2);
}

img:hover {
  animation-duration: 2s;
  animation-name: routeLogo;
}

@keyframes routeLogo {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
