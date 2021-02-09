<script>
	export let logoUrl;
	export let innerWidth = 0;
	export let segment;
	export let sidebar = false;
	let open = false;

	import Navlist from "./Navlist.svelte";
	import MobileNav from './MobileNav.svelte';
	import Hamburger from './UI/Hamburguer.svelte';
  </script>
  
  <style>
	#logo {
	  height: 60px;
	  padding: 10px 10px 10px 25px;
	}
	.navWrapper {
	  height: 80px;
	  background: var(--main_color);
	}
	.mainNav {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	}
	.navbar{
	  padding-right: 20px;
	}
	#logo{
		width: 150px;
	}
  </style>
  
  <svelte:window bind:innerWidth />
  <div class="navWrapper wrapper">
	<div class="mainNav inner">
	  <div class="logoArea">
		<a href=".">
		  <img id="logo" src={logoUrl} alt="Insonos" />
		</a>
	  </div>
	  <nav class="navbar">
		{#if innerWidth > 1200}
		  <Navlist {segment}/>
		{:else}
		  <Hamburger bind:open={sidebar}/>
		  {/if}
		
	  </nav>
	</div>
  </div>
  
  