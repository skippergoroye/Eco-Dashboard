import { CommunityCard } from "../components";
import ListItem from "../components/ListItem";
import { Community } from "../constants";
import Globe from "../assets/globe.svg"

export default function Body() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-4 mx-auto max-w-[1440px] bg-gray-50">
      <div className="flex gap-4 sm:gap-10 border-b border-[#ACB2B0] cursor-pointer mb-4">
            <p>Problems</p>
            <p>Projects</p>
            <p>Ideas</p>
          </div> 
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 px-6 py-8 bg-gray-50 rounded-md shadow sm:px-10">
          {/* <div className="flex gap-4 sm:gap-10 border-b border-[#ACB2B0] cursor-pointer">
            <p>Problems</p>
            <p>Projects</p>
            <p>Ideas</p>
          </div> */}
          <div>
            {Community.map((com) => (
              <CommunityCard key={com.goal} {...com} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-2xl text-center p-4">
          <div className="flex flex-col items-center">
            <h1 className="w-[100px] text-center text-xl">
              Upgrade to <span className="font-bold">Partner</span>
            </h1>
            <p className="mt-6 text-[16px]">
              Purus viverra ac vulputate quam sociis pretium nulla nulla semper.{" "}
            </p>
            <div className="mt-6">
              <ListItem>Velit officia consequat duis enim</ListItem>
              <ListItem>Exercitation veniam consequat sunt</ListItem>
              <ListItem>consequat duis enim velit mollit.</ListItem>
            </div>
            <button className="mt-4 bg-[#1DB559] text-white px-2 py-2 rounded-lg">
              Upgrade Plan
            </button>
            <img src={Globe} alt="globe" />
          </div>
        </div>
      </div>
    </section>
  );
}
