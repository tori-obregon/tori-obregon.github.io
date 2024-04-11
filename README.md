# tori-obregon.github.io
Landing Page for all things Victoria

https://tori-obregon.github.io/

## Technical Challenges
- *Shadcn and create-react-app*: While Shadcn supports many frameworks including create-react-app, due to how create-react-app abstracts away Webpack configuration the end result is that it does not respect the paths option in tsconfig.json. The solution was either to a) add another dependency to fix the issue as a workaround b) switch the project to another framework c) manually declare the path of the Shadcn components and not use paths. I chose option c for sake of time.  