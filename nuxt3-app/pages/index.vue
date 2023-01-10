<script setup lang="ts"></script>

<template>
  <div class="flex flex-col wrapper mt-4 px-1 overflow-y-hidden">
    <div class="flex flex-row justify-around overflow-y-hidden h-[20%]">
      <div
        class="absolute top-0 right-0 hidden select-none lg:block blur-lg overflow-hidden h-[100%]"
      >
        <img
          src="@/assets/images/hero-gradient.svg"
          width="1296"
          height="300"
          class="bg-cover"
        />
      </div>
      <div class="flex flex-col justify-around">
        <h1
          class="relative max-w-2xl text-5xl font-semibold text-center sm:text-left md:text-6xl lg:text-7xl u-text-gray-900 mt-[20%]"
        >
          Nuxt3的个人demo
        </h1>
        <p
          class="text-xl text-center text-gray-500 sm:w-3/5 sm:text-left dark:text-gray-100 leading-8"
        >
          目前是自己简单的练习Nuxt3的demo后续考虑作为个人作品展示网站
        </p>
      </div>
      <canvas width="475" height="475" />
    </div>
    <section class="text-center z-10 flex flex-col gap-10 pt-20">
      <h2
        class="heading font-bold h-14 bg-gradient-to-r from-green-500 to-blue-500 inline-block bg-clip-text text-transparent text-4xl tracking-[2px]"
      >
        我是一行h2元素
      </h2>
      <div class="flex flex-row justify-between gap-4">
        <div class="flex flex-col w-[55%] text-left indent-1">
          <div>
            <h3 class="font-bold text-2xl">我是一行h3元素</h3>
            <p class="text-xl">
              Lorem ipsum dolor sit amet. Est commodi rerum aut deserunt
              architecto non assumenda voluptas eos voluptatem dicta. A maiores
              praesentium et doloribus corporis et doloremque quos hic
              exercitationem laborum. Aut consectetur deserunt ut enim placeat
              ut nulla veniam?
            </p>
          </div>
          <div>
            <h3 class="font-bold text-2xl">我是一行h3元素</h3>
            <p class="text-xl">
              Ad nesciunt illum est veniam placeat et soluta galisum est
              accusantium adipisci. Non ipsam ullam non fuga rerum ut suscipit
              iure vel sunt doloremque et magnam ipsum et consequatur unde. Et
              sapiente neque et labore sunt eos tempora quasi et tenetur quia
              est eaque voluptatem sit soluta quae. Et dicta provident qui
              impedit perferendis non illo rerum quo esse numquam id nihil
              internos.
            </p>
          </div>
          <NuxtLink to="/" class="mt-3"
            ><span class="btn-text"> Learn More&rarr;</span></NuxtLink
          >
        </div>
        <div class="flex-1">
          <div class="relative section-imgContainer">
            <img
              src="@/assets/images/code.jpg"
              alt="一张code的图片"
              class="section-image left-0 top-[-30px]"
            />
            <img
              src="@/assets/images/james-wheeler-HJhGcU_IbsQ-unsplash.jpg"
              alt="一张钓鱼的图片"
              class="shadow-2xl w-[55%] h-[280px] rounded-xl absolute right-0 top-0 section-image"
            />
            <img
              src="@/assets/images/Html.jpg"
              alt="一张html的图片"
              class="shadow-2xl w-[55%] h-[280px] rounded-xl absolute left-[20%] top-20 section-image"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="text-center z-10 flex flex-col gap-10 mt-10">
      <h2
        class="heading font-bold h-14 bg-gradient-to-r from-green-500 to-blue-500 inline-block bg-clip-text text-transparent text-4xl tracking-[2px]"
      >
        我是一行h2元素
      </h2>
      <div class="flex flex-row gap-10">
        <div class="card basis-1/3 flex">
          <div class="card font relative">
            <div class="card-pic bg-card-pic-music bg-indigo-500"></div>
            <span
              class="absolute right-5 top-[10rem] text-white ox-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-3 font-bold text-2xl w-[50%]"
            >
              THE HTML<br />
              ELEMENT
            </span>
            <ul class="w-[100%] flex flex-col justify-around align-middle">
              <li class="text-xl py-2 p-2">
                <span class="border-b-2 inline-block border-indigo-300">
                  Fast and Furious</span
                >
              </li>
              <li class="text-xl py-2">
                <span class="border-b-2 inline-block border-sky-500">
                  Fast and Furious</span
                >
              </li>
              <li class="text-xl py-2">
                <span class="border-b-2 inline-block border-blue-500">
                  Fast and Furious</span
                >
              </li>
              <li class="text-xl py-2">
                <span class="inline-block"> Fast and Furious</span>
              </li>
              <li class="text-xl py-2">
                <span class="inline-block"> Fast and Furious</span>
              </li>
            </ul>
          </div>
          <div class="card back bg-gradient-to-br from-sky-500 to-indigo-500">
            <span>heading</span>
            <p>介绍</p>
            <button class="back-button">Nuxt</button>
          </div>
        </div>
        <div class="card basis-1/3 flex">
          <div class="card font relative">
            <div class="card-pic bg-card-pic-music bg-pink-500"></div>
            <span
              class="absolute right-5 top-[10rem] text-white box-decoration-screen bg-gradient-to-br from-purple-500 to-pink-500 px-3 font-bold text-2xl w-[50%]"
            >
              THE HTML<br />
              ELEMENT
            </span>
            <ul class="w-[100%] flex flex-col justify-around align-middle">
              <li class="text-xl py-2 p-2">
                <span class="border-b-2 inline-block border-indigo-300">
                  Fast and Furious</span
                >
              </li>
              <li class="text-xl py-2">
                <span class="border-b-2 inline-block border-sky-500">
                  Fast and Furious</span
                >
              </li>
              <li class="text-xl py-2">
                <span class="border-b-2 inline-block border-blue-500">
                  Fast and Furious</span
                >
              </li>
              <li class="text-xl py-2">
                <span class="inline-block"> Fast and Furious</span>
              </li>
              <li class="text-xl py-2">
                <span class="inline-block"> Fast and Furious</span>
              </li>
            </ul>
          </div>
          <div
            class="card back bg-gradient-to-br from-violet-500 to-fuchsia-500"
          >
            <span>heading</span>
            <p>介绍</p>
            <button class="back-button">Nuxt</button>
          </div>
        </div>

        <div class="card basis-1/3 flex">
          <div class="card font relative">
            <div class="card-pic bg-card-pic-music bg-sky-500"></div>
            <span
              class="absolute right-5 top-[10rem] text-white ox-decoration-slice bg-gradient-to-br from-purple-500 to-pink-500 px-3 font-bold text-2xl w-[50%]"
            >
              THE HTML<br />
              ELEMENT
            </span>
            <ul class="w-[100%] flex flex-col justify-around align-middle">
              <li class="text-xl py-2 p-2">
                <span class="border-b-2 inline-block border-indigo-300">
                  Fast and Furious</span
                >
              </li>
              <li class="text-xl py-2">
                <span class="border-b-2 inline-block border-sky-500">
                  Fast and Furious</span
                >
              </li>
              <li class="text-xl py-2">
                <span class="border-b-2 inline-block border-blue-500">
                  Fast and Furious</span
                >
              </li>
              <li class="text-xl py-2">
                <span class="inline-block"> Fast and Furious</span>
              </li>
              <li class="text-xl py-2">
                <span class="inline-block"> Fast and Furious</span>
              </li>
            </ul>
          </div>
          <div class="card back bg-gradient-to-r from-purple-500 to-pink-500">
            <span>heading</span>
            <p>介绍</p>
            <button class="back-button">Nuxt</button>
          </div>
        </div>
      </div>
    </section>
    <!-- video视频区域 -->
    <section class="section-myIntroduction">
      <div>
        <video
          autoplay
          loop
          muted
          class="absolute w-[100%] h=[100%] top-0 left-0 opacity-60 z-0"
        >
          <source src="@/assets/video/bg.mp4" />
        </video>
      </div>

      <div class="section-myIntroduction section-imgContainer--card">
        <figure class="section-myIntroduction section-myIntroduction--figure">
          <img
            src="@/assets/images/my2.jpg"
            alt=""
            srcset=""
            class="bg-cover w-[100%] h-[100%] sepia hover:sepia-0 ease-in duration-100"
          />

          <figcaption
            class="hover:text-red-300 ease-in duration-75 text-white bg-gradient-to-br from-purple-500 to-pink-500 font-bold w-full"
          >
            coder
          </figcaption>
        </figure>
        <div class="flex flex-col box-border">
          <h3 class="heading">我是一行h2元素</h3>
          <article>
            Qui velit reprehenderit qui quod repudiandae sed neque ipsa. Est
            neque numquam sed sequi facilis qui galisum dolor qui dolores illo
            sed repellendus temporibus aut amet dicta. Qui velit reprehenderit
            <NuxtLink to="/" class="mt-20"
              ><span class="btn-text"> Learn More&rarr;</span></NuxtLink
            >
          </article>
        </div>
      </div>
    </section>
    <!-- 轮播图 -->
    <section class="section-swiper">
      <div class="flex flex-row overflow-hidden gap-4 animation justify-around">
        <div class="section-swiper--pic">
          <a>
            <img
              src="@/assets/images/lbt.jpg"
              class="section-swiper--pic_img"
              loading="lazy"
            />
          </a>
          <h2>tiktok</h2>
        </div>

        <div class="section-swiper--pic">
          <a>
            <img
              src="@/assets/images/lbt2.jpg"
              class="section-swiper--pic_img"
              loading="lazy"
            />
          </a>
          <h2>tiktok</h2>
        </div>
        <div class="section-swiper--pic">
          <a>
            <img
              src="@/assets/images/lbt3.jpg"
              width="420"
              height="315"
              class="section-swiper--pic_img"
              loading="lazy"
            />
          </a>
          <h2>tiktok</h2>
        </div>
        <div class="section-swiper--pic">
          <a class="" href="#">
            <img
              src="@/assets/images/lbt4.jpg"
              width="420"
              height="315"
              class="section-swiper--pic_img"
              loading="lazy"
            />
          </a>
          <h2>tiktok</h2>
        </div>
      </div>
      <div
        class="absolute top-0 left-0 h-full w-[20px] sm:w-[50px] md:w-[100px] lg:w-[200px] bg-gradient-to-r from-white dark:from-black via-white/50 dark:via-black/60 to-transparent z-[1]"
      ></div>
      <div
        class="absolute top-0 right-0 h-full w-[20px] sm:w-[50px] md:w-[100px] lg:w-[200px] bg-gradient-to-l from-white dark:from-black via-white/50 dark:via-black/60 to-transparent z-[1]"
      ></div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.heading {
  cursor: pointer;
  transition: all 0.2s;
  @apply font-bold h-14 bg-gradient-to-r from-green-500 to-blue-500 inline-block bg-clip-text text-transparent text-4xl tracking-[2px];
}
.heading:hover {
  transform: skewX(-15deg) skewY(-1deg) scale(1.1);
}

