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
                <a :href="route.path" class="is-active">{{route.name}}</a>
              </li>
            </ul>
            <p class="menu-label">
              Administration
            </p>
            <ul class="menu-list">
              <li><a>Team Settings</a></li>
              <li>
                <a class="">Manage Your Team</a>
                <ul>
                  <li><a>Members</a></li>
                  <li><a>Plugins</a></li>
                  <li><a>Add a member</a></li>
                </ul>
              </li>
              <li><a>Invitations</a></li>
              <li><a>Cloud Storage Environment Settings</a></li>
              <li><a>Authentication</a></li>
            </ul>
            <p class="menu-label">
              Transactions
            </p>
            <ul class="menu-list">
              <li><a>Payments</a></li>
              <li><a>Transfers</a></li>
              <li><a>Balance</a></li>
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

<script type="text/javascript">
export default {
  created() {
    this.routes = this.$router.options.routes.map(function(obj){
      return obj;
    });
  }
  , data() {
    return {
      routes: []
    }
  }
}
</script>