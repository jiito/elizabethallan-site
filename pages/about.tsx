import Layout from "../components/Layout";
import Image from "next/image";

const AboutPage = () => (
  <Layout title="About | Elizabeth Allan, Ph.D.">
    <div className="flex flex-col items-start ">
      <h1 className="text-xl">About</h1>
      <p className="mb-4 font-serif font-light ">
        Elizabeth J. Allan, Ph.D., is Professor and Program Coordinator of the
        Higher Education program at the University of Maine where she teaches
        for the master’s and doctoral programs. She was the Principal
        Investigator for the National Study of Student Hazing (2008) and
        currently leads StopHazing and the Hazing Prevention Consortium – a
        research-to-practice initiative designed to build an evidence base for
        campus hazing prevention. An experienced researcher, Allan’s scholarship
        focuses on campus cultures and climates including studies about campus
        diversity, equity, student hazing and its prevention in the context of
        higher education. She has authored two books and more than 50 scholarly
        articles and book chapters and her studies have been published in the
        Harvard Educational Review, the Journal of Higher Education, the Review
        of Higher Education, the International Journal of Adolescent Medicine
        and Health, and the Journal of Student Affairs Research and Practice.
        Allan has presented her research about hazing for the Department of
        Defense, the U.S. Senate HELP Committee, and at numerous national and
        international conferences and institutes. She is the recipient of the
        2021 Presidential Research and Creative Achievement Award at the
        University of Maine.
      </p>
    </div>
  </Layout>
);

export default AboutPage;
