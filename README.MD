# Yelp for Hippy

This is site for hippy.

## Description
Using this site, hippies can find food, bar and night life near them. Then after their visit, rate them accordingly. 

## Set up and Installation

setted up in OSX

```bash
pip install python3
```
```bash
pip install django
```
```bash
pip install psycopg2-binary
```
```bash 
django-admin startproject 
```

## Usage


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
to:
local all postgres md5
Restart PostgreSQL: sudo service postgresql restart
Now rerun the original command

## Future goal



## Contributing
Pull requests are welcome.

## Authors and acknowledgment
Tyree 
Tyler
Hengyu
Krishna

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Status
Building..Site should be up soon.
