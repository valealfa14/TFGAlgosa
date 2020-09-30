<template>
  <div id="app">
      <div id="page-wrap">
        <Home />
      </div>
      <component :is="currentMenu" :right="side === 'right' ? true : false">
        <a href="#">
          <i class="fa fa-fw fa-star-o"></i>
          <span>Favourites</span>
        </a>
        <a href="#">
          <i class="fa fa-fw fa-bell-o"></i>
          <span>Alerts</span>
        </a>
        <a href="#">
          <i class="fa fa-fw fa-envelope-o"></i>
          <span>Messages</span>
        </a>
        <a href="#">
          <i class="fa fa-fw fa-comment-o"></i>
          <span>Comments</span>
        </a>
        <a href="#">
          <i class="fa fa-fw fa-bar-chart-o"></i>
          <span>Analytics</span>
        </a>
        <a href="#">
          <i class="fa fa-fw fa-newspaper-o"></i>
          <span>Reading</span>
        </a>
      </component>
    </div>
</template>

<script>
import push from "./components/push";
import Menu from "./components/Menu";
import Home from "./components/Home";

export default {
  data() {
    return {
      side: "left",
      currentMenu: "push",
    };
  },
  components: {
    push,
    Menu,
    Home,
  },
  methods: {
    changeMenu(menu) {
      this.currentMenu = menu.replace(/ +/g, "").toLowerCase();
      return this.currentMenu;
    },
    changeSide(side) {
      this.side = side;
    },
  },
};
</script>

<style lang="less">
// @import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");
@import url("http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");
/*Body*/
#content {
  padding: 100px 0%;
  background-color: rgb(243, 243, 243);
  text-align: justify;
  height: 100vh;
  position: relative;
  display: table;
  width: 100%;
  transition: all 0.75s ease;
}
.visible_menu #content {
  transform: translateX(260px);
}

#hr {
  color: #000000;
}

.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}

/* .right .bm-burger-button {
      left: initial;
      right: 36px;
    } */

.bm-burger-bars {
  background: #373a47;
}

.bm-morph-shape {
  fill: #373a47;
}

.bm-menu {
  background: #373a47;

  a {
    color: #b8b7ad;

    &:hover,
    &:focus {
      color: #c94e50;
    }
  }
}
.menu-1 {
  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu {
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
}

// Footer Style
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

*{
    box-sizing: border-box;
}

body{
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}

.header{    
    background: #6e7070;
    background: -moz-linear-gradient(left, #5b5e5d 0%, #490202 100%);
    background: -webkit-linear-gradient(left, #323636 0%,#5f0202 100%);
    background: linear-gradient(to right, #0f0f0f 0%,#c10000 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2aa29a', endColorstr='#007fc1',GradientType=1 );
    -webkit-box-shadow: inset 0px 0 4px 0 rgba(0,0,0,0.4);
    box-shadow: inset 0px 0 4px 0 rgba(0,0,0,0.4);
    width: 100%;
    height: 50%;
    padding-right: 20px;
    overflow: hidden;
    z-index: 10;
}

.header ul li{
    display: inline-block;
}

.header a{
    color: #fff;
    padding: 15px 15px 20px 15px;
    display: block;
}

.header a:hover{
    text-decoration: none;
}


.fixed .logo img{
    width: 25px;
}

.top{
    padding: 30px;
    text-align: left;;
}

.logo{
    margin-bottom: 30px;
}

.tagline{
    text-transform: uppercase;
    font-size: 20px;
    padding-top: 30px;
}
</style>
