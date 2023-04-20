#!/bin/bash

defaultEnv="development"

env="${1:-$defaultEnv}"

printf "🤖 Start env (%s)\n" "$env"

REACT_APP_NODE_ENV=$1 \
DISABLE_ESLINT_PLUGIN=true \
react-scripts start