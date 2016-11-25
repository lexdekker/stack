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

## My experience with React
I have been working with React on this project for the first time. My journey started with understanding how React works. I followed the two courses about React on [Codecademy](https://www.codecademy.com/learn) to gain experience with its syntax and semantics.

After I had done the two courses I wanted to start a project as soon as possible. But that was harder than expected. I came up with different ideas for an application and even started to work on some, but the skill required for them was out of my league at this point. After failing a few times I had to accept that I needed to start with a far more simple application before I could work on more complex projects.

> If you want to reach the top, you must start at the bottom. It is the only way to achieve this goal. This is the process of preparation, hard work, and learning from failure.

### What I learned
React is quite complex and very strict. If you are new to React I recommend you to start a simple application with a few components or views (like this project).

#### Components
The power of React lies within the separation of components and files. It's smart to keep the components small and separate within different files and folders. This gives a nice overview of the folder structure op your application.

#### Parents and Childs
Working with components makes them easy to find, but it can be hard to let them work together. Passing a props from a Parent to a Childs component requires a second good look, especially when a render() needs to be updated after a change on the Child component.

#### Files
React uses JSX to allow HTML tags inside JavaScript files. At first this seems a little weird, but after sometime you will love it.
