#!/bin/bash
# -*- ENCODING: UTF-8 -*-
cp -n ../React-modele/{.*,*} .
cp -rn ../React-modele/{src,config,public} .
yarn
git add .
git commit -m "installation du modèle"
git push
code .
yarn start
