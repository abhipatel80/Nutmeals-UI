import React from "react";

const ProductNutrition = () => {
  return (
    <>
      <div className="nutrition flex justify-center items-center -mt-2.5">
        <fieldset className="lg:w-[42vw] xl:w-[38vw] product-image product-scrollbar 2xl:h-[77.5vh] lg:h-[78.5vh] overflow-auto w-[95vw] border border-gray-300 bg-[#f5f5f5] rounded-2xl px-4 py-2 xs:py-4">
          <legend className="w-fit m-auto px-4 text-lg 2xl:text-xl uppercase">
            Nutritional Facts
          </legend>
          <div>
            <div className="flex justify-between items-center pb-1 -mt-2 border-b-[2.5px] border-b-[#F8A531]">
              <span className="text-lg 2xl:text-xl">Serving Size :</span>
              <div className="font-medium text-xl 2xl:text-2xl">100 g</div>
            </div>
            <div>
              <li className="font-medium pt-1.5 list-none">
                Amount per Serving
              </li>
              <div className="flex justify-between items-center border-b-[2.5px] border-b-[#F8A531]">
                <span className="text-[22px] 2xl:text-[24px]">Calories :</span>
                <div className="pt-[2px] font-medium text-2xl">570.7</div>
              </div>

              <div className="border-b border-black font-normal">
                <li className="ml-2 flex justify-end py-1">Daily Value (%)</li>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <li>Total Fat</li>
                  <li className="text-end ml-7">Saturated Fat</li>
                  <li className="text-end ml-7">Trans Fat</li>
                  <li>Cholestrol</li>
                  <li>Sodium</li>
                  <li>Total Carbohydrates</li>
                  <li className="text-end ml-7">Dietry Fiber</li>
                  <li className="text-end ml-7">Total Sugars</li>
                  <li className="text-end ml-7 italic">Added Sugars</li>
                  <div>Protein</div>
                </div>
                <div className="text-end flex flex-col">
                  <li className="flex justify-between gap-2">
                    <span className="value">49.9</span>{" "}
                    <span className="mg">mg</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>7.1</span> <span>g</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>0</span> <span>g</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>0</span> <span>mg</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>39.3</span> <span>mg</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>21.4</span> <span>g</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>7.1</span> <span>g</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>0</span> <span>g</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>3.6</span> <span>g</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>25</span> <span>g</span>
                  </li>
                </div>

                <div className="text-end flex flex-col">
                  <li>77 %</li>
                  <li>36 %</li>
                  <li>-</li>
                  <li>-</li>
                  <li>16 %</li>
                  <li>7 %</li>
                  <li>29 %</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                </div>
              </div>

              <div className="border-b-[2.5px] border-b-[#F8A531] my-1"></div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <li>Vitamin D</li>
                  <li>Calcium</li>
                  <li>Iron</li>
                  <li>Potassium</li>
                </div>
                <div className="text-end flex flex-col">
                  <li className="ml-[70px] 2xl:ml-[80px]">
                    00 <span className="ml-4">mg</span>
                  </li>
                  <li className="ml-[70px] 2xl:ml-[80px]">
                    00 <span className="ml-4">mg</span>
                  </li>
                  <li className="ml-[70px] 2xl:ml-[80px]">
                    00 <span className="ml-4">mg</span>
                  </li>
                  <li className="ml-[70px] 2xl:ml-[80px]">
                    00 <span className="ml-4">mg</span>
                  </li>
                </div>
                <div className="text-end flex flex-col">
                  <li className="flex justify-between gap-2">
                    <span>00</span> <span>%</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>00</span> <span>%</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>00</span> <span>%</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>00</span> <span>%</span>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default ProductNutrition;
