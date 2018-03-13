<template>
  <div id="app">

    <!-- START NAV -->
    <nav class="navbar is-dark">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="../">
            Bulma Admin          
          </a>
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="admin.html">
              Home
            </a>
            <a class="navbar-item" href="admin.html">
              Orders
            </a>
            <a class="navbar-item" href="admin.html">
              Payments
            </a>
            <a class="navbar-item" href="admin.html">
              Exceptions
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->

    <div class="section" id="content-admim">
      <div class="columns">
        <aside class="column is-2">
          <nav class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li v-for="route in routes">
                <router-link :to="route.path">{{route.label}}</router-link>
                <ul v-if="hasSubMenu(route)">
                  <li v-for="sub in route.sub">
                    <router-link :to="sub.path">{{sub.label}}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>
        <main class="column">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>