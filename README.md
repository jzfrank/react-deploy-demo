# react-deploy-demo
A simple demo for how github page could be used to deploy react project :)

I used reference of [G4G](https://www.geeksforgeeks.org/how-to-deploy-your-react-websites-on-github/#:~:text=Follow%20the%20command%20below%20and,your%20code%20on%20GitHub%20pages.&text=That's%20it.,Github%20repository%20and%20scroll%20down.)

Here are the steps:

1. make sure the react app you created locally runs OK 

2. create a new repo in github

3. install gh-pages packages as "dev-dependency" of the app 
```
npm install --save gh-pages
```

4. Add some properties to package.json file. 

Add this to the top level: 
```
"homepage": "http://{username}.github.io/{repo-name}"
```
replace terms in bracket :)

Add a predeploy property and deploy property, 
```
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  //...
  "build": "react-scripts build && cp build/index.html build/404.html", // this will prevent page reloads to give a  404 error
}
```

If you are using the Router from react-router-dom then you need to change the browser router tags to 
```
//...
  BrowserRouter basename={process.env.PUBLIC_URL}
//... 
```

5. The magic step: Follow the command below and generate a production build of your app, to deploy your code on GitHub pages. 
```
npm run deploy 
```
That’s it. Your React application is published on GitHub pages and if you want to verify it just go to the settings tab of your application in your Github repository and scroll down. 

6. Your built app code is hosted in gh-pages branch :)


