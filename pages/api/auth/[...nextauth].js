import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: {
    strategy: "jwt",  // Using JWT strategy for session management
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,  // Google Client ID from environment variables
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // Google Client Secret from environment variables
    }),
  ],
  callbacks: {
    // signIn callback to handle custom JWT integration with backend
    async signIn({ account, profile }) {
      console.log("🚀 ~ signIn ~ account:", account)
      if (account.provider === "google") {

        console.log("ID :", account?.id_token)
        
        try {
          // Send the Google access token and ID token to your backend for JWT generation
          const response = await fetch(`https://stag.mntech.website/api/v1/user/auth/google`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              access_token: account?.id_token,  // Google access token
              // idToken: account.id_token, 
               // Google ID token
            }),
          });

          // Check if the response is okay (status 200-299)
          if (!response.ok) {
            console.error('Failed to log in with Google:', response.statusText);
            return false;
          }

          // Parse the response from the backend
          const data = await response.json();
          console.log("🚀 ~ signIn ~ data:", data)

          // Check if the backend returned a JWT token
          if (data?.token) {
            account.token = data.token;  // Attach the backend JWT to the account object
            return true;  // Continue the login process
          } else {
            console.error('No token returned from backend.');
            return false;  // Stop the login process
          }
        } catch (error) {
          console.error('Error during Google sign-in:', error);
          return false;  // Stop the login process due to an error
        }
      }

      // For non-Google providers, proceed with the default sign-in flow
      return true;
    },

    // jwt callback to attach the custom JWT from the backend to the token object
    async jwt({ token, account }) {
      if (account?.token) {
        token.jwt = account.token;  // Attach the JWT from the account to the token object
      }
      return token;
    },

    // session callback to make the JWT available in the session object
    async session({ session, token }) {
      session.jwt = token.jwt;  // Attach the custom JWT to the session object
      return session;
    },
  },

  // Secret for signing and encrypting JWT tokens (set this securely in production)
  secret: process.env.NEXTAUTH_SECRET,

  // Cookies configuration (secure cookies only in production)
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,  // Cookies are accessible only via HTTP (not client-side JavaScript)
        sameSite: "lax",  // Cookies sent only on same-site requests to help mitigate CSRF attacks
        path: "/",  // Cookie path
        secure: process.env.NODE_ENV === "production",  // Cookies are secure in production (sent only over HTTPS)
      },
    },
  },

  // Debug mode (optional, enable in development for detailed logging)
  debug: process.env.NODE_ENV === "development",
});
