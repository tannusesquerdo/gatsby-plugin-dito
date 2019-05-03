# gatsby-plugin-dito

A Gatsby plugin to easily add [Dito JS snippet](http://developers.dito.com.br/docs/javascript-sdk) to your site.

## Install

-   NPM: `$ yarn add gatsby-plugin-dito`
-   YARN: `$ npm install --save gatsby-plugin-dito`

## How to use

### Setup

In your gatsby-config.js file:

```javascript
plugins: [
    {
        resolve: `gatsby-plugin-dito`,
        options: {
            // your dito api key
            // required; non-empty string
            apiKey: `DITO_API_KEY`
        }
    }
];
```

### Track Events

If you want to track events, you simply invoke Dito as normal — (`window.dito.track({...})` — and you should see the events within your Dito Dashboard! For example, if you wanted to track events on a click, it may look something like this:

```javascript
class IndexPage extends React.Component {
    ...
    _handleClick() {
        window.dito.track({
            action: 'track-action-name',
            data: {
              userId: user.id,
              gender: 'male',
              age: 33
            }
        });
    }
    render() {
        return (
            <p>
                <Link onClick={this._handleClick} to="/">
                    Click here
                </Link>{" "}
                to see a track event
            </p>
        );
    }
}
```
