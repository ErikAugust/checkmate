<h1>Checkmate</h1>

<h3>Checkmate is a jQuery plugin to build simple step tutorial and step-by-step guide systems out of HTML checkbox inputs.</h3>

<h3>History</h3>

<img src="http://blog.getstream.io/wp-content/uploads/2016/06/Stream-Blue-Logo-.png" />

Created by <a href="http://www.erikaugust.com" target="_blank">Erik August Johnson</a> originally for <a href="http://cabin.getstream.io" target="_blank">Cabin</a>, the React/Redux Tutorial series, by <a href="https://getstream.io" target="_blank">Stream</a>.

<h4>Latest Version</h4>
0.0.1: "I created this in an hour in my living room" edition.

<h3>Installation</h3>

<pre><code>
bower install checkmate
</code></pre>

<h3>Usage</h3>

<h4>Example:</h4>

<pre><code>
$(document.body).checkmate();
</code></pre>

Checkmate will use any <code>input</code> with <code>type="checkbox"</code> that is a child of the element that is 
passed to the jQuery selector.

<h4>Options</h4>

The title of any checkbox can be set by using the <code>data-checkmate</code> attribute. Something like:

<pre><code>
data-checkmate="Example Title"
</code></pre>

<h3>Dependencies</h3>

<strong>jQuery</strong>
Checkmate is a jQuery plugin.

<strong>jQuery Growl</strong>
Growl is used for the notification/alerts on checkbox change.