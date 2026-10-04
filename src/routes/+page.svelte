<script>
  import SideMenuGroup from "$lib/components/SideMenuGroup.svelte";
</script>

<div class="ct-panel-container">
  <section class="ct-panel-sidemenu">
    <nav class="ct-sidemenu">
      <ul class="ct-sidemenu__list">
        <li>
          <a class="ct-sidemenu-item" aria-label="dashboard" href="/">
            <span class="ct-sidemenu-item__icon ct-i ct-i-home"></span>
            <span class="ct-sidemenu-item__label">Dashboard</span>
          </a>
        </li>
        <li>
          <SideMenuGroup>
            <ul class="ct-sidemenu__list">
              <li>
                <a class="ct-sidemenu-item" aria-label="dashboard" href="/">
                  <span class="ct-sidemenu-item__icon ct-i ct-i-squares-2x2"></span>
                  <span class="ct-sidemenu-item__label">Products</span>
                </a>
              </li>
              <li>
                <a class="ct-sidemenu-item" aria-label="dashboard" href="/">
                  <span class="ct-sidemenu-item__icon ct-i ct-i-shopping-bag"></span>
                  <span class="ct-sidemenu-item__label">Orders</span>
                </a>
              </li>
            </ul>
          </SideMenuGroup>
        </li>
      </ul>
    </nav>
  </section>
  <section class="ct-panel-main-content">
    <div class="ct-box ct-p-h-xxl">
      <h1>Dashboard</h1>
    </div>
  </section>
</div>
