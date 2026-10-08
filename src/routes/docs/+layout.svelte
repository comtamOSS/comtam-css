<script>
  import SideMenuGroup from "$lib/components/SideMenuGroup.svelte";
  import "$lib/comtam-css/main.scss";

  let { children } = $props();
</script>

<div class="ct-panel-container">
  <section class="ct-panel-sidemenu">
    <nav class="ct-sidemenu">
      <ul class="ct-sidemenu__list">
        <li>
          <a
            class="ct-sidemenu-item selected"
            aria-label="dashboard"
            href="/docs/gioi-thieu"
          >
            <span class="ct-sidemenu-item__icon ct-i ct-i-home"></span>
            <span class="ct-sidemenu-item__label">Giới thiệu</span>
          </a>
        </li>
        <li>
          <SideMenuGroup label="Cài đặt">
            <ul class="ct-sidemenu__list">
              <li>
                <a class="ct-sidemenu-item" aria-label="panel" href="/docs/cai-dat/bat-dau-nhanh">
                  <span class="ct-sidemenu-item__icon ct-i ct-i-rocket-launch"
                  ></span>
                  <span class="ct-sidemenu-item__label">Bắt đầu nhanh</span>
                </a>
              </li>
            </ul>
          </SideMenuGroup>
        </li>
        <li>
          <SideMenuGroup label="Panel">
            <ul class="ct-sidemenu__list">
              <li>
                <a class="ct-sidemenu-item" aria-label="panel" href="/docs/panel">
                  <span class="ct-sidemenu-item__icon ct-i ct-i-squares-2x2"
                  ></span>
                  <span class="ct-sidemenu-item__label">Default Panel</span>
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
      {@render children()}
    </div>
  </section>
</div>
