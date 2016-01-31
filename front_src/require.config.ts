require.config({

  baseUrl: "./js",

  paths: {
    jquery: "./bower_components/jquery/dist/jquery",
    jquery_ui: "./bower_components/jquery-ui/jquery-ui",
    semantic_ui: "./bower_components/semantic/dist/semantic",
    jquery_sidebar: "./bower_components/simple-sidebar/dist/jquery.simple-sidebar",
    jquery_mousewheel: "./bower_components/jquery-mousewheel/jquery.mousewheel",
    jquery_mCustomScrollbar: "./bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar",
    underscore: "./bower_components/underscore/underscore",
    backbone: "./bower_components/backbone/backbone",
    backbone_stickit: "./bower_components/backbone.stickit/backbone.stickit",
    backbone_validation: "./bower_components/backbone.validation/dist/backbone-validation-amd"
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
    jquery_mousewheel: {
      exports: "$",
      deps: ["jquery"]
    },
    jquery_mCustomScrollbar: {
      exports: "$",
      deps: ["jquery_mousewheel"]
    },
    backbone_stickit: {
      deps: ["backbone"]
    }
  }

});


require(["main",
"jquery_sidebar",
"jquery_mCustomScrollbar",
"backbone_stickit",
"backbone_validation"],
(Main: any,
jquery_sidebar: any,
jquery_mCustomScrollbar: any,
backbone_stickit: any,
backbone_validation: any
) => {
  Main.run();
});
