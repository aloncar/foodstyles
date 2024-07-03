# [FoodStyles, Full-stack developer - Technical challenge - v2](https://docs.google.com/document/d/1WauOgJ9TNVPmOgsqOgTB6hxpYt8u9T2TsDNoC7AVyzA/edit?pli=1#heading=h.oom386tve340)

## Prerequisites
- npm, npx, node >= 20, docker

## Setup
- Create `.env` file inside `src/config` folder and fill it with content
- Create docker container and volume `docker run -v foodstyle_volume:/usr/share/volume --name foodstyle -e POSTGRES_PASSWORD=brb -e  POSTGRES_DB=foodstyle -d -p 8081:5432 postgres`
- In case of an port error change it in .env
- check is docker container running by `docker ps`
- Install dependencies `npm i`
- Migrate db `npm run migrate-up`
- Seed db `npm run seed-up`
- Run query `npm run dev` check if is server running using `http:\\localhost:<port#>`

## Step 1, MVP
- project structure
- pg dB seeded with given data
- read params -> query db
- stdout result

## Step 2, Make it easier to use on other machines
- Docker compose project

## Step 3, TBD
- Communicate with product owner and decide what to do next
- Take into account current project status, analytics, client wishes, market postition...
