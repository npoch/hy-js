# How to run JavaScript Code


## Adding Javascript to HTML Pages
Similar to CSS, to add JavaScript to your HTML pages, you can include it inline on the HTML page or as an external file.

To include it internally, write all of your JavaScript within a `<script></script>` tag. Though the tags can be added in the `<head>` or anywhere in the `<body>`, it is usually added at the bottom of the page, just before the closing `</body>` tag.
```js
...
<script>
	// js code here
</script> 
</body>
```
To include it as an external file, save your file using a `.js` extension and link to it using the script tag as well but add the `src` attribute like this:
```js
<script src="scripts.js"></script> 
```
Note that prior to HTML5, an additional `type` attribute was required so you may see external javascript files linked this way as well:
```js
<script type="text/javascript" src="scripts.js"></script> 
```
In the external JavaScript file you don't include `<script>` tags; just JavaScript code itself.


## REPL
A REPL (read, eval, print, loop) is an interactive environment where you can type instructions for the computer to read it, evaluate/run it, print the result and then make itself ready for the next instruction. 

A REPL will take the code you give it and return a result. 

A JavaScript REPL is available inside the Firefox Web Browser. Open the JavaScript console by right clicking on a webpage within the browser, and select the `Inspect Element` option, followed by clicking the **console** tab in the window that appears. Alternatively, go straight to the window by using the available shortcut: `option` + `⌘` + `i` on mac, `ctrl` + `shift` + `i` on windows.

If you see `>` and a blinking cursor… then you're there! Give the computer a simple instruction like `1 + 1`, press enter and the REPL will return a value. 

```js
> 1 + 1
2
```

