import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 15 * 60, // 15 mins
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
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
        // console.log(JSON.stringify(data));

        // If no error and we have user data, return it
        if (res.ok && data) {
          return data;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(user);
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        // token.accessToken = account.access_token;
        token.accessToken = user.accessToken;
        token.firstname = user.user.firstname;
        token.lastname = user.user.lastname;
        token.email = user.user.email;
        token.school = user.user.school;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken as string;
      session.user.firstname = token.firstname as string;
      session.user.lastname = token.lastname as string;
      session.user.email = token.email as string;
      session.user.school = token.school as string;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
};
