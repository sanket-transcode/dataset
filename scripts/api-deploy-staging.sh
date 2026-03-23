#!/bin/bash
set -e

echo -e "\n"
echo -e "🔔  You are deploying to staging api \n";

echo -e "\n"
echo -e "🏗️  Go to api directory... \n"
cd /var/www/categra/staging/api

echo -e "\n"
echo -e "🏗️  nvm & git setting... \n"

source ~/.nvm/nvm.sh

nvm list

nvm use 20.13.0

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/arpit_ssh < /dev/null


echo -e "\n"
echo -e "📡  Code update \n"

git stash

git status

git pull origin dev

echo -e "\n"
echo -e "🌱  Install Dependencies\n"

npm i

echo -e "\n"
echo -e "🌱  Build & restart pm2\n"

pm2 list

pm2 restart staging-api 
