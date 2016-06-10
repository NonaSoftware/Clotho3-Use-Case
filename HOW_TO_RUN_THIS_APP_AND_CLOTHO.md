Steps to run Clotho:

WINDOWS:
Initialization steps:
1. Clone the clotho3 project onto desktop (from NONA’s github)
2. Open project with Netbeans
3. Clean & Build the entire project (here you may notice some tests failing or warnings)
4. Install mongodb (download the .zip of MongoDB 2.4 from   https://www.mongodb.com/download-center?jmp=docs#community)
5. Extract and save the mongodb zip file wherever convenient.
6. Create an empty folder called data and an empty folder inside data called db inside the mongodb folder.

Steps to run Clotho EVERY time:
1. In the command prompt, navigate the the bin of the mongodb folder and execute the command: mongod --dbpath //path to the data folder here
2. Run clotho3 in Netbeans (here you may also notice some tests failing or warnings)
3. Open a browser and go to https:/localhost:8443 (your browser may warn you of an unsafe connection, continue past this warning)
stay on this page!

Running Necessitas:
1. Just click on home.html!


MAC:
Initialization steps:
1. Clone the clotho3 project onto desktop (from NONA’s github)
2. Open project with Netbeans
3. Clean & Build the entire project (here you may notice some tests failing or warnings)
4. Install mongodb (download the .zip of MongoDB 2.4 from   https://www.mongodb.com/download-center?jmp=docs#community)
5. Extract and save the mongodb zip file wherever convenient.
6. Create an empty folder called data and an empty folder inside data called db inside the mongodb folder.

Steps to run Clotho EVERY time:
1. In the terminal, navigate the the bin of the mongodb folder and execute the command: ./mongod --dbpath /<saved location>/mongodb-osx-x86_64-2.4.14/data/
2. Run clotho3 in Netbeans (here you may also notice some tests failing or warnings)
3. Open a browser and go to https:/localhost:8443 (your browser may warn you of an unsafe connection, continue past this warning)
stay on this page!

Running Necessitas:
1. Just click on home.html!

To terminate, stop running the project in Netbeans, and ctrl+C in the terminal to terminate mongodb		
