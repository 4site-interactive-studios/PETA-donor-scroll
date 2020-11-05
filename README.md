# PETA-donor-scroll

## Development

You need to work on file `src/js/horizontal-ticker-source.js` and compile it with Babel to generate the `src/js/horizontal-ticker-source.js` for IE11 support.

You can use this service to compile it online: https://babeljs.io/repl#?browsers=defaults&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.3&externalPlugins=

## Features

- Inserts ticker when `<span id="donor-ticker" data-layout="horizontal">hello</span>` has been placed in HTML
- Displays the recent donations on JSON file
- Displays the first name, first letter of the last name, and the donation amount of the donator
- Replace the name of the donator when they want to be anonymous
- Animation pauses when the ticker scrolling has been hovered
- It will also append a checkbox under the email address asking if the donator wants to become anonymous(no backend working)
