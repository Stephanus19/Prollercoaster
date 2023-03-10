
02/09
Created api-design.md
Created journals for team members
Coded api design endpoints, looking over api data to see what parameters are being passed. 

02/10
Went over API endpoints with jimmy

2/13
We tried to work through the learn, had docker issues. we were getting psycopg errors.  Tried searching google but no luck fixing the issues.  Decided to blow things up an start at the beginning since we could not get 2/3 volumes to work.

2/15
We figured out and got routes to work for get individual, get all and create. Paused working with authentication for create after we got create to work without authentication

2/16
Worked through issues creating a hashed password and passing it to a model.  Honestly, we changed so much its hard to remember what errors we fixed and why/how.  We did have to rename various variables and create another model to 
handle issues though.

2/21
Today we continued our favorites.py working on our queries and routes. 

2/22
Started working on front-end authentication.  Worked on the log in Modal.  Login modals were designed off Curtis’ library code.  Spent most of the day going off learn and trying to figure out how to the cookbook codes were working.

2/23
Today we finished the log in modal. With Candices help we were able to get the login in button to disappear and be replaced by the logout out button upon successful login in. We also were able to add our sign up button with functionality.

2/24
Worked on the front end favorites and authentication. 

2/27
We worked on putting the site data into columns for most of the day, we corrected the favorites list routes and queries and with Louise’s help we were able to finish as verified by Swagger.  Had issues getting our cards to display in columns. We tried to use conference go as a template to get cards into set columns.  Although the cards were in columns they weren’t how we expected it.  Couldn’t figure out if a bootstrap was overriding or not.


2/28
Worked on getting the off canvas to render properly.  The off canvas would be called as marked by a darkened background screen but the actual off canvas was not displayed.  met with candid to fix some functionality.  Was able to get favorites data to display on the off canvas.an off canvas, fixed some functionality with our api slice with Candice, added a delete favorite button with functionality and discussed our plans for the filtering of our data to the front end. 

3/1
Rollercoaster cards were not rendering on homepage when a user was not logged in.  Pretty sure we added a conditional for rendering but can’t clearly remember.  Added filters icons for sorting our list of rollercoasters.  Spent some time on css for a subnav portion, making sure it was always right under the nav.


3/2
Removed the close button from our sign up modal and implemented a dismissal upon pressing the sign up button, added an A-Z filter button. Began css and pulling icons from google.

3/6
Worked on a landing page.  Initially tried to get a button so when our slow api call was loaded we would get a button to continue.  We were unsuccessful. Decided to just have a video when loading data and have it auto close.

3/7
Worked on unit test.  Checked in with Riley about unit testing, he said we have an edge case with a small api so us only having 3 unit tests would be ok.

3/8-9
Added conditional statements to get rid of a 401 error in regards to a favorites list trying to populate without a logged in user.  Added a details router/queries. Started on a details page. Had a lot of trouble getting details into a separate modal because of how our code was structurally set up.  We had issues because our data was mapped within our cards in a separate component.  Once we figured out how to get the data to another component, we had issues were it was going through too many iterations and ended up with multiple(6x) of the same data array.  Jimmy showed us how to pull id parameter from the path so we can populate data.  Ended up passing id to our details component with the help of SEIR Tyler.  Refactored, cleaned up dead code, and worked on stylings.
