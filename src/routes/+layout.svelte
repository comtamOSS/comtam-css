<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
  import '$lib/comtam-css-icons/main.scss';
  import '$lib/comtam-css-fonts/main.scss';
  import '$lib/comtam-css/main.scss';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
