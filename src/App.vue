<template>
  <div id="app">
    <a
            onclick="ym(55703485, 'reachGoal', 'logoCyberiumClick'); return true;"
            href="https://vk.com/cyberiumacademy">
      <img src="./assets/cyberiumLogo.jpg" alt="cyberium" height="90" width="160">
    </a>
    <a
            onclick="ym(55703485, 'reachGoal', 'logoSenatorClick'); return true;"
            href="https://vk.com/senatorsport">
      <img src="./assets/senatorLogo.jpg" alt="senator" height="90" width="100">
    </a>
    <div id="nav">
      <router-link onclick="ym(55703485, 'hit', 'csgo', {referer: 'index.html?page=main'});" to="/">CS:GO</router-link> |
      <router-link onclick="ym(55703485, 'hit', 'dota', {referer: 'index.html?page=main'});" to="/dota">Dota 2</router-link> |
      <router-link onclick="ym(55703485, 'hit', 'streamers', {referer: 'index.html?page=main'});" to="/streamers">Streamers</router-link> |
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
