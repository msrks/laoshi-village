## Official Homepage of Laoshi Village

edit from alan pc

### how to upload to Alibaba Cloud 2024

https://docs.serverless-devs.com/getting-started/

1. install serverless devs

```bash
npm install @serverless-devs/s -g
```

2. configuration of this tool

```bash
s config add
```

3. deploy

```bash
s deploy -y
```

![](/public/hero1_new.jpeg)

### backlog

```bash:.github/workflows/ghpage.yml
# name: Deploy to gh-pages

# on:
#   push:
#     branches: ["main"]

# jobs:
#   build-and-deploy:
#     runs-on: ubuntu-latest

#     permissions:
#       contents: write

#     steps:
#       - name: Check out the repository
#         uses: actions/checkout@v2

#       - name: Set up Node
#         uses: actions/setup-node@v3
#         with:
#           node-version: 22

#       - name: Install dependencies
#         run: npm ci

#       - name: Build Next.js
#         run: npm run build

#       - name: Deploy to gh-pages
#         uses: peaceiris/actions-gh-pages@v3
#         with:
#           github_token: ${{ secrets.GITHUB_TOKEN }}
#           publish_dir: ./out
#           branch: gh-pages
```
