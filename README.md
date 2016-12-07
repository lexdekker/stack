# Stack application
Stack is a ReactJS application I made for a school project within a short amount of time (28h). With this application it is possible to stack different tasks into a list.

## Installation
To run this project you need to install the environment first. Go to the folder of this project on your computer and install the application with the following command:

```
$ npm install
```

To run the application environment you need to run npm start:

```
$ npm start
```

The environment will run on host: 0.0.0.0:3000 by default.

```js
// webpack.config.js
devServer: {
  inline: true,
  host: '0.0.0.0',
  port: 3000
},
```

## How the application works
With stack it is possible to create tasks and stack them into a list. The tasks can be set to done or undone. This makes it easy to see which tasks are completed. It is also possible to remove a task from the list.


### Build
The application is build with:
* [React-router](https://github.com/ReactTraining/react-router): this is a React component that handles the different routes of the pages inside this application.
* [Mockapi](http://www.mockapi.io/): this api stores the created and updated tasks inside a JSON object.
* [Axios](https://www.npmjs.com/package/axios): axios is a npm package promise based HTTP client for the browser and node.js. Axios handles the request of the stored JSON data from mockapi. With axios it’s easy to get and post the data to mockapi.
* [Material icons](https://material.io/icons/): these are Google icons used for the layout of the application.


### Views
The application has two different views Home.js and About.js. Both views are controlled by the App.js and index.js file. Inside index.js the routing handles the props that get passed to App.js. The props handles the view and renders it inside the div#app.

```html
<!-- index.html -->
<body>
  <div id="app"></div>
</body>
```


### Components
Each view has it’s own components. The separation of components inside a ReactJS application makes it easy to reuse them (in different views). For the application Stack I made a few components:
* Banner.js
* BannerImagesSlider.js
* Header.js
* NavLink.js
* Tasks.js
* Todo.js


The most important component is Todo.js. This component handles all the tasks inside the To Do list. Inside this file the tasks can be created, updated and removed.

#### States
In React components it's possible to set states with the React getInitialState function.

```js
// Header.js
getInitialState: function() {
  return {
    menuOpen: false
  }
},
```

When a state changes the view/component gets re-rendered, with it's new state. This is useful for handlers and generating changed content.

#### Props
Props are properties that can be passed from parent component to child component.

```js
// BannerImagesSlider.js

// render function inside BannerImagesSlider React.component
render: function () {
  var src = BANNERPATHS[this.state.currentImage];
  return <BannerImage src={src} />;
}
```
The 'src' props from the React.component BannerImagesSlider are passed to the BannerImage.

```js
// BannerImagesSlider.js
function BannerImage(props) {
  var src = props.src;
  return (
      <div>
        <img src={src} alt="Stack banner" className="e-img"/>
      </div>
    );
}
```

The 'src' props of BannerImage is used to set the path of the src attribute inside the img tag. With this function the image path can be changed by the parent component (BannerImagesSlider).


## My experience with React
I have been working with React on this project for the first time. My journey started with understanding how React works. I followed the two courses about React on [Codecademy](https://www.codecademy.com/learn) to gain experience with it's syntax and semantics.

After I had done the two courses I wanted to start a project as soon as possible. But that was harder than expected. I came up with different ideas for an application and even started to work on some, but the skill required for them was out of my league at this point. After failing a few times I had to accept that I needed to start with a far more simple application before I could work on more complex projects.

> If you want to reach the top, you must start at the bottom. It is the only way to achieve this goal. This is the process of preparation, hard work, and learning from failure.

### What I learned
React is quite complex and very strict. If you are new to React I recommend you to start a simple application with a few components or views (like this project).

#### Components
The power of React lies within the separation of components and files. It's smart to keep the components small and separate within different files and folders. This gives a nice overview of the folder structure op your application.

#### Parents and Childs
Working with components makes them easy to find, but it can be hard to let them work together. Passing props from a Parent to a Childs component requires a second good look, especially when a render() needs to be updated after a change on the Child component.

#### Files
React uses JSX to allow HTML tags inside JavaScript files. At first it looks weird to put all the HTML inside the JavaScript files, but later you will understand why.

It’s useful to add functionality to your HTML (JSX) that will be generated. Just make sure you define a state in the component and add handlers to do something when the state changes. In this case it is not necessary to add this kind of functionality with external libraries like jQuery.

The down side of JSX is that the HTML markup can be overloaded with JavaScript functions. This makes it hard to look through the code.
