import WorkshopCard from "../../components/WorkshopCard";

function WorkshopList() {
  return (
    <div>
    <h1 className=" ms-10 font-extrabold text-center text-2xl md:text-[3vw] tracking-wider mb-4">Workshops</h1>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        <WorkshopCard
          videoLink={
            "https://www.youtube.com/watch?v=XO8wew38VM8&list=RDCLAK5uy_mVSKzMAitNM5HAWDtCLkeRq8oMcJk1Xiw&index=13"
          }
        />
        <WorkshopCard
          image={
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          }
          videoLink={
            "https://www.youtube.com/watch?v=XO8wew38VM8&list=RDCLAK5uy_mVSKzMAitNM5HAWDtCLkeRq8oMcJk1Xiw&index=13"
          }
        />
        <WorkshopCard
          image={
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          }
          videoLink={
            "https://www.youtube.com/watch?v=XO8wew38VM8&list=RDCLAK5uy_mVSKzMAitNM5HAWDtCLkeRq8oMcJk1Xiw&index=13"
          }
        />
        <WorkshopCard
          image={
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          }
          videoLink={
            "https://www.youtube.com/watch?v=XO8wew38VM8&list=RDCLAK5uy_mVSKzMAitNM5HAWDtCLkeRq8oMcJk1Xiw&index=13"
          }
        />

        <WorkshopCard
          image={
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          }
          videoLink={
            "https://www.youtube.com/watch?v=XO8wew38VM8&list=RDCLAK5uy_mVSKzMAitNM5HAWDtCLkeRq8oMcJk1Xiw&index=13"
          }
        />
        <WorkshopCard
          image={
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          }
          videoLink={
            "https://www.youtube.com/watch?v=XO8wew38VM8&list=RDCLAK5uy_mVSKzMAitNM5HAWDtCLkeRq8oMcJk1Xiw&index=13"
          }
        />
        <WorkshopCard
          image={
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          }
          videoLink={
            "https://www.youtube.com/watch?v=XO8wew38VM8&list=RDCLAK5uy_mVSKzMAitNM5HAWDtCLkeRq8oMcJk1Xiw&index=13"
          }
        />
      </div>
    </div>
  );
}

export default WorkshopList;
