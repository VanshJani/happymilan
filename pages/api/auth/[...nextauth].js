import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  session: {
    strategy: 'jwt' // Using JWT strategy for session management
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Google Client ID from environment variables
      clientSecret: process.env.GOOGLE_CLIENT_SECRET // Google Client Secret from environment variables
    })
  ],
  callbacks: {
    // signIn callback to handle custom JWT integration with backend
    async signIn ({ account, profile }) {
      console.log('🚀 ~ signIn ~ account:', account)
      if (account.provider === 'google') {
        if (!account?.access_token) {
          // Use access_token instead of id_token
          console.error('Google access token is missing')
          return false
        }

       
      }

      return true // Proceed with default sign-in for other providers
    },
    // jwt callback to attach the custom JWT from the backend to the token object
    async jwt ({ token, account }) {
      if (account?.token) {
        token.jwt = account.token // Attach the JWT from the account to the token object
      }
      return token
    },

    // session callback to make the JWT available in the session object
    async session ({ session, token }) {
      session.jwt = token.jwt // Attach the custom JWT to the session object
      return session
    }
  },

  // Secret for signing and encrypting JWT tokens (set this securely in production)
  secret: process.env.NEXTAUTH_SECRET,

  // Cookies configuration (secure cookies only in production)
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true, // Cookies are accessible only via HTTP (not client-side JavaScript)
        sameSite: 'lax', // Cookies sent only on same-site requests to help mitigate CSRF attacks
        path: '/', // Cookie path
        secure: process.env.NODE_ENV === 'production' // Cookies are secure in production (sent only over HTTPS)
      }
    }
  },

  // Debug mode (optional, enable in development for detailed logging)
  debug: process.env.NODE_ENV === 'development'
})
