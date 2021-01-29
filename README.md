# HOTH 8 React Native Workshop 📱
So you want to make a mobile app, but don't want to go through the hassle of maintaining 2 separate code bases? Then, you've come to the right place! React Native, a framework released by Facebook, allows you to do exactly that using Javascript. Let's get started!

//TODO: link slides <br>
//TODO: link video

### Disclaimer
Although this workshop is intended for complete beginners, the time sensitive nature of a hackathon requires that we move at a fairly fast pace. As a result, the following (though not a prerequisite) will be extremeley helpful going into the workshop:  

- knowing that React Native is a Javascript framework that allows for cross platform development (I assume you already know this since you're here, but if you didn't there you go!)
- basic understanding of how to navigate the terminal and execute commands
- familiarity with fundamental coding principles such as variables, primitive data types, control flow, and functions
- exposure to javascript arrow functions, objects, and functional programming style (don't worry too much if you're not familiar with the last one)
- at least slight exposure to HTML and CSS

We have another workshop available for HTML, CSS, and Javascript, so unless you're really pressed for time, I recommend you watch that first!

## Contents
1. [How Do I Get the Most Out of This Workshop?](#How-Do-I-Get-the-Most-Out-of-This-Workshop)
2. [Environment Set Up](#environment-set-up)
3. [JSX](#JSX)
4. [Basic & Third Party Components](#basic-&-third-party-components)
5. [Props](#props)
6. [Style Sheets](#style-sheets)
7. [Custom Components](#custom-components)
8. [State](#state)
9. [Thinking In React (Native)](#thinking-in-react-(native))
10. [Additional Resources](#additional-resources)

## How Do I Get the Most Out of This Workshop?
To boil down React Native in just in an hour is pretty much impossible, so this workshop is going to be more of an overview of what I consider to be essential topics. Think of it as an introduction to what's possible rather than a comprehensive guide (because that would take literally 20+ hours of content). 

Throughout the workshop I'll be incrementally building a basic app in order to demonstrate certain ideas. Since the workshop is recorded, I actually *do* recommend you pause after each section and try to implement each feature yourself. If you can though, don't just copy my code line for line. Try to recall the syntax and implement it in your own way. I understand everything is new to you, so I'll provide a syntax cheat sheet for you to reference, but don't look back at my code until after you've attempted it yourself! In this way, you can be sure that you actually understand each concept and aren't just taking it for granted.

I'll be linking documentation for each concept I cover (as well as some I won't cover) that will go into the gorey details, as Carey Nachenberg would say, so please check that out if you want a more in depth understanding of a certain topic!

## Environment Set Up
To start off, you're going to want to install a tool called [Expo](https://docs.expo.io/get-started/installation/). Expo is basically essential to building an app in React Native as it makes running it on your computer or on your phone far easier. Unfortunately, time is of the essence for this workshop, so I won't guide you through step by step, but check out [resource 1](#additional-resources) if you want a guide! The sections titled **Installation** and **Create a new app** should give you everything you need to get started.

If you haven't already, I would also install [VSCode](https://code.visualstudio.com/) to use as your text editor, but really any editor (even vim) will work just fine.

## JSX

Now that you have your environment set up you've probably noticed a couple new files appear. Right now, we're most interested in `App.js`. If you open it up you'll see a ton of weird looking syntax including some stuff that looks oddly similar to HTML.

```
<View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>
  <StatusBar style="auto" />
</View>
```

Hold up, didn't I say React Native was a *Javascript* framework? How can we include HTML in a Javascript file? Well, the answer is we're not. Although it may look similar to HTML (and intentionally so), it's actually called JSX and it's an extension to the Javascript language that is included in React Native. JSX allows us to write **declarative** code, meaning that rather than explicitly coding up each step to build our UI, we simply state what we want it to include. In the example above you'll notice that by default Expo will initialize each app's UI to contain a `<View>`, some `<Text>`, and something called a `<StatusBar>`. Each of these things is called a **component**. Notice, how the `<Text>` and `<StatusBar>` components are contained within the `<View>` tags, as is possible in HTML.

### Quick Boilerplate Overview
If you're not familiar with Javascript, the rest of `App.js` may look kind of daunting to you. At the top you have a bunch of `import` statements and and the bottom you have a `StyleSheet` object. I'll go over what the `StyleSheet` allows you to do [later](#style-sheets), but let me give you a brief explanation of `import` now.

In Javascript, `import` allows you to use code from other files within the current file. If you're familiar with C++, it's similar to the concept of `#include` in that if you import a function, some variables/constants, or anything else, you'll be able to access them within the current file even though they're not declared. One very important import that you need to include in all files that contain React components is 

```
import React from 'react'
```

Additionally, you need to import each React Native component before using them as follows: 

```
import { View, Text } from 'react-native';
```

You can also import files from your own project, but I'll save that discussion for when we get to [Custom Components](#custom-components).

## Basic & Third Party Components
As mentioned before, components are at the core of everything you do in React Native. They are basically like legos: you can put a bunch of them together to create a beautiful UI! (I may have stolen this analogy from @nareh oops)

### What exactly is a View?
If you're familiar with HTML, `<View>` is essentially the analog to `<div>`. It isn't exactly the same due to some quirks related to mobile development, but it's the same idea. Think of it as a blank canvas or container to hold other components. One important thing to note about `<View>`'s is that unlike in HTML, you cannot enclose text within them without any other component. **In JSX, all text must be enclosed within a `<Text>` component, otherwise your app will have a runtime exception.** The following code will result in an exception: 

```
<View style={styles.container}>
  Open up App.js to start working on your app! //ERROR: Text strings must be rendered wihtin a <Text> component
</View>
```

Another important thing to realize is that just like in other languages, functions can only return one value. To demonstrate this, let's take a look at the `App()` function.

```
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

In JSX, each component corresponds to a single "value." It may not be clear at first, but the above function actually only returns one component: a `<View/>` which contains `<Text/>` and a `<StatusBar/>`. As a result, the above function is allowed. However, the following would not be allowed: 

```
export default function App() {
  return (
    <Text>Open up App.js to start working on your app!</Text>    // ERROR: JSX expressions must have one parent element.
    <StatusBar style="auto" />
  );
}
```

### More Components
Here's a list of some of the components offered by default in React Native:
- `<View>`
- `<Text>`
- `<Button>`
- `<Switch>`
- `<Image>`
- `<TextInput>`
- `<ScrollView>`

For detailed documentation on each component and examples of how to use them, click [here](https://reactnative.dev/docs/components-and-apis). And all of that's only scratching the surface of what's possible!

### Third Party Components
One of the main pros of using React Native is the vibrant community that has grown surrounding it. Many in the community, such as Expo, have released their own components for you to use! I won't be covering them in this workshop, but many of them are very useful so I do recommend you take a [look](https://docs.expo.io/versions/latest/). 

### Demo
Let's get started making our first app! But what should the app do? While writing this workshop, I noticed that I said the word "component" extremley often. In fact, I said it so often that it eventually started to lose its meaning. So in order to make sure I don't lose my mind, let's make an app that allows me to keep track of how many times I say it. 

So what components should we include in our "component" counter? I'm thinking header text that features the name of the app, text that tracks the count, and a button to increment the count would be good. So let's implement it! First, I'm going to get rid of some of the default expo stuff in `App.js`. Now our file looks like this: 

```
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
```

Much cleaner right? Next, I'm going to add all of the components we want to include i.e. two `<Text>`'s and one `<Button>`. Making sure to add Button to the import statements (otherwise we'll get an error), now our file looks like this: 

```
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Component Counter</Text>
      <Text>0</Text>
      <Button title="Increment"/>
    </View>
  );
}
```

Alright, this is a great foundation! Unfortunately, when we run our app it looks pretty terrible, but we'll fix that soon! Right now I want to focus on our `<Button>` component.

```
<Button title="Increment"/>
```

We added a title to our Button (because without it our code would have a runtime exception), but what exactly is a title?

## Props
Props essentially allow us to pass arguments to components, similarly to how you would pass arguments to a function. For example, in our Button we pass a `title` prop, which gives the Button whatever text we want. Another button prop is `onPress` which allows us to say what happens when you press the button. Most components provided by React Native (and third party components) have props that allow you to customize them.

### Demo
Let's add the `onPress` prop to our button. Now our `App()` function looks like this:

```
export default function App() {
  const incrementCount = () => {
    //do something
  }

  return (
    <View>
      <Text>Component Counter</Text>
      <Text>0</Text>
      <Button 
        title="Increment"
        onPress={incrementCount}/>
    </View>
  );
}
```

Notice how we surrounded the name of our function with `{}`. **When you want to embed a Javascript expression within JSX, you must use `{}`, otherwise there will be an exception.**

I'm still not totally satisfied with the app. One clear issue is the formatting: everything is bunched up near the top of the screen and some of the text is being blocked by the notch! How can we fix this?

## Style Sheets
The problem we're experiencing above is where style sheets come in! If you're familiar with CSS then you basically know exactly how to use style sheets. Don't worry if you haven't used CSS before though! Every property is just one Google search away.

### Demo
Let's not waste any time and get right back into making our app. You may have noticed earlier, but we actually already had a default style sheet provided by Expo. Let's add it back into our app. Make sure to import StyleSheet!

```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
```

If the syntax is unfamiliar to you, I recommend looking into [Javascript objects](https://www.w3schools.com/js/js_objects.asp). Our stylesheet is essentially just an object that contains more objects.

To apply our style, let's do the following:

```
<View style={styles.container}>
    ...
</View>
```

Since our View component contains all of our components, let's call it our container. Makes sense right? Now, if we run our app, all of our components should be centered in the middle of the screen. Looks a bit better, but we're not done quite yet. Let's change up the text. First we add a couple new style objects to our style sheet. Make sure to apply them after in order to see the effects.

```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },
  counter: {
    fontSize: 75,
    fontWeight: "700",
    marginBottom: 50,
  }
})
```

Now our app's looking pretty good! (As an aside, I highly recommend planning out your app's design before you start coding using [Figma](https://www.figma.com/))


## Custom Components
As mentioned earlier, each React Native component corresponds to a value, which allows for them to be returned in functions. By default, each app only has one function: `App()`. Theoretically, though, we could add more functions that each return components and call those functions within `App()` to render the components they return. This is exactly what custom components are! 

You can either choose to represent a custom component as a function or as a class, but for this workshop we'll stick to functional components (mostly because the developers of React Native are shifting towards functions and because classes in Javascript can be an absolute pain at times).

Say we want to make a custom component that contains an image and some caption describing it. We could do the following (notice we use arrow function syntax, which for our purposes is interchangeable with the function syntax you might be used to):

```
const CaptionedImage = () => {
  return (
    <View>
      <Image/>
      <Text>There is no image yet :/</Text>
    </View>
  );
}
```

This works fine, but there's a pretty glaring flaw in our component. No matter what we do, it will always have no image and the `<Text>` will always contain "There is no image yet :/". To fix this, we can pass props to our component, just like we did with prebuilt components! Let's modify the component as follows: 

```
const CaptionedImage = props => {
  return (
    <View>
      <Image 
        source={{ uri: {props.uri} }}
        style={{width: 50, height: 50}}/>
      <Text>{props.caption}</Text>
    </View>
  );
}
```

Now we can pass two props to our component: a `uri` and a `caption` (Side note: notice how I created a style object directly within the style prop; this is allowed! It's preferred to use StyleSheet for performance reasons, but for for the sake of demonstration I'll stick with this way). Just like we can include any other component, we can render our `CaptionedImage` by doing the following: 

```
<CaptionedImage uri={some-image-uri} text="A caption that describes the image!"/>
```

Let's do another example.

### Demo
Our app is looking a lot better, but I'm still not satisfied. Our button is just blue text (on iOS), which is super boring. So let's create a new button component that has a custom style. 

Right now, all of our code is located in a single file. Which, for a simple app, is totally fine! But could you imagine trying to write an app like Twitter (which was built in React Native by the way) in a single file? It would be completely unmanageable. Instead, let's do what I mentioned earlier and create a new file called `StyledButton.js` and import it into our `App.js`! (Note: Although I'll gloss over it for this workshop, I recommend checking out [this](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/) article about project organization in React Native).

```
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const StyledButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default StyledButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "purple",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        padding: 25,
        textTransform: "uppercase",
    },
});
```
I want to emphasize `export default StyledButton`. Without it, you would not be able to import the custom component into another file!

To import `<StyledButton>` into `App.js` we update it as follows:

```
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import StyledButton from './src/components/StyledButton';

export default function App() {
  const incrementCount = () => {
    //do something
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Component Counter</Text>
      <Text style={styles.counter}>0</Text>
      <StyledButton
        text="Increment"
        onPress={incrementCount}/>
    </View>
  );
}
```
Now our app is looking good 😎😎. Obviously, this is a very simple example for the sake of demonstration, but React Native is extremely powerful. Using a combination of many simple components, you can buid a far more involved UI (think Twitter) fairly intuitively.

Now all we need to do is make our counter actually function and we'll be good to go!

## State

## Thinking In React (Native)

## Additional Resources
1. [How to Install Expo](https://docs.expo.io/get-started/installation/)
2. [Basic Component Documentation]([here](https://reactnative.dev/docs/components-and-apis))
3. [Third Party Component Documentation - Expo](https://docs.expo.io/versions/latest/)
4. [Javascript Objects - W3 Schools](https://www.w3schools.com/js/js_objects.asp)
5. [Project Organization](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)
