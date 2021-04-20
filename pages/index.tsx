import Image from "next/image";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Elizabeth Allan, Ph.D.">
    <div className="flex flex-row justify-evenly ">
      <div className="flex flex-col">
        <div className="flex flex-row justify-items-start">
          <div className="self-start">
            <Image
              src="/MAINE_crest_4c.png"
              alt="mainelogo"
              width="64"
              height="64"
            />
          </div>
          <div className="self-start">
            <Image
              src="/stop-hazing.png"
              alt="mainelogo"
              width="64"
              height="64"
            />
          </div>
          <div className="flex flex-col max-w-2xl mt-4 font-serif ">
            <p className="my-4 font-thin ">
              Elizabeth Allan is professor of higher education at the University
              of Maine College of Education and Human Development. Her research
              focus on campus cultures and climates includes studies on
              classroom teaching, campus diversity, equity, as well as student
              hazing and its prevention. She is the author of two books,
              co-editor of a third, and has authored or co-authored more than 40
              research-based articles and book chapters.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
