<h2>Swgoh Calculator</h2>
<p>This is a React app bootstrapped with CRA to provide a calculator for computing the leveling cost of characters in the Star Wars: Game of Heroes mobile game.</p>

<h2>Future Plans</h2>
<p>The next step will be to add the same computation for upgrading character stars / rarity. After that, I will provide cookie support to remember the settings for each user so that they do not need to re-enter settings. Once that has been done, I will create a separate microservice API that integrates with a 3rd party API to accept a player's ally code and query the 3rd party API to retrieve character information for the player. This information will be used to fill in existing level and rarity / stars for each character for a more tailored computation.</p>

<h2>Build Pipeline</h2>
<p>QA environment points to https://swgohcalculator-qa.herokuapp.com.</p>
<p>Production environment points to https://swgohcalculator.herokuapp.com.</p>
<p>For all code changes, a branch is cut off QA for each ticket, which is then squashed and merged into QA once the ticket is complete. The QA environment is then tested first prior to merging QA into production to avoid downtime from breaking changes.</p>

<h2>Built With</h2>
  <ul>
    <li>React
    <li>TypeScript
    <li>JavaScript
    <li>Heroku
  </ul>

<h2>Authors</h2>
<p>Tim Thompson</p>