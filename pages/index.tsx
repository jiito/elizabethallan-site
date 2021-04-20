// import Image from "next/image";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="flex flex-row justify-evenly ">
      <div className="flex flex-col">
        <div className="flex flex-row justify-items-start">
          {/* <div className="self-start">
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
          </div> */}
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
            <p className="my-4">
              Allan’s application of critical and poststructural discourse
              perspectives to policy is the focus of numerous publications
              including her 2003 article in the Harvard Educational Review which
              was awarded the Outstanding Publication Award by the American
              Educational Research Association’s Division J. Her scholarship has
              also appeared in the The Journal of Higher Education, The Review
              of Higher Education, Innovative Higher Education, and The
              International Journal of Adolescent Medicine and Health.
            </p>
            <p className="my-4">
              Allan was the Principal Investigator for the National Study of
              Student Hazing and is currently directing the national Hazing
              Prevention Consortium – a research-to-practice initiative designed
              to contribute to an evidence base for hazing prevention. She has
              presented research about hazing for the U.S. Senate HELP Committee
              (July, 2016) and at national conferences, institutes, and
              workshops. Dr. Allan’s comments and research have informed
              hundreds of news articles about hazing for numerous outlets
              including the Associated Press, The Chronicle of Higher
              Education,The New York Times, USA Today, National Public Radio,
              PBS, CNN, CBS, and others.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
