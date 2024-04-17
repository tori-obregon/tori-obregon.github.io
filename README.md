# tori-obregon.github.io
Landing Page for all things Victoria

https://tori-obregon.github.io/

## Technical Challenges
- *Shadcn and create-react-app*: While Shadcn supports many frameworks including create-react-app, due to how create-react-app abstracts away Webpack configuration the end result is that it does not respect the paths option in tsconfig.json. The solution was either to a) add another dependency to fix the issue as a workaround b) switch the project to another framework c) manually declare the path of the Shadcn components and not use paths. I chose option c for sake of time.  

- *Icons and Link Previews*: Updating the defaults for the tab title and tab icon was straight forward, however when it came to updating the link previews for Slack it was a little trickier. For iMessage it was as simple as updating the default for apple-touch-icon. However the svg of an emoji I was using for the tab icon was not compatible with Slack. Although I found other developers encountering the same issue, I could not find a documented solution. I knew it was possible, as the default create react app had generated an icon that was compatible with Slack's preview. I went back to old versions of my code, and saw it was using .ico as the file type. I swapped out my icon for a .ico file type, and while that resolved the Slack issue my tab was no longer recognizing the icon. I updated once more the icon file type to png, and that rendered on both Slack and on my website's tab.  