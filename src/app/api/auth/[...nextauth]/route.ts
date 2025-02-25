import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { AuthService } from "@/shared/services/auth.service";
import { LogsService } from "@/shared/services/logs.service";

const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "qR7KGtmMdYBY+kxh8OhgU8jHlb4a/iB2mZwZoL0He5k=",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt", // Ensure we're using JWT-based sessions
    maxAge: 30 * 60, // 30 minutes session timeout
  },
  callbacks: {
    async jwt({ token, user }) {
      // If user logs in for the first time
      if (user) {
        try {
          const formData = {
            email: user.email as string,
            username: user.name as string,
            image: user.image as string,
          };

          // Call AuthService to get role
          const { data } = await AuthService.login(formData);
          if (data) {
            token.role = data;
            token.loginTime = new Date().toISOString();

            // Log the login event (only on first login)
            await LogsService.create({
              event_type: "login-user",
              event_detail: `User login: ${user.email}`,
            });
          }
        } catch (error) {
          console.error("AuthService login error:", error);
        }
      }
      return token;
    },

    async session({ session, token }) {
      // Ensure session user includes role
      session.user = {
        ...session.user,
        role: token.role || "user",
        loginTime: token.loginTime || null,
      };
      return session;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
