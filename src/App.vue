<template>
  <div id="app">
    <a onclick="amplitude.getInstance().logEvent('cyberiumLogoClick');" href="https://vk.com/cyberiumacademy">
      <img src="./assets/cyberiumLogo.jpg" alt="cyberium" height="90" width="160">
    </a>
    <a onclick="amplitude.getInstance().logEvent('senatorLogoClick');" href="https://vk.com/senatorsport">
      <img src="./assets/senatorLogo.jpg" alt="senator" height="90" width="100">
    </a>
    <div id="nav">
      <router-link onclick="amplitude.getInstance().logEvent('csgoPageVisit');" to="/">CS:GO</router-link> |
      <router-link onclick="amplitude.getInstance().logEvent('dotaPageVisit');" to="/dota">Dota 2</router-link> |
      <router-link onclick="amplitude.getInstance().logEvent('streamPageVisit');" to="/streamers">Streamers</router-link> |
      <router-link onclick="amplitude.getInstance().logEvent('orgPageVisit');" to="/organizers">Organizers</router-link>
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
