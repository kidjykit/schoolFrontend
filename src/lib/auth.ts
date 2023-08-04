import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "account",
      credentials: {
        email: {
          label: "Email",
          type: "Email",
          placeholder: "kidjydev@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "**********",
        },
      },
      async authorize(credentials) {
        const res = await fetch(
          "https://encouraging-tick-miniskirt.cyclic.app/login",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await res.json();

        // console.log(JSON.stringify(data.user));

        // If no error and we have user data, return it
        if (res.ok && data) {
          return data.user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // console.log(user);
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        // token.accessToken = account.access_token;
        token.firstname = user.firstname;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken;
      session.user.firstname = token.firstname;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