.btn-text {
  @apply text-green-500 border-b-2 border-green-300 p-3 text-sm ease-in duration-200;
  &:hover {
    @apply bg-green-500 text-white shadow-xl translate-y-px;
  }
}
.section-imgContainer {
  .section-image {
    @apply shadow-2xl w-[55%] h-[280px] rounded-xl absolute z-10 outline-offset-8 ease-in duration-100;
    &:hover {
      @apply scale-105 	shadow-2xl z-20 outline outline-8 outline-green-500;
    }
  }
  &.section-image:not(:hover) {
    @apply scale-90;
  }
}

.card {
  @apply h-[35rem] ease-in duration-150 text-white text-xl relative shadow-md rounded-md overflow-hidden;

  &.font {
    @apply bg-white absolute top-0 left-0 w-[100%] text-black ease-in duration-300;
    backface-visibility: hidden;
    .card-pic {
      height: 18rem;
      background-size: cover;
      background-repeat: no-repeat;
      background-blend-mode: screen;
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    }
    .card-heading {
      @apply text-xl;
    }
  }
  &.back {
    @apply absolute top-0 left-0  w-[100%] ease-linear duration-300 flex flex-col justify-center align-middle gap-10 px-10;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
    .back-button {
      @apply bg-white py-2 text-black rounded-3xl ease-linear duration-100;
      &:hover {
        @apply translate-y-[-1px];
      }
    }
  }
  &:hover .font {
    transform: rotateY(180deg);
  }
  &:hover .back {
    transform: rotateY(0deg);
  }
}
.section-myIntroduction {
  @apply text-center z-10 flex flex-col gap-10 pt-10 justify-between align-middle relative mt-20 h-[45rem] overflow-hidden;
  .section-imgContainer--card {
    @apply flex flex-row justify-center  shadow-xl w-[80%] h-[40%] text-center p-5 ml-10  bg-transparent absolute;
    background-color: rgba(1, 1, 1, 0.1);
    transform: skewX(-6deg);
    .section-myIntroduction--figure {
      @apply h-[70%] text-center flex  flex-col justify-center  cursor-pointer;
      transform: skewX(6deg);
    }
  }
}
section {
  width: 100%;
  height: 100%;
}
.animation {
  animation: scroll-fffda5c5 120s linear infinite;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: scroll-fffda5c5;
}
@keyframes scroll-fffda5c5 {
  0% {
    transform: translateX(-25%);
  }
  20% {
    transform: translateX(-50%);
  }
  40% {
    transform: translateX(0%);
  }
  65% {
    transform: translateX(50%);
  }
  80% {
    transform: translate(25%);
  }
  100% {
    transform: translate(0%);
  }
}
// @keyframes scroll-fffda5c5 {
//   0% {
//     transform: translateX(100);
//   }
//   25% {
//     transform: translateX(75%);
//   }
//   50% {
//     transform: translateX(50%);
//   }
//   75% {
//     transform: translateX(25%);
//   }
//   100% {
//     transform: translate(0%);
//   }
// }
.section-swiper {
  display: flex;
  @apply relative mt-20 overflow-hidden text-center w-full;
  .section-swiper--pic {
    // width: 33.3%;
    // height: 315px;
    @apply flex flex-col gap-3 basis-1/3;
    .section-swiper--pic_img {
      @apply object-cover w-full h-[30vh] px-4 sm:px-0 rounded-lg;
    }
  }
}
</style>
