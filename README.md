<h1>Checkmate</h1>

<h3>Checkmate is a jQuery plugin to build simple step tutorial and step-by-step guide systems out of HTML checkbox inputs.</h3>

<br />
<h4>Browser Compatibility</h4>
<p>Works well with Internet Explorer 9, and beyond. Internet Explorer 8 or below - use at your own risk.</p>

<br />
<h2>Features</h2>

<ul>
<li>Super easy setup</li>
<li>Create step-by-tutorial with simple HTML checkboxes in minutes</li>
<li>Increase engagement by giving users instant feedback via notifications</li>
<li>Automatically save tutorial progress through LocalStorage</li>
</ul>

<strong>Example of Checkmate in action</strong> <a href="http://blog.getstream.io/cabin-react-redux-example-app-introduction/" target="_blank">Click here to see Checkmate in action.</a>

<br />
<h2>Usage</h2>

<h4>Example:</h4>

<pre><code>
$(document.body).checkmate();
</code></pre>

Checkmate will use any <code>input</code> with <code>type="checkbox"</code> that is a child of the element that is 
passed to the jQuery selector.

<h2>History</h2>

<img src="http://blog.getstream.io/wp-content/uploads/2016/06/Stream-Blue-Logo-.png" />

Created by <a href="http://www.erikaugust.com" target="_blank">Erik August Johnson</a> originally for <a href="http://cabin.getstream.io" target="_blank">Cabin</a>, the React/Redux Tutorial series, by <a href="https://getstream.io" target="_blank">Stream</a>.

<h3>Latest Version</h3>
<strong>0.1.0: "Save your progress via localStorage" edition</strong><br />
0.0.2: "I've added some basic options" edition.<br />
0.0.1: "I created this in an hour in my living room" edition.

<br />
<h2>Installation</h2>

<pre><code>
bower install checkmate
</code></pre>
<br />

Order your scripts like so:
<pre><code>
&lt;script src="../bower_components/jquery/dist/jquery.min.js">&lt;/script>
&lt;script src="../bower_components/growl/javascripts/jquery.growl.js">&lt;/script>
&lt;script src="../dist/jquery.checkmate.js">&lt;/script>
</code></pre>


<br />
<h3>jQuery Options</h3>

Here are the current options that can be passed via an object to Checkmate:

<br />
<strong>defaultTitle</strong><br />
The title that will be used if a checkbox title is not specified via <code>data-checkmate</code><br />

Defaults to: 'Checkmate'<br />
Input type: String<br />

<br />
<strong>growlPlacement</strong><br />
The placement of the jquery-growl alert/notification box.<br />

Options: 'tl' | 'tr' | 'bl' | 'br' | 'tc' | 'bc'<br />
Defaults to: 'br'<br />
Input type: String<br />

<br />
<strong>growlDuration</strong><br />
The duration of time (in milliseconds) the jquery-growl alert/notification box is visible:<br />

Defaults to: 2000<br />
Input type: Integer<br />

<br />
<strong>saveProgress</strong></br />
Saves a record of checkboxes checked for a page via Local Storage. Works well in Internet Explorer 9, and beyond.

<br />
For a checkbox to be saved, either the <code>id</code> attribute or <code>data-checkmate-id</code> attribute must be set for the checkbox.<br />

Defaults to: <code>false</code><br />
Input type: Boolean (True or False)<br />

<br />
An example of setting options:
<pre><code>
$(document.body).checkmate({
  defaultTitle: "Cabin",
  growlDuration: 1000,
  saveProgress: true
});
</code></pre>


<br />
<h3>Markup-Based Options</h3>

The following can be set as attributes:

<br />
<strong><code>data-checkmate</code></strong>
The title of any checkbox can be set by using the <code>data-checkmate</code> attribute. Something like:

<pre><code>
data-checkmate="Example Title"
</code></pre>

<br /><br />

<strong><code>data-checkmate-id</code></strong>
Can be used to set a unique id for a checkbox - which is used to store the completion progress, if <code>saveProgress</code> is set to true.

<br />
<h2>Dependencies</h2>

<strong>jQuery</strong><br />
Checkmate is a jQuery plugin.

<strong>jQuery Growl</strong><br />
Growl is used for the notification/alerts on checkbox change.<br />
Repo: https://github.com/ksylvest/jquery-growl