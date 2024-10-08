
## Version 3.0.0 (2024-10-02)


* Updated @commercetools/frontend-sdk dependency to 1.13.1
* Added skipQueue and customHeaderValue options to SDK integration actions
* Aligned getOrder action by passing orderId as query parameter

## Version 2.0.0 (2024-05-28)


* refactor: fixed formatting with prettier
* feat: Added skipQueue and customHeaderValue options to SDK integration actions
* feat: Updated @commercetools/frontend-sdk dependency to 1.12.1
* fix: align getOrder action by passing orderId as query parameter
* fix: query return types
* refactor: modify project library paths on missing files
* Added project level .gitignore files
* Updated @commercetools/frontend-sdk dependency and replaced newly deprecated methods

## Version 1.4.3 (2023-12-04)


* Removed released node_modules


## Version 1.4.1 (2023-12-04)


* Renamed types import, added order query action
* Added CI test for building in non-strict mode
* Added support for non-strict mode
* Replaced Extension terminology with Integration
* Updated version
* Export types as type
* Replaced extension with integration

## Version 1.3.0 (2023-06-22)

* Updated account login and logout methods to support remember me cookie on SSR
* Updated @commercetools/frontend-sdk peer dependency to 1.8.0

## Version 1.2.6 (2023-04-25)

* Added serverOptions to all actions for SSR support

## Version 1.2.5 (2023-04-24)

* fix: support for server session handling on queryCategories

## Version 1.2.4 (2023-04-19)

* Replaced esbuild and tsc for tsup build

## Version 1.2.3 (2023-04-18)

* fix: updated @commercetools/frontend-domain-types dependency for product query fix

## Version 1.2.2 (2023-03-29)

* fix: same error in previous release process

## Version 1.2.1 (2023-03-29)

* fix: error in previous release process

## Version 1.2.0 (2023-03-29)

* Cleaned up @commercetools/frontend-domain-types type imports
* Updated @commercetools/frontend-domain-types dependency

## Version 1.1.4 (2023-02-28)

* fix: error in previous release

## Version 1.1.3 (2023-02-28)

* fix: product.query action accept query instead of payload
* refactor: product payloads moved to queries

## Version 1.1.2 (2023-02-24)

* Updated @commercetools/frontend-sdk dependency

## Version 1.1.1 (2023-02-22)

* fix: updated @commercetools/frontend-sdk for multitenant env varaible fix

## Version 1.1.0 (2023-02-22)

* feat: updated @commercetools/frontend-sdk to latest to support multitenancy projects

## Version 1.0.3 (2023-01-19)

* Updated perttier config and ran fix
* Removed trailingComma:all
* Added editorconfig for github to render tabs properly

## Version 1.0.1 (2023-01-18)

* Fix up prettier config to better suit the project

## Version 1.0.0 (2023-01-16)

* Full release out of alpha/beta
* Updated @commercetools/frontend-domain-types and @commercetools/frontend-sdk to first major release

## Version 5.0.4-alpha.0 (2023-01-06)

* Updated version

## Version 5.0.3-alpha.0 (2023-01-06)

* Updated version

## Version 5.0.2-alpha.0 (2023-01-06)

* Removed yarn install from prepublishOnly

## Version 5.0.1-alpha.0 (2023-01-06)

* Updated version

## Version 5.0.0-alpha.0 (2023-01-06)

* Updated to the latest major version of @commercetools/frontend-sdk
* Added type for ComposableCommerceEvents
* Added tsconfig.dev.json to .npmignore

## Version 3.0.6-alpha.0 (2023-01-04)

* Fixed typo in .npmignore

## Version 3.0.5-alpha.0 (2023-01-04)

* Added .npmignore to optimise package size

## Version 3.0.4-alpha.0 (2022-12-20)

* Updated @commercetools/frontend-sdk version dependency
* Replaced webpack build with esbuild and tsc

## Version 3.0.3-alpha.0 (2022-12-19)

* Direct specification of action return types
* Changed esbuild and tsc build to webpack

## Version 3.0.2-alpha.0 (2022-12-19)

* (fix): created type for GetAccountAction return

## Version 3.0.1-alpha.0 (2022-12-14)

* fix: updated and implemented @commercetools/frontend-sdk revision

## Version 3.0.0-alpha.0 (2022-12-14)

* Updated and integrated with latest major version of @commercetools/frontend-sdk

## Version 2.1.0-alpha.0 (2022-12-13)

* Updated @commercetools/frontend-sdk
* Events triggered for all StandardEvents
* Updated return type of actions for better error handling
* Updated data type of action error event
* Check for action errors before firing events
* Updated return type of actions so cannot be void

## Version 2.0.0-alpha.0 (2022-12-06)

* Fixed major NPM deployment issue
* Fixed dependencies across packages

## Version 1.1.0-alpha.0 (2022-12-05)

* Updated actions to reflect possibility of error return
* Update getAccount to return backend result directly

## Version 1.0.10-alpha.0 (2022-12-05)

* Update getAccount to return backend result directly

## Version 1.0.9-alpha.0 (2022-11-30)

* Changed sdk core package name

## Version 1.0.8-alpha.0 (2022-11-30)

* Fixed typo in README.md

## Version 1.0.7-alpha.0 (2022-11-30)

* Updated to reflect changes to core SDK event engine

## Version 1.0.6-alpha.0 (2022-11-30)

* Update domain types package
* Added README.md

## Version 1.0.5-alpha.0 (2022-11-29)

* (fix): moved @commercetools/frontend-domain-types to dependencies from peerDependencies

## Version 1.0.4-alpha.0 (2022-11-29)

* Initial release

## Version 1.0.3-alpha.0 (2022-11-29)

* Initial release

## Version 1.0.2-alpha.0 (2022-11-29)

* Initial release

## Version 1.0.1-alpha.0 (2022-11-29)

* Initial release

## Version 1.0.0-alpha.0 (2022-11-29)

* Initial release
