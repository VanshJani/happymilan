import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
     
      // if (account.provider === "google") {
      //   // After Google sign-in, send the Google account token to your backend to get your JWT
      //   const response = await fetch(`${process.env.BACKEND_API_URL}/login/google`, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       accessToken: account.access_token, // Google access token
      //       idToken: account.id_token, // Google ID token
      //     })
      //   });

      //   const data = await response.json();

      //   // If the backend returns a JWT, store it in the session
      //   if (data?.token) {
      //     account.token = data.token;
      //     return true;
      //   }

      //   return false;
      // }

      return true;
    },
    async jwt({ token, account }) {
      // Attach the custom JWT from your backend to the token
      if (account?.token) {
        token.jwt = account.token;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the custom JWT to the session, so you can use it in the frontend
      session.jwt = token.jwt;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
