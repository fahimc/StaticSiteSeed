# StaticSiteSeed


##Creating a new Component

There is a grunt task which you can use to create a component and hook it into the project.

```js
grunt create-component --name=myComponent
//or shorthand
grunt cc --name=myComponent

```

Then add the component to `index.html`

```html
<!--(bake src/component/myComponent/template/myComponent.html)-->
```

####Options

```bash
--name    this is the name of your component
```


###What does this task do?

This task will create all files required for a new component such as the html and SASS file. 

Then it will change the file names to the component name and import it into main SASS file.

##Grunt

###Creating a new grunt task
All tasks must be returned in a 'tasks' object

```json
return {
	tasks:{
		copy: {
			options: {
			},
			index: {
				src: ['App/index.html'],
				dest: 'Dist/index.html'
			},
			assets: {
				src: ['App/assets/**'],
				dest: 'Dist/assets/**'
			}
		}
	}
}
```