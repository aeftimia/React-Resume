# How to contribute

# Architecture 
Sections of your resume are rendered by react components found in the `src/components` directory. Each component can be thought of as a unique feature, and handles a specific part of the data found in `resume.json`. These components can be composed of other components that render data deeper in the JSON tree.

For example, an `Education` component may render the `education` section of `resume.json`. The `Education` component may compose the `Location` component to render a header identifying the locaiton of each institution within `education`. Since `location` data takes a standard format within `resume.json`,  `Location` is in fact used to render other location headers for the location data found in other parts of `resume.json`.

Components should impose minimal constraints on the actual layout of their corresponding feature. Rather, they mostly tie pieces of data into a `<div>` blob that can be formatted with css files found in the `src/components/css` directory. **There is one component per file, and one css class per file**. Each component can import at most one css file to style their element. However, componsed components necessarily inherit the css styles of their parents. The composed components may then inherit a new css class if they need mroe detail in their styling. Note that a css class may be used to style more than one component.

# Design Philosophy
This generator was designed to be as unopinionated as possible. An example was provided (that shamelessly promotes its original author). The json file should contain everything you'd ever want to includein your resume, and components should filter this down to what you *actually* present for any given rendering. css files style your resume. New components and css files should satisfy the constraints outlined in the Architecture section.

# Contributing
New styles and componets are welcome. When you're done, you can create a new resume format and name it something CamelCase that starts with `Resume`. Throw it in the `src/components` folder and you're good to go! Feel free to contribute new css styles as well. New data sections to the json file and accompanying components for rendering are also welcome.

When you want to add a new feature (or just ask a question), create an issue on Github before doing a pull-request. Also be sure to reference the issue before pulling code. It may sound redundant but it keeps discussions organized. 
