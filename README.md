This is a coding assignment by Yumemi Inc.

## Overview

You can access this [Link](https://prefecture-chart.vercel.app/).

This is an application that show the graph about population of each prefectures.

## Getting Started for developers

First, clone this git repository to your local environment:

```bash
git clone <REPOSITORYNAME>

```

Second, install libraries using package.json:(please use `yarn` not `npm`)

```bash
yarn install
```

Thirs, set **environmental variable**;
You have to get API_KEY by [RESAS API](https://opendata.resas-portal.go.jp/)
You can create `.env.local`, and edit it.
If you want to see a sample of how to write it, see `.env.template`.

```bash
NEXT_PUBLIC_API_KEY=<APIKEY>
```

Finally, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx` or `components/*`.

## Directory structure under src/

This project uses [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) for directory organization.

##### `components/ – Presentational components`

Place the UI component (.tsx) that defines the "look and feel".
This component has no logic, and draws purely from the props passed to it.
The directory below can be further hierarchized by category.

##### `containers/ – Container components`

Place a component (.tsx) that defines the "behavior".
It contains the logic for fetching data through hook functions, etc., saving and changing states, etc., and finally passing the data to be displayed as a props object in another component.
The directory below can be further hierarchized by category.

##### `hooks/ – Custom hooks`

Place custom React hooks.
The application logic is not written in the components, but implemented as hook functions as much as possible.
Basically, hook functions are called from components under the comtainers directory or from another hook function.

##### `pages/ – Page components`

Place the Next.js page component (.tsx), as well as \_app.tsx and \_document.tsx
Files (xxx.tsx) will be loaded according to the URL path when the website is accessed.
This corresponds to Templates (Pages) in Atomic Design.

##### `__test__/ – Test Folder`

This project uses Jest and React-testing-library for doing test.
If you know it more, please look [this NextJs Test Document](https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler)
