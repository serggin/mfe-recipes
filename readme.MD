# mfe-recipes

## Create project scaffold

$ npx create-nx-workspace@latest mfe-recipes --preset=react-monorepo
✔ Application name · mfe-recipes
✔ Which bundler would you like to use? · webpack
✔ Test runner to use for end to end (E2E) tests · none
✔ Default stylesheet format · css
✔ Which CI provider would you like to use? · skip
✔ Would you like remote caching to make your build faster? · skip

$ nx g @nx/react:host shell --directory=apps/shell --remotes=remote0,remote1,remote2
✔ Which stylesheet format would you like to use? · css
✔ Which E2E test runner would you like to use? · none
✔ What should be the project name and where should it be generated? · shell @ apps/shell


## Adding remote library
$ npx nx generate @nx/react:remote --name=ui --devServerPort=4203 --directory=apps/ui --host=shell --e2eTestRunner=none --projectNameAndRootFormat=as-provided --no-interactive

$ npx nx generate @nx/react:component --name=TopAppBar --directory=apps/ui/src/TopAppBar --fileName=TopAppBar --nameAndDirectoryFormat=as-provided --no-interactive

$ npx nx generate @nx/react:component --name=Header --directory=apps/ui/src/Header --fileName=Header --nameAndDirectoryFormat=as-provided --no-interactive

$ npx nx generate @nx/react:component --name=Text --directory=apps/ui/src/Text --fileName=Text --nameAndDirectoryFormat=as-provided --no-interactive
### Run tests
$ nx serve shell
