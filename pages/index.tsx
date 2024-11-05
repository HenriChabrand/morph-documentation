import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "https://docs.runmorph.dev";
  }, []);

  // Optional: Show loading state while redirecting
  return <div>Redirecting to documentation...</div>;
}

// You can also add getServerSideProps for server-side redirect
export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://docs.runmorph.dev",
      permanent: true, // Set to true if this is a permanent redirect (301)
    },
  };
}
