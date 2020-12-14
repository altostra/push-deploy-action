![altostra-integration](./resources/img/github-actions-ci-cd-altostra.png)
## About

GitHub Action to push and deploy Altostra images.
This action requires the [login-action](https://github.com/altostra/login-action).

**See also**
* [login-action](https://github.com/altostra/login-action)

## Usage

### Inputs
Following inputs can be used as step.with keys

| Name  | Type  | Required | Description  |
|:-:|:-:|:-:|:-:|
| env-name | string | Yes |  The environment to which to deploy |
| image-name | string | No |  Optional. The image name (i.e: 1.0.0, v2.4.1, alpha, dev, test, ...) |
| instance-name | string | Yes |  TThe instance name to deploy |

## Example usage
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A basic Altostra job
    steps:
    - uses: actions/checkout@v2
    - id: Login
      uses: altostra/login-action@v1
      with:
        api-token: "${{ secrets.ALTO_API_TOKEN }}"
    - id: Push-Deploy
      uses: altostra/push-deploy-action@v1-b
      with:
        env-name: Daylong
        instance-name: githubTest
```