
#momSpinner - AngularJS Directive#

The momSpinner directive defines the mom-spinner element, which replaces a starting icon with a spinning icon
whenever it is clicked or is triggered by a `startSpinner` event.

##Overview##
The mom-spinner element indicates to the user that an asynchronous function (`mom-spinner-fn`) is working. Once this
function completes, the mom-spinner element's icon will return either to its original static icon, or to a new icon
returned from the mom-spinner-fn.

Unlike other spinner directives, you supply the mom-spinner-fn to the mom-spinner element, passing in
the name of this function and its parameters as attributes to the mom-spinner element. When the
element is clicked (or a `startSpinner` event is broadcast - see below), this mom-spinner-fn is called and
the current icon is replaced with a spinning icon.

##The mom-spinner-fn##
The mom-spinner-fn is an asynchronous function that you define. It can accept a single object as a parameter, and must
return a promise; it is the completion of the promise that stops the spinner.

The promise's function can return an icon name, and this icon will be displayed instead of the spinning icon once the
promise completes. If the promise does not return an icon value, the starting icon value will be used instead.

##Icons##
The template used by the directive renders the icons via an `<i>` element. Specficially, the template's HTML is rendered
as `<i class="icon-name"></i>`

If you're using Twitter Bootstrap, the icon name can therefore be any of Bootstrap's Glyphicon icons.

##Usage##
```
<mom-spinner
     mom-start-icon="startIcon"
     mom-spinner-icon="spinnerIcon"
     mom-spinner-fn="asynchronousFunction"
     mom-spinner-fn-params="{name1: value1, name2: value2...nameN: valueN}"
     mom-spinner-tag="spinnerTag"
     mom-spinner-id="spinnerId">
</mom-spinner>
```
##Defaults##
Default spinner icon: "icon-spin icon-refresh" (requires the [font-awesome stylesheet] (http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css))

##Element attributes##

###mom-start-icon###
Defines the icon that should appear before the mom-spinner-fn is called. Note that this value should be enclosed in
single quotes inside the attributes existing double quotes.

e.g. if your icon name is `icon-ok`, then your mom-start-icon should be defined as `mom-start-icon="'icon-ok'"`



###mom-spinner-icon###
The CSS class name representing a spinner icon you want to use if you don't want to use the default.

###mom-spinner-fn###
The asynchronous function to call when this mom-spinner element is clicked.

###mom-spinner-fn-params###
An object of name:value pairs that can be used to pass parameters to the asynchronous
  function. The naming, meaning and number of parameters is up to you and depends on the requirements of the
  asynchronous function you specify.

###mom-spinner-tag###
A tag identifying mom-spinner elements as belonging to a group with this tag name. Many mom-spinner elements can be
given the same tag. When the tag is triggered via the startSpinner event, all mom-spinners with the same tag will
execute their asynchronous functions and display their respective spinning icons. Note that despite having the same
tag, each such mom-spinner element can have a different asynchronous function and spinning icon.

###mom-spinner-id###
An identifier that identifies this mom-spinner element uniquely. A startSpinner event can trigger this mom-spinner
element and only this mom-spinner element.

##Example##
 ```
 <mom-spinner
        mom-start-icon="'glyphicon glyphicon-ok'"
        mom-spinner-fn="model.asyncFn"
        mom-spinner-fn-params="{'icon-end':'glyphicon glyphicon-ok-sign', 'cell-name': 'Joe Bloggs'}"
        mom-spinner-tag="'icon-spin icon-refresh'">
 </mom-spinner>
 ```
##Remotely triggering the mom-spinner element with the startSpinner Event##
You can remotely trigger each mom-spinner element by broadcasting a `startSpinner` event with either a tag name
or an id. If you broadcast a startSpinner event with a `spinnerTag` parameter, then every mom-spinner element with that
tag name will begin spinning. If you broadcast a startSpinner event with a `spinnerId` parameter then only that
mom-spinner element with that tag name will begin spinning.

###Example of using startSpinner event##
###Broadcast the event with a tag###
```
$scope.$broadcast('startSpinner', {spinnerTag: 'tagName'}, {'param1': 'param1Value'});
```

###Broadcast the event with an id###
```
$scope.$broadcast('startSpinner', {spinnerId: 'id'}, {'param1': 'param1Value'});
```
