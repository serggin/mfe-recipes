# mfe-recipes

## Create project scaffold

$ npx create-nx-workspace@latest mfe-recipes --preset=react-monorepo
✔ Application name · mfe-recipes
✔ Which bundler would you like to use? · webpack
✔ Test runner to use for end to end (E2E) tests · none
✔ Default stylesheet format · css
✔ Which CI provider would you like to use? · skip
✔ Would you like remote caching to make your build faster? · skip

$ nx g @nx/react:host shell --directory=apps/shell --remotes=remote1,remote2
✔ Which stylesheet format would you like to use? · css
✔ Which E2E test runner would you like to use? · none
✔ What should be the project name and where should it be generated? · shell @ apps/shell

### Run tests
$ nx serve shell
