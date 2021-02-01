<script>
	export let logoUrl;
	export let innerWidth = 0;
	export let segment;
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import Navlist from "./Navlist.svelte"
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
	.hamburguer{
		color: #ffffff;
		height: 40px;
		width: 40px;
	}
	.hamburguer:hover {
		opacity: 80%;
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
		  <div class="hamburguer"><FaBars /></div>
		{/if}
		
	  </nav>
	</div>
  </div>
  
  