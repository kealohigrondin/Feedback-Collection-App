# Feedback Collection App using React, Express, and MongoDB

## Description

React app powered by express backend that connects to a MongoDB Atlas Collection. The app allows a user to purchase credits which allows them to send out a certain number of email blasts to collect feedback from users. After sending email campaign, user can view statistics about their campaign (feedback provided by surveyees, response rate, etc.). This is basically supposed to be a pseudo/dumbed down version of SurveyMonkey

# React tools used:

react-final-form

# Express tools used:

- mongoose
- passport (and passport for google oauth2.0)
- nodemon

# How do I get this running?

## Server (express app):

1. Clone repo
2. In the terminal, run `npm install` while in the /server folder
3. Create a config folder in /server
4. Inside /server/config, create a file called 'keys.js' (also add this file to .gitignore)
5. In keys.js, export an object like this with your own values:
   `module.exports = { googleClientID: "google client ID", googleClientSecret: "google client secret", mongoURI: "mongoDB uri" }`
6. In google developer console, create a new project and within it, a new OAuth consent screen with EXTERNAL user type
7. After creating the Oauth consent screen, go to the 'Credentials' tab and create a new credential with type 'OAuth client ID'
8. Add http://localhost:5000 as an authorized js origin
9. Add http://localhost:5000/auth/google/callback as the authorized redirect uri
10. Save and copy the clientID and clientSecret into keys.js
11. Create a MongoDB Atlas account at https://www.mongodb.com/atlas/database
12. Create a new project then database/cluster (choose free tier and your closest region) and name it. Then create a username/PW and write it down. Connect with 'my local environment' with IP 0.0.0.0/0
13. After creating a cluster, click 'connect' and 'connect with your application'
14. Copy the connection string 'mongodb+srv://...' uri into keys.js with key 'mongoURI' (see above)
15. In the mongoURI, add your actual mongoDB password
16. In mongoURI, add a collection name of 'feedback-collection-db' after '.mongodb.net/' and before the '?retryWrites=true'
17. Go to dashboard.stripe.com and create an account. After, navigate to dashboard.stripe.com/account/apikeys and copy the publishable key and secret key to notepad. Add these values to both config files as stripePublishableKey and stripeSecretKey. For prod, have thir values be process.env.{STRIPE_SECRET_KEY or STRIPE_PUBLISHABLE_KEY, respectively}
19. Run the node project with `npm run dev`

## Client (react app)

1. run `npm install` while inside the client folder
12. Update .env.development and .env.production with your own stripe publishable key values
