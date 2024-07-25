#! /bin/bash
cd /workspaces/node-postgree-devcontainer/liquibase
liquibase update

cd /workspaces/node-postgree-devcontainer/src
npm install
