import PlanTab from "../Components/Exercise/PlanTab";
import SaveTab from "../Components/Exercise/SaveTab";

const MyPlanPage = () => {
  return (
    <>
      <section>
        <div className="flex flex-col w-max-5xl justify-center items-center space-y-1.5 mt-3">
          <h1 className="[var(--font-oswald)] font-bold text-4xl">MY PLAN</h1>
          <p className="[var(--font-inter)] font-regular text-xl text-[#8A92A0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
      </section>
      {/* there will be another section here */}
      <section></section>
      <section className="mt-2.5">
        {/* Tab Section Starting from here */}
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box bg-[#12151c] border border-white/10 rounded-xl p-1 items-center max-w-5xl mx-auto">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-xs font-semibold [--tab-bg:#232936] checked:text-white"
            aria-label="Today's Plan"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6 w-max-5xl mx-auto">
            <PlanTab />
          </div>
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-xs font-semibold [--tab-bg:#232936] text-[#8A92A0]"
            aria-label="Save"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <SaveTab></SaveTab>
          </div>

          {/* Sort By option will go here (right side of the tab row) */}
          <div className="ml-auto flex items-center gap-2 pr-2 min-w-[160px] justify-end"></div>
        </div>
      </section>
    </>
  );
};

export default MyPlanPage;
