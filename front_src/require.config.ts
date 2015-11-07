require.config({

  baseUrl: "./dist/js",

  paths: {
    jquery: "../../bower_components/jquery/dist/jquery.min",
    underscore: "../../bower_components/underscore/underscore",
    backbone: "../../bower_components/backbone/backbone"
  },

  shim: {
    underscore: {
      exports: "_"
    },
    jst: {
      exports: "JST"
    }
  }

});


require(["main"], (Main: any) => {
  Main.run();
});
