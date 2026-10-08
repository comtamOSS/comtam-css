<script lang="ts">
  import type { Snippet } from "svelte";

  let isExpand = $state(false);
  let { children, label }: { children: Snippet, label: string } = $props();

</script>

<div class="ct-sidemenu-group">
  <div
    aria-label="toggle-expand"
    class="ct-sidemenu-group__header"
    onclick={() => {
      isExpand = !isExpand;
    }}
  >
    <div class="ct-sidemenu-group__label">{label}</div>
    <span
      class={[
        "ct-i ct-sidemenu-group__icon",
        isExpand ? "ct-i-chevron-up" : "ct-i-chevron-down",
      ]}
    ></span>
  </div>
  <div class={ [ "ct-sidemenu-group__container", isExpand ? "opened" : ""] }>
     {@render children()}
  </div>
</div>
