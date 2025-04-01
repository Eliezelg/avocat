#!/bin/bash

# Afficher la version de Node.js
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Installer les dépendances
echo "Installing dependencies..."
npm ci || npm install

# Construire le projet
echo "Building project..."
npm run build

# Vérifier si le répertoire dist existe
if [ -d "dist" ]; then
  echo "Build successful! dist directory exists."
  echo "Contents of dist directory:"
  ls -la dist
else
  echo "ERROR: dist directory does not exist after build!"
  echo "Current directory contents:"
  ls -la
  exit 1
fi
