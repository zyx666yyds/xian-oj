<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/zyx.png" class="logo" />
          <div>xianOJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">OJ by zyx</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout {
  text-align: center;
}

#userLayout .header {
  margin-top: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#userLayout .content {
  margin-bottom: 16px;
  padding: 30px;
  text-align: center;
}

#userLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.logo {
  width: 65px;
}
</style>
<script></script>
