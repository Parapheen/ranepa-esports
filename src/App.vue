<template>
  <div id="app">
      <img src="./assets/cyberiumLogo.jpg" alt="cyberium" height="90" width="160">
      <img src="./assets/senatorLogo.jpg" alt="senator" height="90" width="100">
    <div id="nav">
      <router-link onclick="ym(55703485, 'hit', 'csgo', {referer: 'index.html?page=main'});" to="/">CS:GO</router-link> |
      <router-link onclick="ym(55703485, 'hit', 'dota', {referer: 'index.html?page=main'});">Dota 2</router-link> |
      <router-link onclick="ym(55703485, 'hit', 'streamers', {referer: 'index.html?page=main'});">Streamers</router-link> |
      <router-link onclick="ym(55703485, 'hit', 'organizers', {referer: 'index.html?page=main'});" to="/organizers">Organizers</router-link>
    </div>
    <router-view/>
    <a href="https://vk.com/ranepacl">Анонсы и дальнейшие новости</a>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #8c0000;
}
</style>
