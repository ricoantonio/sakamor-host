import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { onLogin } from "../../../helper";
const options = {
  providers: [
    Providers.Credentials({
      name: "Kalbe Account",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        let userData = {};
        const loginData = {
          username: credentials.username,
          password: credentials.password,
        };
        try {
          return onLogin(loginData).then((data) => {
            if (userData.status == 404) {
              return null;
            } else {
              return data;
            }
            // const user = userData;
            // if (!user.message) {
            //   return user;
            // } else {
            //   return null;
            // }
          });
        } catch (e) {
          throw new Error("There was an error on user authentication");
        }
      },
    }),
  ],
  callbacks: {
    async session(session, token) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.accessToken = user._id;
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: "/",
    error: "/",
  },
  /* session: { 
    jwt: true,
  },
  jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
    secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',    
  }  */
};

export default (req, res) => NextAuth(req, res, options);
