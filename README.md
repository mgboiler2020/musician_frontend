# musicianBook

## Table of Contents

- [Description](#description)
- [Project Objective](#project-objective)
- [Sample](#sample)
- [MVP / Stretch Goals](#mvp-stretch-goals)
- [Current Features / User Stories](#current-features)
- [Technologies used](#technologies-used)
- [Project takeaways](#project-takeaways)
- [Links](#links)
- [References](#references)

- [Wireframes](#wireframes)



## Wireframes and ERD
<br>
Initial wireframe for the project:



## Creator

 Matt Guffy


## Description

This app is for musicians to find others to play with for various projects.  It allows a user to create a profile which includes details such as location, which instruments they play, skill/experience level, current projects, preferred genres, and what they’re looking for (joining a new band, looking for a new member for an existing group, forming a band, session work, jam sessions, et cetera.


## Project objective

- HomePage (Login with existin user ID or sign up and create a new profile)
- UserDetail (Displays your profile and user attributes, allows for editing and deleting your profile)
- UserProfiles (Displays all the users and some of their attributes in a grid)
- BandProfiles (Displays all the bands and some of their attribtes in a grid)
- SessionPage (Displays all the existing sessions created by users)
- CreateBand (Allows a user to create a band)
- CreateSession (Allows a user to create a session entry)

## Sample Code

 createBand = async () => {
      const data = {
        bandName: this.state.bandName,
        showDates: this.state.showDates,
        location: this.state.location,
        currentProjects: this.state.currentProjects,
        pastProjects: this.state.pastProjects,
        genre: this.state.genre,
      };
      const response = await axios.post('http://localhost:3001/band/createBand' || 'https://musicianbook-project4.herokuapp.com/band/createBand', data);
    }


## MVP / Stretch Goals

### Basic MVP

- [X] User can search for meals by category.
- [X] User can search for meals by ingredients.
- [X] User can search for meals by geographic area.
- [X] User can click a button to get a random meal.
- [X] Search results returned and rendered in the SearchResult page.
- [X] Meal selected from SearchResult page will be rendered on the MealDisplay page
- [X] Styling included in MVP (consistent color scheme and fonts)

### Stretch goals

- [ ] Adding Advertisements with another API
- [ ] Create a user account
- [ ] Create a new meal
- [ ] Add a “Like” button-Add user comments
- [ ] Make app mobile friendly

## Technologies used

<p>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="React logo" height="200" />

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png" alt="HTML logo" height="200"/>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TUvkaAZ51SEo89de6huZMjCxCEQsKhgpFg&usqp=CAU" alt="CSS logo" height="200"/>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png" alt="JS logo" height="200"/>

<img src="https://surge.sh/images/logos/svg/surge-logo.svg" alt="surge logo" height="200"/>

<img src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png" alt="npm logo" width="200"/>

<img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" alt="Git logo" width="200"/>

<img src="https://1000marcas.net/wp-content/uploads/2020/02/GitHub-Logo-600x338.jpg" alt="GitHub logo" height="200"/>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyS9VY5uFYyc1xVD9-kmMnjR9DpsbuVpr3Xw&usqp=CAU" alt="GitHub logo" height="200"/>



</p>

## Project takeaways

* Initial plan seems to be way beyond MVP for most projects.

* There WILL be errors and setbacks. Dealing with them calmly and efficiently becomes more difficult as deadline approaches.

* Two repos and two deploy methods is more complex than I was expecting, but is common in real-world projects especially with as many stand-alone (but integrated) systems Deere uses.

* Join tables require very careful planning prior to set up.

## Links

* [GitHub repositories] (https://github.com/mgboiler2020/musicianbook_frontend)

* [GitHub repositories] (https://github.com/mgboiler2020/musicianbook_backend)

* [Surge deployment](http://mb_project4.surge.sh/)

* [Heroku deployment](h)ttps://musicianbook-project4.herokuapp.com/session/all)

## References

* [Research Bootstrap](https://react-bootstrap.github.io/components/forms/)

* [Research React History.push](https://stackoverflow.com/questions/63404476/history-push-is-not-redirecting-to-specific-page-with-reactjs)

* [Research CSS](https://www.w3schools.com/css/default.asp)

* [Research React]  Used many of the exercise and lab repos we used throughout the course.
