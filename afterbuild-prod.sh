#!/bin/bash

pnpm install

pnpm run build

node .output/server/index.mjs
