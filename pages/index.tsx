import Link from "next/link";
import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="flex-col justify-items-center">
      <h1 className="text-gray-900 font-sans text-6xl my-10">
        Hi 👋 I'm Elizabeth Allan
      </h1>
    </div>
  </Layout>
);

export default IndexPage;
