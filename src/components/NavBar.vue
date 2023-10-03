<template>
    <!--Cabeçalho-->
    <header>
        <!--Ancora-->
        <a id="ancora-inicio"></a>
        <div class="conteudo-nav-desktop">
            <nav class="conteudo-nav">
                <figure class="navbar-brand">
                    <img src='../assets/Logo.png' alt="logo-marca">
                </figure>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#ancora-doacao">Doe Agora</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Quem Apoia</a>
                    </li>
                </ul>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary" type="button">Login</button>
                </div>
            </nav>
        </div>
        <div class="conteudo-nav-mobile">
            <nav class="mobile">
                <nav class="navbar bg-body-tertiary fixed-top">
                    <div class="container-fluid">
                        <figure class="navbar-brand">
                            <img src='../assets/Logo.png' alt="logo-marca">
                        </figure>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-body">
                                <div class="offcanvas-header">
                                    <figure class="navbar-brand">
                                        <img src='../assets/Logo.png' alt="logo-marca">
                                    </figure>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#ancora-doacao">Doe Agora</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Sobre</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Quem Apoia</a>
                                    </li>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button class="btn btn-primary" type="button">Login</button>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
        </div>

    </header>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>

.nav {
    display: flex;
    gap: 30px;
}

.conteudo-nav {
    height: 122px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.navbar-brand img {
    width: 260px;
    height: 80px;
}

.conteudo-nav-desktop {
    display: block;
}

.conteudo-nav-mobile {
    display: none;
}
.mobile{
    height: 122px;
}

@media screen and (max-width: 768px) {
    .conteudo-nav-desktop {
        display: none;
    }

    .conteudo-nav-mobile {
        display: block;
    }
}
</style>