export default function Welcome() {
  return (
    <>
      <h1>Welcome to the Feedback Collection App</h1>
      <div className="ui segment">
        <h3>What is this?</h3>
        <div>
          <p>
            The feedback collection app is a react/express web app built while
            following Stephen Grider's course on Udemy:
          </p>
          <a href="https://www.udemy.com/course/node-with-react-fullstack-web-development/">
            Node with React: Fullstack Web Development
          </a>
          <br />
          <br />
          <p>
            On this site, once signed in via google OAuth2.0, you can send mass
            emails (surveys) for the purpose of collecting feedback. In the
            current version of the app, it is currently set up for only
            gathering feedback for yes/no questions. Future iterations will have
            more robust survey-creation features. Once a survey is sent, you can
            view the responses to the survey on the dashboard.
          </p>
          <p>The codebase behind the app can be found here:</p>
          <a href="https://github.com/kealohigrondin/Feedback-Collection-App">
            <i className="ui icon github" />
            Feedback Collection App
          </a>
        </div>
      </div>
      <div className="ui segment">
        <h3>What did I learn?</h3>
        <div>
          <ul>
            <li>
              Learn the architectural considerations of building a full stack
              app
            </li>
            <li>
              Connect a front-end Create-React-App server to a NodeJS/Express
              backend
            </li>
            <li>
              Build reusable user inputs with Redux Final Form, complete with
              navigation
            </li>
            <li>
              Communicate data from your Mongo database to your React
              application
            </li>
            <li>
              Understand how to route user requests on the front end with React
              Router v6 and on the backend with Express
            </li>
            <li>
              Handle credit cards and receive payments from your users with
              Stripe
            </li>
            <li>Engage your users with automated emails</li>
            <li>
              Enhance authentication flows in your app with Google OAuth
              authentication
            </li>
            <li>
              Separate production and development resources with advanced API
              key handling techniques
            </li>
          </ul>
        </div>
      </div>
      <div className="ui segment">
        <h3>Who made this?</h3>
        <div>
          <p>Kealohi Grondin is the author of this site.</p>
          <a
            href="https://github.com/kealohigrondin/"
            target="_blank noreferrer"
          >
            <i className="ui icon github big" />
          </a>
          <a href="https://www.linkedin.com/in/jacobkealohigrondin/">
            <i className="ui icon linkedin big" />
          </a>
          <br />
          <br />
          <p>P.S. He's also looking for a job</p>
        </div>
      </div>
      <div className="ui segment">
        <h3>What technologies were used?</h3>
        <div className="ui stackable three column grid">
          <div className="column">
            <h4>Front End:</h4>
            <ul>
              <li>axios</li>
              <li>final form</li>
              <li>http-proxy-middleware</li>
              <li>react (v18)</li>
              <li>react-router (v6)</li>
              <li>react-stripe-checkout</li>
              <li>redux</li>
              <li>redux-thunk</li>
            </ul>
          </div>
          <div className="column">
            <h4>Back End: </h4>
            <ul>
              <li>body-parser</li>
              <li>express</li>
              <li>lodash</li>
              <li>mongoose</li>
              <li>passport</li>
              <li>passport-google-oauth20</li>
              <li>path-parser</li>
              <li>sendgrid</li>
              <li>stripe</li>
            </ul>
          </div>
          <div className="column">
            <h4>Cloud, CI/CD, and DB:</h4>
            <ul>
              <li>Azure App Services</li>
              <li>Github Actions</li>
              <li>MongoDB Atlas</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
