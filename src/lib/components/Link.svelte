<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    children,
    href,
    isOpenNewTab = true,
  }: { children: Snippet; href: string; isOpenNewTab?: boolean } = $props();
</script>

<a target={isOpenNewTab ? "_blank" : "_self"} class="ct-link" {href}
  >{@render children()}</a
>
