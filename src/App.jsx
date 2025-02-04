import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import image1 from "./assets/images/img1.webp";
import image2 from "./assets/images/img2.webp";
import desertImage from "./assets/images/desertImage.webp";

const App = () => {
  return (
    <div>
      <Header />
      <main className="max-w-[2000px] mx-auto px-4 md:px-6">
        <div className="max-w-5xl w-full mx-auto p-8">

          <div className="flex items-center text-[#6C757D] text-sm mb-4">
            <span>29.Jun.2021</span>
            <div className="w-[15px] h-[1px] bg-[#E5E5E5] mx-2"></div>
            <span>8 min</span>
            <div className="w-[15px] h-[1px] bg-[#E5E5E5] mx-2"></div>
            <span className="font-bold text-[#212529]">By: Peter Roward</span>
          </div>


          <blockquote className="text-[#212529] text-[25px] font-bold leading-[40px] my-8">
            The purpose of our lives is to be <br /> happy.
          </blockquote>

          <p className="text-[#6C757D] text-[14px] leading-[25px] font-normal font-[Poppins]">
            Quickly monetize synergistic portals via efficient e-commerce. Phosfluorescently reinvent frictionless
            intellectual capital vis-a-vis an expanded array of niches. Efficiently provide access to interactive scenarios
            vis-a-vis bleeding-edge value. Energistically maximize premium meta-services and multifunctional collaboration
            and idea-sharing. Dramatically unleash front-end value after out-of-the-box opportunities. Energistically streamline magnetic
            action items after global markets. Collaboratively scale backward-compatible leadership skills and 24/7 best
            practices. Objectively exploit emerging methodologies vis-a-vis functionalized ideas.
            Energistically reconceptualize out-of-the-box innovation vis-a-vis cooperative methods of empowerment. Uniquely
            foster revolutionary value whereas accurate communities.

          </p>

          <p className="text-[#6C757D] text-[14px] leading-[25px] font-normal font-[Poppins] mt-4">
            Conveniently engineer robust experiences after performance-based initiatives.Credibly communicate strategic technology whereas turnkey functionalities. Professionally re-engineer magnetic
            markets for highly efficient functionalities. Efficiently fabricate user friendly opportunities for
            backward-compatible experiences. Competently scale team building relationships through real-time solutions.

          </p>


          <p className="text-[#6C757D] text-[14px] leading-[25px] font-normal font-[Poppins] mt-4">
            Interactively productivate cross-platform vortals through tactical results. Interactively underwhelm efficient
            alignments with enabled materials. Rapidiously leverage existing superior technology via fully researched
            e-commerce.
            Efficiently whiteboard principle-centered portals vis-a-vis magnetic solutions. Conveniently network ethical
            e-markets with emerging web services.
          </p>

        </div>

        <div className="p-8 w-[80%] mx-auto">
          <img src={desertImage} alt="Desert Landscape" className="rounded-lg shadow-md object-cover w-full h-auto" loading="lazy" />
        </div>

        <div className="max-w-5xl w-full mx-auto p-8">
          <blockquote className="text-[#212529] text-[25px] font-bold leading-[40px] my-8">
            Many of life’s failures are people who did not<br />
            realize how close they were to success when<br /> they gave up.
          </blockquote>

          <p className="text-[#6C757D] text-[14px] leading-[25px] font-normal font-[Poppins] mt-4">
            Quickly monetize synergistic portals via efficient e-commerce.
            Phosfluorescently reinvent frictionless intellectual capital vis-a-vis an expanded array of niches.
            Efficiently provide access to interactive scenarios vis-a-vis bleeding-edge value. Energistically maximize
            premium meta-services and multifunctional collaboration and idea-sharing. Dramatically unleash front-end
            value after out-of-the-box opportunities. Energistically streamline magnetic action items after global markets.
            Collaboratively scale backward-compatible leadership skills and 24/7 best practices. Objectively exploit
            emerging methodologies vis-a-vis functionalized ideas. Energistically reconceptualize out-of-the-box
            innovation vis-a-vis cooperative methods of empowerment. Uniquely foster revolutionary value whereas
            accurate communities.
          </p>

          <p className="text-[#6C757D] text-[14px] leading-[25px] font-normal font-[Poppins] mt-4">
            Conveniently engineer robust experiences after performance based initiatives.
            Credibly communicate strategic technology whereas turnkey functionalities. Professionally re-engineer
            magnetic markets for highly efficient functionalities. Efficiently fabricate user friendly opportunities
            for backward-compatible experiences.Competently scale team building relationships through real-time solutions.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-8 w-[80%] mx-auto gap-4 my-1">
          <img src={image1} alt="Nature 1" className="rounded-lg shadow-md object-cover w-full h-auto" loading="lazy" />
          <img src={image2} alt="Nature 2" className="rounded-lg shadow-md object-cover w-full h-auto" loading="lazy" />
        </div>

        <div className="max-w-5xl w-full mx-auto p-8">
          <p className="text-[#6C757D] text-[14px] leading-[25px] font-normal font-[Poppins] mt-4">
            Quickly monetize synergistic portals via efficient e-commerce. Phosfluorescently reinvent frictionless
            intellectual capital vis-a-vis an expanded array of niches. Efficiently provide access to interactive
            scenarios vis-a-vis bleeding-edge value. Energistically maximize premium meta-services and multifunctional
            collaboration and idea-sharing. Dramatically unleash front-end value after out-of-the-box opportunities.
            Energistically streamline magnetic action items after global markets. Collaboratively scale backward-compatible
            leadership skills and 24/7 best practices. Objectively exploit emerging methodologies vis-a-vis functionalized
            ideas.Energistically reconceptualize out-of-the-box innovation vis-a-vis cooperative methods of empowerment.
          </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
