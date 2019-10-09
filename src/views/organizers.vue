<template>
    <div>
        <h1>Мы создали это для Вас!</h1>
        <div class = "cardContainer">
            <div class="card card-5">
                <div>
                    <img class="orgPhoto" src="../assets/Petrovich_photo_entry.jpg" alt="photo">
                    <div>
                        <h2>Женя Петрович</h2>
                        <h3>ИБДА</h3>
                    </div>
                </div>
            </div>
            <div class="card card-5">
                <div>
                    <img class="orgPhoto" src="../assets/Vanya.jpg" alt="photo">
                    <div>
                        <h2>Иван Киреенков</h2>
                        <h3>ИФУР</h3>
                    </div>
                </div>
            </div>
            <div class="card card-5">
                <div>
                    <img class="orgPhoto" src="../assets/Egor.jpg" alt="photo">
                    <div>
                        <h2>Егор Козлов</h2>
                        <h3>ИГСУ</h3>
                    </div>
                </div>
            </div>
            <div class="card card-5 frolov">
                <div>
                    <img class="orgPhoto" src="../assets/Ilya.jpg" alt="photo">
                    <div>
                        <h2>Илья Фролов</h2>
                        <h3>ИПНБ</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "organizers"
    }
</script>

<style scoped>
    .cardContainer {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .card {
        background: #fff;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        height: 300px;
        margin: 1rem;
        position: relative;
        width: 250px;
    }
    .card-5 {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }

    .orgPhoto {
        margin-top: 1.5rem;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .frolov {
    }
</style>
