<template>
  <ElContainer>
    <ElMain>
      <NuxtPage />
    </ElMain>
  </ElContainer>
</template>

<style>
html,
body,
#__nuxt {
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}

#__nuxt {
  display: flex;
  flex: 1;
}

body {
  min-height: 100vh;
  display: flex;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

</style>