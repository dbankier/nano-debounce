#Nano Debounce 

A debounce plug-in for [nano](https://github.com/dbankier/nano) to add a debounce
delay so that changes in the view are only applied to the model after a timer
expiry of inactivity.

Read nano docs there.

##Install

From the root of your existing alloy project you can either.

Install using [gitto](http://gitt.io/)

~~~
$ gittio install nano
$ gittio install nano-debounce
~~~

or install using npm

~~~
$ npm install ti-nano ti-nano-debounce
~~~

It will copy all the required libraries to your `app/lib` folder.

##Setup

Add the following to your `alloy.js` file:

~~~
var nano = require("nano");
var debounce = require("nano-debounce");
nano.load(debounce());
~~~

Then use nano as normal in your controller, e.g.

~~~
nano($,$model);
~~~

##Binding

The default syntax is `{{ attribute }}`. Currently there is a limitation in Alloy that prevents its usage.
See [this issue](https://github.com/dbankier/nano/issues/1).

For the examples below the follow command was used to change the syntax:

~~~
nano.syntax(/\-\=(.+?)\=\-/gi);
~~~

This changes the syntax `-= attribute =-`. 

### debounce attribute 

With the plugin you can now add the debounce attribute, e.g.

~~~
<Alloy>
	<Window class="container">
    <View top="100" layout="vertical">
      <TextField value="-=person.first=-" debounce="1000"></TextField>
    </View>
	</Window>
</Alloy>
~~~

`person.first` will only be updated after 1000ms of inactivity.

##Building from Source

Building the distributable is done using [grunt](http://gruntjs.com/)

Enter the following:

~~~
$ npm install
$ grunt
~~~

The built library is found in at `dist/nano-debounce.js`

