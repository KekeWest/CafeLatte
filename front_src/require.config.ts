require.config({

  baseUrl: "./js",

  paths: {
    jquery: "./bower_components/jquery/dist/jquery",
    jquery_ui: "./bower_components/jquery-ui/jquery-ui",
    semantic_ui: "./bower_components/semantic/dist/semantic",
    jquery_sidebar: "./bower_components/simple-sidebar/dist/jquery.simple-sidebar",
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
    }
  }

});


require(["main"], (Main: any) => {
  Main.run();
});
