#!/bin/bash
cd /tmp/kavia/workspace/code-generation/simple-food-recipes-654507-654516/frontend_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

