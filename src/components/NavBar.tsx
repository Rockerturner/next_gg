import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import {
  FaTwitch,
  FaTiktok,
  FaGithub,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
// import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

// import { useTheme } from "next-themes";

export const NavBar = () => {
  const { data: sessionData } = useSession();
  // const { theme, setTheme } = useTheme(); //hydration issue.

  return (
    <main className="flex flex-col">
      <div className="h-flex-row flex w-screen items-center justify-between p-4">
        <div className="text-5xl font-extrabold tracking-tight dark:text-white">
          NEXT.<span className="text-[hsl(280,100%,70%)]">GG</span>
        </div>
        <div className="flex flex-row items-center justify-end gap-4">
          {/* <Button
            variant="secondary"
            className="rounded-md"
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
          </Button> */}
          {!sessionData ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Sign In</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-center text-3xl">
                    Sign In to NEXT.GG
                  </DialogTitle>
                </DialogHeader>
                <Button onClick={() => void signIn("github")}>
                  <FaGithub className="mr-2 h-6 w-6" />
                  Sign In with Github
                </Button>
                <Button>
                  <FaGoogle className="mr-2 h-6 w-6" /> Sign In with Google
                </Button>
                <Button>
                  <FaTwitter className="mr-2 h-6 w-6" /> Sign In with Twitter
                </Button>
                <Button>
                  <FaTwitch className="mr-2 h-6 w-6" /> Sign In with Twitch
                </Button>
                <Button>
                  <FaTiktok className="mr-2 h-6 w-6" /> Sign In with Tiktok
                </Button>
              </DialogContent>
            </Dialog>
          ) : (
            <Button variant="secondary" onClick={() => void signOut()}>
              Sign Out
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};
