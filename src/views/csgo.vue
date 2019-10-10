<template>
  <div class="home">
    <h1>Отбор в сборную по CS:GO</h1>
    <div>
      <p>Победитель представляет РАНХиГС на всех будущих турнирах.</p>
      <p>А подготовка к соревнованиям будет ввестись с тренерами
    из академии <a
                onclick="amplitude.getInstance().logEvent('cyberiumCSGOclick');"
                href="https://vk.com/cyberiumacademy">Cyberium</a></p>
    </div>
    <div class="form">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScQCumM9HRgoqJM8ZMytl_6UXotpLGc1trcqDJQ9ito75tgLQ/viewform?embedded=true" width="640" height="1686" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
    </div>
  </div>
</template>

<script>


export default {
  name: 'csgo',
}
</script>

<style>
  .form {
    display: flex;
    justify-content: center;
    justify-items: center;
  }
</style>
