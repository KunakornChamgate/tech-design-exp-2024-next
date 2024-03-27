export default function Dashboard() {
    return (
   <main className="p-4"> 
   <section className=" flex justify-between flex-row items-center">
   <img src="/arrow-left.svg"  />
   <h1  className="justify-self-center">Detail </h1>
   <img src="/Heart.svg" />
   {/* test */}
</section>
<div className="text-lg flex 
   flex-col items-center mt-6">
<img src="/Rectangle 1706.svg" />
</div>
<h2  className=" text-xl pl-4 pt-4 font-semibold">Cappucino </h2>
<h2  className=" text-xs text-gray-500 pl-4 pt-2 font-thin  ">with Chocolate</h2>
<section className=" flex pl-4 pt-4 flex-row items-center">
<img src="/Rating.svg" />
<h2  className=" pl-2">4.8 </h2>
<h2  className="text-gray-500 pl-2 text-sm font-thin">(230) </h2>
<div className="flex justify-between ">
    <img src="/bean.png" />
<img src="/milk.png" />
</div>
</section>
<h2  className="text-gray-500 pl-2 text-sm">_________________________________________________________________________________ </h2>
<h2  className="pl-4 pt-4 font-semibold ">Description </h2>
<h2  className="pl-4 pt-4 font-thin text-gray-500 ">A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml 
of espresso coffee and 85ml of fresh milk the fo..  </h2>
<h2  className="pl-4 pt-4 font-semibold ">Size </h2>
<section className=" flex justify-between flex-row items-center pl-10 pt-4">
<h2  className="  ">S </h2>
<h2  className=" ">M </h2>
<h2  className="">L </h2>
</section>
<h2  className=" pl-4 pt-6 font-thin text-gray-500 text-sm">Price </h2>
<h2  className=" pl-4 pt-1 font-semibold text-gray-500">$ 4.53 </h2>
<h2  className=" text-white- bg-gray-700 px-5 py-5 font-semibold text-gray-500 max-w-40 text-center mt-12">Buy Now </h2>


 </main>

 
 
 
    );
}