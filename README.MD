## Table of content

[Header](#headers)  

[Add More](#add)  

[SetupandInstallation](#setupandinstallation) 

[Food Page](#foodpage) 

[Drink Page](#drinkpage) 

[Frameworks](#Frameworks)

[Support](#support)  

[Troubleshooting](#troubleshooting) 

[Future Goal](#futuregoal) 

[Contrubutions](#contribution) 

[Authors](#authors)

[Status](#status) 


## Headers

This is site for people who wants to explore local foods and drinks. User can click on individual tabs of food and drink to explore what they like to checkout. Then user can click on map to see all the locations in one click. 

## Why?
We created this page because if we want to go out for a food or drink, one have to individually search, which can be frustating experience. With this page, user can find lists of resturants and bar near them all in single website.  

## FoodPage
<img width="1231" alt="Screen Shot 2021-04-25 at 10 14 31 PM" src="https://user-images.githubusercontent.com/79564250/116020104-9f2c4480-a613-11eb-9bca-fed5aef3f40d.png">

## DrinkPage
<img width="1235" alt="Screen Shot 2021-04-25 at 10 15 46 PM" src="https://user-images.githubusercontent.com/79564250/116020193-cb47c580-a613-11eb-9049-a71a89adb899.png">

## Add button
Using this site, hippies can find food, bar and night life near them. If user have visited other local resturant or bar, they can simply click on add button and list on this website. 
<img width="1155" alt="Screen Shot 2021-04-26 at 9 53 02 PM" src="https://user-images.githubusercontent.com/79564250/116173023-cc432a80-a6d9-11eb-834f-17df81639c5b.png">

## SetupandInstallation

This part is only frontend where react is moatly used. setted up mostly OSX and Linux

```bash
pip install python3
``` ```bash
pip install django
```
```bash
pip install psycopg2-binary
```
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

https://hotspot1.herokuapp.com/


## Support
please visit https://docs.djangoproject.com/en/3.2/

## Troubleshooting
Error: psql: FATAL: role “postgres” does not exist 
Solution: Check out this https://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist.

Error: psql: error: FATAL: Peer authentication failed for user "postgres" Solution:

Run psql
Run SHOW hba_file;
Copy the path it returns (something like /etc/postgresql/13/main/pg_hba.conf on Ubuntu)
Open pg_hba.conf in a text editor (you will likely need to run the command with sudo)
Change this line:
local all postgres peer
to:local all postgres md5
Restart PostgreSQL: sudo service postgresql restart
Now rerun the original command

## Futuregoal



## Contribution
Pull requests are welcome. Any feedback, comments and suggestions is welcome. Please use contact us page from the site!

## Authors

Tyree (https://github.com/buggydev1)
Tyler (https://github.com/tjconti12)
Hengyu (https://github.com/hengyuni)
Krishna (https://github.com/krishnaneupaney)

## Status
MVP Published!

## License
[MIT](https://choosealicense.com/licenses/mit/)

