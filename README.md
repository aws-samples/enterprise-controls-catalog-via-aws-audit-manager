# Audit Manager Blog

## Prerequisite

Please make sure the following software packages are installed in your environment before the deployment:

-   Node.js v12 or above (https://nodejs.org)
-   AWS CLI version 2 (https://docs.aws.amazon.com/cli/latest/userguide/welcome-versions.html)
-   jq (https://stedolan.github.io/jq/)
-   git (https://git-scm.com/)

## Deployment

Before deployment, please make sure that the correct AWS credentials are configured in your terminal session. It can be either in the environment variables or in `~/.aws`. More details, please refer to [Configuring the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html).

When ready, clone this report, then use the following command

```
cd audit-manager-blog

./deploy.sh
```


## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

