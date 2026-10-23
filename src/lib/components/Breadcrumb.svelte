<script lang="ts">
  let { arrOfLabel }: { arrOfLabel: string[] } = $props();
  let length = arrOfLabel.length;
</script>

<div class="ct-breadcrumb">
{#each arrOfLabel as label, index}
  <span class="ct-breadcrumb__label">{label}</span>
  {#if index < length - 1 && length > 1}
  <span class="ct-breadcrumb__icon ct-i ct-i-chevron-right"></span>
  {/if}
{/each}
</div>
