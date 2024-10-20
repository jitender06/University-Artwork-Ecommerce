import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import bcrypt from 'bcryptjs';
import User from '../Models/user.model.js';
import dotenv from 'dotenv';
import { generateTokens } from '../Util/tokenUtils.js'; // Import the function


dotenv.config();

// Local Strategy (Email and Password)
passport.use(
    new LocalStrategy(
        { usernameField: 'email' },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ email });
                if (!user) return done(null, false, { message: 'Incorrect email.' });

                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) return done(null, false, { message: 'Incorrect password.' });

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

// Google OAuth Strategy
// config/passport.js

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:8000/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Check if the user exists based on googleId
                let user = await User.findOne({ googleId: profile.id });

                // If no user is found, check if the email already exists in the database
                if (!user && profile.emails && profile.emails.length > 0) {
                    user = await User.findOne({ email: profile.emails[0].value });
                }

                // If no user is found with googleId or email, create a new user
                if (!user) {
                    user = await User.create({
                        name: profile.displayName,
                        email: profile.emails[0]?.value || "", // Ensure email exists
                        googleId: profile.id,
                    });
                } else if (!user.googleId) {
                    // If user exists by email but without a googleId, update their googleId
                    user.googleId = profile.id;
                    await user.save();
                }

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);



// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: 'http://localhost:8000/auth/google/callback',
// },
// function (accessToken, refreshToken, profile, done) {
//     User.findOne({ googleId: profile.id }, function (err, user) {
//         if (err) return done(err);
//         if (!user) {
//             // Create a new user if one doesn't exist
//             const newUser = new User({
//                 googleId: profile.id,
//                 email: profile.emails[0].value,
//                 name: profile.displayName,
//                 // facebookId will be null
//             });
//             newUser.save((err) => {
//                 if (err) return done(err);
//                 return done(null, newUser);
//             });
//         } else {
//             // User found
//             return done(null, user);
//         }
//     });
// }));

// Facebook OAuth Strategy
// passport.use(
//     new FacebookStrategy(
//         {
//             clientID: 'FACEBOOK_CLIENT_ID',
//             clientSecret: 'FACEBOOK_CLIENT_SECRET',
//             callbackURL: '/auth/facebook/callback',
//             profileFields: ['id', 'displayName', 'email'],
//         },
//         async (accessToken, refreshToken, profile, done) => {
//             try {
//                 let user = await User.findOne({ facebookId: profile.id });

//                 if (!user) {
//                     user = await User.create({
//                         name: profile.displayName,
//                         email: profile.emails[0].value,
//                         facebookId: profile.id,
//                     });
//                 }
//                 return done(null, user);
//             } catch (error) {
//                 return done(error);
//             }
//         }
//     )
// );

// Serializing and Deserializing User
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});
