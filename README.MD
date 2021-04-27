## Table of content

[Travlr](#headers)
<br />
[Add More](#add)
<br />
[Setup and Installation](#setupandinstallation) 
<br />
[Food Page](#foodpage) 
<br />
[Drink Page](#drinkpage) 
<br />
[Frameworks](#Frameworks) 
<br />
[Support](#support)  
[Troubleshooting](#troubleshooting) 
<br />
[Future Goal](#futuregoal) 
<br />
[Contrubutions](#contribution) 
<br />
[Authors](#authors)
<br />
[Status](#status) 


## Travlr

This is site for people who want to explore local foods and drinks. Users can click on individual tabs of food and drink to explore what they like to checkout. Then users can click on map to see all the locations in one click. 

## Why?

This page was inspired by popular search sites such as yelp, foursquare, ect. This particular application employs the use of a tag system and user created data to display trending food and drink places in the New York Area.

## HomePage
<img width="1000" alt="Screen Shot 2021-04-27 at 12 36 56 AM" src="https://user-images.githubusercontent.com/79564250/116185973-af662180-a6f0-11eb-93e1-0422e854397b.png">



## FoodPage
<img width="1219" alt="Screen Shot 2021-04-27 at 12 39 51 AM" src="https://user-images.githubusercontent.com/79564250/116186171-1683d600-a6f1-11eb-879d-b58223af6526.png">



## DrinkPage
<img width="1156" alt="Screen Shot 2021-04-27 at 12 40 13 AM" src="https://user-images.githubusercontent.com/79564250/116186202-23a0c500-a6f1-11eb-894d-74abac3fde2e.png">



## Add
Using this site, hippies can find food, bar and night life near them. If user have visited other local resturant or bar, they can simply click on add button and list on this website. 

The add pages allows a user to submit a new place to the database. When an address is inputted into the form, it is first sent to a geocoding api that will return the longitude and latitude of the place. This info, as well as the address, and the selected tags are submitted to the database.

<img width="1212" alt="Screen Shot 2021-04-27 at 12 40 43 AM" src="https://user-images.githubusercontent.com/79564250/116186231-36b39500-a6f1-11eb-9817-b2e238ff438e.png">

## Setup and Installation

Installation for react on the front end.

```bash 
pip install react 
```
```bash
startreactproject
```

## Frameworks

React-Map-gl https://visgl.github.io/react-map-gl/

React-Map-gl-geocoder https://www.npmjs.com/package/react-map-gl-geocoder

navStyle-CSS Modules https://programmingwithmosh.com/react/css-modules-react/ 

React-Modal https://www.npmjs.com/package/react-modal


## API

Mapbox - https://www.mapbox.com/

Geocoder - https://www.geocod.io/

https://hotspot1.herokuapp.com/


## Support
please visit https://docs.djangoproject.com/en/3.2/

## Troubleshooting
Error: psql: FATAL: role “postgres” does not exist 
Solution: Check out this https://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist.

Error: psql: error: FATAL: Peer authentication failed for user "postgres" 

Solution:
Run psql
Run SHOW hba_file;
Copy the path it returns (something like /etc/postgresql/13/main/pg_hba.conf on Ubuntu)
Open pg_hba.conf in a text editor (you will likely need to run the command with sudo)
Change this line:
local all postgres peer
to:local all postgres md5
Restart PostgreSQL: sudo service postgresql restart
Now rerun the original command

## Future goal
In future, we plan on adding more locations and other categories such as night clubs, parties and live music! 

## Contribution
Pull requests are welcome. Any feedback, comments and suggestions is welcome. Please use contact us page from the site!

## Authors
Tyree (https://github.com/buggydev1)/
Tyler (https://github.com/tjconti12)/
Hengyu (https://github.com/hengyuni)/
Krishna (https://github.com/krishnaneupaney)/

## Status
MVP Published!

## License
[MIT](https://choosealicense.com/licenses/mit/)

