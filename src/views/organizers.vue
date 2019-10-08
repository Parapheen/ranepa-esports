<template>
    <div>
        <h1>Мы создали это для Вас!</h1>
        <div class="card card-5">
            <img class="orgPhoto" src="../assets/Petrovich_photo_entry.jpg" alt="photo" height="150" width="150">
        </div>
        <div class="card card-5"></div>
        <div class="card card-5"></div>
    </div>
</template>

<script>
    export default {
        name: "organizers"
    }
</script>

<style scoped>
    .card {
        background: #fff;
        border-radius: 2px;
        display: inline-block;
        height: 300px;
        margin: 1rem;
        position: relative;
        width: 300px;
    }
    .card-5 {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }

    .orgPhoto {
        padding-top: 1.5rem;
    }

</style>
