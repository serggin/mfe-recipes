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


## Adding remote libraries and components
$ npx nx generate @nx/react:remote --name=ui --devServerPort=4203 --directory=apps/ui --host=shell --e2eTestRunner=none --projectNameAndRootFormat=as-provided --no-interactive

$ npx nx generate @nx/react:component --name=TopAppBar --directory=apps/ui/src/TopAppBar --fileName=TopAppBar --nameAndDirectoryFormat=as-provided --no-interactive

$ npx nx generate @nx/react:component --name=Header --directory=apps/ui/src/Header --fileName=Header --nameAndDirectoryFormat=as-provided --no-interactive

$ npx nx generate @nx/react:component --name=Text --directory=apps/ui/src/Text --fileName=Text --nameAndDirectoryFormat=as-provided --no-interactive

## Make remote assets available in the shell

1. Assets from remote1 app move to src/assets/remote1 folder ("remote1" is the name of the remote app).
2. Create file proxy.conf.json at the root of the host app ("shell"):
```
[{
    "context": ["/assets/remote1"],
    "target": "http://localhost:4202",
    "secure": false
}]
```
Here 4202 is the port number from apps/remote1/projects.json: targets/serve
3. Add option to apps/shell/project.json: targets/serve/options:
```
"proxyConfig": "apps/shell/proxy.conf.json"
```

## State as a remote app

$ npx nx generate @nx/react:remote --name=store --devServerPort=4205 --directory=apps/store --host=shell --e2eTestRunner=none --projectNameAndRootFormat=as-provided --no-interactive

## Run tests
$ nx serve shell
