<script>
    import FaWhatsapp from "svelte-icons/fa/FaWhatsapp.svelte";
</script>

<a
    href="https://api.whatsapp.com/send?phone=73204534334&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Insonos%20."
    class="float"
    target="_blank"
    ><div class="my-float">
        <FaWhatsapp />
    </div>
</a>

<style>
    .float {
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 40px;
        background-color: #25d366;
        color: #fff;
        border-radius: 50px;
        box-shadow: 2px 2px 3px rgb(43, 43, 43);
        z-index: 100;
    }
    .float:hover {
        background-color: #21c55d;
        transform: translateY(-3px);
        transition: transform 0.2s ease-in-out;
    }
    .my-float {
        margin: 0 auto;
        padding-top: 0.5rem;
        height: 40px;
        width: 40px;
    }
</style>
