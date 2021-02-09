<script>
    import { fly } from "svelte/transition";
    export let open = false;
    export let segment = undefined;

    function resetOpen(){
        open = false;
    }
</script>

{#if open}
    <aside class="sidebar" class:open transition:fly={{ x: 250, opacity: 1 }}>
        <img class="mobilelogo" src="logo.svg" alt="logo insonos" />
        <ul class="navlist">
            <li class="top">
                <a class:selected={segment === undefined} href="." on:click={resetOpen}>Inicio</a>
            </li>
            <li>
                <a class:selected={segment === "about"} href="about"
                on:click={resetOpen}>Nuestra Empresa</a
                >
            </li>
            <li>
                <a
                    rel="prefetch"
                    class:selected={segment === "portafolio"}
                    href="portafolio"
                    on:click={resetOpen}>
                    Portafolio
                </a>
            </li>
            <li>
                <a class:selected={segment === "servicios"} href="servicios"
                on:click={resetOpen}>Servicios</a
                >
            </li>
            <li>
                <a class:selected={segment === "productos"} href="productos"
                on:click={resetOpen}>Productos</a
                >
            </li>

            <li>
                <a class:selected={segment === "contacto"} href="contacto"
                on:click={resetOpen}>Contacto</a
                >
            </li>
        </ul>
    </aside>
{/if}

<style>
    .sidebar {
        width: 45%;
        height: 100%;
        box-shadow: 50px 0px 5px 5px rgba(0, 0, 0, 0.2);
    }
    aside {
        display: flex;
        flex-direction: column;
        margin-top: -1rem;
        position: fixed;
        top: 0;
        right: 0;
        padding: 2rem 1rem 0.6rem;
        border-left: 1px solid #aaa;
        background: var(--main_color);
        overflow-y: auto;
        width: 5rem;
    }

    .open {
        right: 0;
    }
    .navlist {
        display:block;
        padding-top: 4rem;
        list-style-type: none;
    }
    a {
        font-size: 1.5rem;
        font-weight: 300;
        text-decoration: none;
        color: #ffffff;
    }
    .mobilelogo {
        padding-top: 2rem;
        width: 150px;
    }
    .selected{
        font-weight: 700;
        text-decoration: underline;
    }
</style>
