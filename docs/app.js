function initializeViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("tableauViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/app/profile/joseph.burris/viz/AO3_Observed_Data/ChangeWork";
    // An object that contains options specifying how to embed the viz
    var options = {
      width: '1200px',
      height: '1000px',
      hideTabs: true,
      hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
  }
  