<template>
    <section class="container">
        <!-- ancora-->
        <a id="ancora-doacao"></a>
        <!--Doação-->
        <div class="title">
            <h2 id="container-title-valor">DOE AGORA</h2>
        </div>
        <div class="container-doacao">
            <div class="doacao">
                <a id="card-valor"><img src="../assets/Doacao_15.png" alt="Doacao_15"></a>
            </div>
            <div class="doacao">
                <a id="card-valor"><img src="../assets/Doacao_30.png" alt="Doacao_15"></a>
            </div>
            <div class="doacao">
                <a id="card-valor"><img src="../assets/Doacao_50.png" alt="Doacao_15"></a>
            </div>
            <div class="doacao">
                <a id="card-valor"><img src="../assets/outrovalores.png" alt="Doacao_15"></a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Doacao'
}

</script>

<style>
.title {
    margin-bottom: 25px;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 250px;
}

.container-doacao {
    display: flex;
    justify-content: center;
    gap: 40px;
    text-align: center;
}

#container-title-valor {
    text-align: center;
    font-size: 40px;
    color: #5B1072;
    margin-top: 40px;
    font-family: 'Rajdhani', sans-serif;
    background: -webkit-linear-gradient(90deg, rgb(184, 38, 229), rgb(65, 210, 215));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 768px) {
    .title {
        margin-bottom: 20px;
    }

    #container-title-valor{
        font-size: 35px;
    }

    .container {
        height: 100%;
        gap: 10px;
    }

    .container-doacao {
        flex-direction: column;
    }

}
</style>