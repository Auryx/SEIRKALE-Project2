# PROJECT 2

- **Project Name** MyMTGCards
- **Project By:** Paul Bunda
- [**LINK TO GITHUB**](https://github.com/Auryx/SEIRKALE-Project2)
- [**LINK TO DEPLOYED WEBSITE**](https://project2-dp73.onrender.com/)
- **List of Technologies used: HTML, JS, CSS, Node, Express, EJS, Mongo**
- [**LINK TO TRELLO**](https://trello.com/b/n75K5lpS/project-2)

## Description

The MTG Card Personal Tracker is an app that provides users with a tracker for which cards they own. A user may add cards to their personal collection and view the information of specific cards. Such information includes a card's Name, Mana Cost, Type Line, Text Box, Artist Info, Collector's Number, and Power/Toughness. 

### Target Market

The target market for this product would be MTG TCG collectors and players. 

## Mock Up of UI

<!-- User Views -->
-![Desktop View](https://i.imgur.com/0DPcS5S.png)
-![Desktop View](https://i.imgur.com/EEsAl5O.png)

-![Mobile View](https://i.imgur.com/2uPJwnF.png)
-![Mobile View](https://i.imgur.com/aZ6p3oM.png)

<!-- Cards Views -->
-![Index Desktop View](https://i.imgur.com/hXa8nZm.png)
-![Show Desktop View](https://i.imgur.com/r7u6Ydz.png)
-![Edit/New Desktop View](https://i.imgur.com/sEh3h0R.png)
-![Index Mobile View](https://i.imgur.com/U3fRTbt.png)
-![Show Mobile View](https://i.imgur.com/7DBfYYV.png)
-![Edit/New Mobile View](https://i.imgur.com/Fwypkhe.png)
## List of Backend Endpoints

| ENDPOINT | METHOD | PURPOSE |
|----------|--------|---------|
| /cards | GET | To display all cards in the user's index |
| /cards/new | GET | Display a form to add a new card |
| /cards | POST | Add the card to the database from the form, and redirect to /cards |
| /cards/:id | GET | Display the info about a specific card |
| /cards/:id/edit | GET | Display a form to edit a designated existing card |
| /cards/:id | PUT | Update a designated card's information then redirect to /cards |
| /cards/:id | DELETE | Delete a designated card then redirect to /cards|
|----------|--------|---------|
| / | GET | Display app name and buttons for Sign-Up and Login |
| /signup | GET | Display a form that users can use to sign up for the app|
| /signup | POST | Add the new user profile to the database or reject, then redirect to /login |
| /login | GET | Display a form that users must use to log into the app |
| /login | POST | Check that the username and password match profile data, then redirect to /cards |
| /logout | GET | End current user session then redirect to / |

## ERD (ENTITY RELATIONSHIP DIAGRAM)

![PICTURE OF ERD](https://i.imgur.com/OjBY8b7.png)

- [Free ERD Diagram Tool](http://dbdiagram.io)