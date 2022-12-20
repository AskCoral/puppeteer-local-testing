# Puppeteer local testing

This repo should allow for faster iteration on local testing with Puppeteer. This will also allow for local downloading of the webpage and not having to worry about rate limiting or local blocking.

## Setup

Simply run `node install` in this repo to download the Puppeteer dependency.

## How to use

Download the page to be scraped from your browser and place it in this folder named `page_to_be_scraped.html`.

Edit the `main.js` file to input your Puppeteer code, mutating the `data` variable.

When you want to run the code, simply use `node main`.
