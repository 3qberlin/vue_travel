<template>
  <div class="position-relative d-flex">
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <div class="row my-auto pb-7">
        <div class="col-12 d-flex flex-column justify-content-center">
          <div class="my-auto text-center">
            <h2>訂購成功</h2>
            <p>詳細訂單資料已寄送至您輸入的Email</p>
            <RouterLink to="/home" class="btn btn-dark mt-4 px-5"
              >回到首頁</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-100 position-absolute"
      style="
        z-index: -1;
        min-height: 100vh;
        background-image: url(src/assets/images/success.jpg);
        opacity: 50%;
        background-position: center center;
        background-repeat: no-repeat;
      "
    ></div>
  </div>
</template>

<script>
export default {};
</script>
