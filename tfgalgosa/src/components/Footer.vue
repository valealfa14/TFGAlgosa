<template>
  <div id="footer">
    <head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <body>
      <div class="header fixed">
        <div class="logo pull-left">
          <a><img src="../assets/Banner2.jpg" width="30" /> LLANTAS ALGOSA</a>
        </div>
        <ul class="pull-right">
          <li>
            <a
              href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
              target="_blank"
              ><i class="fa fa-envelope"></i> Contacto</a
            >
          </li>
          <li>
            <a href="https://llantasalgosacr.com" target="_blank"
              ><i class="fa fa-globe"></i
            ></a>
          </li>
          <li>
            <a href="https://www.facebook.com/llantasalgosa/" target="_blank"
              ><i class="fa fa-facebook"></i
            ></a>
          </li>
        </ul>
      </div>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.header {
  background: #6e7070;
  background: -moz-linear-gradient(left, #5b5e5d 0%, #490202 100%);
  background: -webkit-linear-gradient(left, #323636 0%, #5f0202 100%);
  background: linear-gradient(to right, #0f0f0f 0%, #c10000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2aa29a', endColorstr='#007fc1',GradientType=1 );
  -webkit-box-shadow: inset 0px 0 4px 0 rgba(0, 0, 0, 0.4);
  box-shadow: inset 0px 0 4px 0 rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 30%;
  padding-right: 20px;
  overflow: hidden;
  z-index: 10;
  align-self: baseline !important;
}

.header ul li {
  display: inline-block;
}

.header a {
  color: #fff;
  padding: auto;
  display: block;
}

.header a:hover {
  text-decoration: none;
}

.fixed .logo img {
  width: 25px;
}

.top {
  padding: 30px;
  text-align: left;
}

.logo {
  margin-bottom: 30px;
}

.tagline {
  text-transform: uppercase;
  font-size: 20px;
  padding-top: 30px;
}
</style>
