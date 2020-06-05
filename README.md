# Wisha Date

<p> Wisha Date is a customizable datepicker which you can initialize with only one function. </p>
<p>Here is a demo: </p>
<a href="https://inancakduvan.github.io/wishadate/">Visit Demo</a>

<h1>Import with CDN</h1>
<h3>Add CSS into head tags</h3>
<pre><span><</span>link rel="stylesheet" href="https://res.cloudinary.com/dnjvyciqt/raw/upload/v1591388058/wishadate-min_bfmfxz.css" /></pre>

<h3>Add JS at the end of body tag</h3>
<pre><span><</span>link rel="stylesheet" href="https://res.cloudinary.com/dnjvyciqt/raw/upload/v1591388058/wishadate-min_uqkgk4.js" /></pre>

<h1>JUST FOLLOW,COPY AND PASTE THE CODE BELOW</h1>
<pre>
<span><</span>html>

<span><</span>head>
    <span><</span>link rel="stylesheet" href="https://res.cloudinary.com/dnjvyciqt/raw/upload/v1591388058/wishadate-min_bfmfxz.css">
<span><</span>/head>

<span><</span>body>
<span><</span>div id="wishadate"><span><</span>/div>

<span><</span>button id="wishadate-trigger">Open The Datepicker<span><</span>/button>

<script src="https://res.cloudinary.com/dnjvyciqt/raw/upload/v1591388058/wishadate-min_uqkgk4.js"></script>
<script>
    // set colors for your datepicker
    
    const wishadateConfig = {
        background: "#3C84FC",
        text: "#fff"
    }

    // Initialize your datepicker with config
    
    wishadate(wishadateConfig);

    // Run the callback function and do whatever you want
    
    function wishadateCallback(date) {
        console.log(date)
    }
</script>
<span><</span>/body>

<span><</span>/html>
</pre>

<h3>Yes I'm too lazy to prepare a good documentation but it is really easy :) </h3>
