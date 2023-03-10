## Project Documentation

ReadME

PROLLERCOASTER

- Whitley Spencer
- Stephanus Chung
- Alexis Weaver
- Dean Grey

Design

- ![API Design](/docs/api-design.md)
- ![Database](/docs/database.md)
- ![Front-end Wireframe](/docs/wireframe.png)
- ![Integration](/docs/integrations.md)

Intended market
Our Target Market is the adventurous spirit who wants to seek thrills in the world around them; those searching for a family vacation; avid coaster fans; and those who want to keep track of the wonderful memories they have made or plan for those wonderful memories they have yet to make.

Functionality

- Visitors to Prollercoaster, pronounced ‘Rollercoaster’ with a ‘P’, are met with a thrilling dynamic video that plays while the content loads. Guests have the option to both log-in and sign up while this video plays and the teams logo and name are displayed in the top left corner of the page. Both the log-in button and sign in button are displayed as icons which when clicked present an easy to fill out modal form, again displaying the logo in the corner and placeholders describing how to enter the information. It should be noted that each of these modals present you with an option to use the other, if you meant to log in instead of sign up, or vice-versa. When the site content appears the content is a beautiful arrangement of various rollercoasters with details including the park they reside in, their maximum speed, maximum height, number of inversions, and a message telling you that logging in will all you to add each rollercoaster to a list of favorites. Upon clicking the roller coaster cards one can view a details page providing more information about the ride including what it is made out of, e.g wood or steel and the length of the ride. Visitors also have the capacity to sort the Roller Coasters presented neatly in card fashion by these attribute; speed, height, inversions, by park, or alphabetically. There may even be a few Easter eggs to ride a few featured rides from a first person perspective.

- Once a guest signs up or logs in they are greeted with a welcome message that remains at the center of the navbar telling them they were successful. The log in and sign up buttons are replaced with a logout button and the feature of adding and saving roller coasters to a favorite list, available through a favorites icon, which will appear on a left mounted off-canvas. The logout button will return you to the original state without a welcome message, with the reduced functionality, and the sign-up and log in buttons as options.

Project Initialization
To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine using your terminal, from gitlab.
2. Name the project a unique name.
3. Change Directory(cd) into the new project directory.
4. Run docker volume create postgres-data
5. Run docker volume create pg-admin
6. Run docker compose build
7. Run docker compose up
8. You will need to visit captaincoaster.com/api to obtain a key which you will place in a .env file set equal to RC_KEY.
9. Visit localhost:3000 in your browser to tour our site.
