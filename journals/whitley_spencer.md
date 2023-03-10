02/09/2023
Today, we worked on finishing the wireframe design and planning our API routes. I think the biggest challenge so far has been trying to visualize our data tables and define the relationships between them without having any experience in FastAPI. Everything we’ve designed thus far is based on how we would write the models in Django, and I’m not sure how that will translate in a different framework.

02/10/2023
We modified our API routes and started learning more about FastAPI and authentication, which made visualizing our data tables a little easier. For example, I wasn’t sure about how we would connect each user’s favorites list to the user’s account, but it looks we can do that through the authentication token.

02/13/2023
This was the first day of coding. We had some issues updating the docker-compose file and getting our containers running. We spent a couple of hours trying to fix this and ultimately decided to start from scratch tomorrow. This was a little discouraging for the first day of coding, but on the bright side, I learned a lot about docker files, which was my weakest subject area up until this point.

02/14/2023
We kept working on getting everything set up in Docker. Turns out all we had to do was delete and rebuild our images. We probably rebuilt them at least 10 times yesterday and today but didn’t realize that deleting the old ones was key. We were able to start building the data tables and then ran into our second issue with migrations. We tried to alter a table in a previous migration file and ended up with ‘incompatible migration history’ errors. After about an hour of troubleshooting, we decided to just delete our volumes and rebuild the databases since we didn’t have any data stored yet. We were able to get the basic accounts routes and query functions set up, and tomorrow we will add user authentication functionality.

02/15/2023
Today, we started working on setting up the authentication system.

02/16/2023
We finished up user authentication and started working on endpoints for favorites list.

02/21/2023:
Finished up backend. We realized that getting all rollercoasters from captain coasters api would take too long and decided to only get the first three pages of results

02/22/2023
Today, we started on the frontend- we decided to use React-Redux for this project. Even though redux isn’t really necessary for this project, we all wanted to get some practice working with it. We started with authentication and login/logout forms and were able to get the login form to correctly login the user and retrieve the access token, but the page was not re-rendering components in response to state change.

02/23/2023
We spent a good part of today troubleshooting through yesterday’s issue. It had to do with providing and invalidating tags in the API slice.

02/24/2023
We started working on the roller coaster list page. We were able to get the information to show up for each rollercoaster.

02/27/2023
We worked on formatting the rollercoaster page so that the cards are in columns. We tried to set this up in a way that is similar to ConferenceGO- by adding each rollercoaster to one of three lists, which represent the columns, and then iterating over the list of lists to populate the page.

02/28/2023
Today we started on the favorites list. We decided to have all of the user’s favorites display in an off-canvas on the main page.

03/01/2023
We added filters to sort the rollercoasters by speed, height, and inversions. We had to reformat the way we were displaying the columns because they were not sorting correctly. We also went over our different components in excalidraw so we had a better understanding of our code organization.

03/02/2023
We added some functionality to our login and signup modals. We also renamed some of our files and directories and updated everything in the dokcer files. We then added a filter to sort the rollercoasters alphabetically.

03/03/2023
Today, we mostly worked on styling. We used Google material icons for our buttons and tried to maintain consistency across all of our components.

03/07/2023
Today, we worked on writing our unit tests. We only have three endpoints that need unit tests- get favorites, delete favorite, and create favorite.

03/08/2023
Today, we worked on adding functionality for a details page. We originally wanted to have it pop up as a modal. After troubleshooting with bootstrap modals for a couple of hours, we decided to just route to a new page. Jimmy and Tyler helped us set up the Link tag with a path parameter.

03/09/2023
Tyler figured out how to get the detail modal working, so we no longer need to route to a new page. We were able to style the detail modal, update button functionality and clean up some of our dead code.
