require.config({

  baseUrl: "./js",

  paths: {
    jquery: "./bower_components/jquery/dist/jquery",
    jquery_ui: "./bower_components/jquery-ui/jquery-ui",
    semantic_ui: "./bower_components/semantic/dist/semantic",
    jquery_sidebar: "./bower_components/simple-sidebar/dist/jquery.simple-sidebar",
    jquery_mCustomScrollbar: "./bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min",
    underscore: "./bower_components/underscore/underscore",
    backbone: "./bower_components/backbone/backbone"
  },

  shim: {
    underscore: {
      exports: "_"
    },
    jst: {
      exports: "JST"
    },
    jquery_ui: {
      exports: "$",
      deps: ["jquery"]
    },
    semantic_ui: {
      exports: "$",
      deps: ["jquery"]
    },
    jquery_sidebar: {
      exports: "$",
      deps: ["jquery_ui"]
    },
    jquery_mCustomScrollbar: {
      exports: "$",
      deps: ["jquery"]
    }
  }

});


require(["main",
"jquery_sidebar",
"jquery_mCustomScrollbar"],
(Main: any,
jquery_sidebar: any,
jquery_mCustomScrollbar: any
) => {
  Main.run();
});
