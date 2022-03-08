// https://mcdindia.com/wp-content/uploads/2020/11/mc-cursor-2.png
const Menu = () => {
  return (
    <section id="menu" className="mx-auto mt-7 flex h-screen w-4/5 flex-col">
      <nav>
        <ul className="ml-10 flex gap-3 p-4 font-bold ">
          <li className="after: border-r-8 p-2">
            <a href="">BURGERS & WRAPS</a>
          </li>
          <li className="after: border-r-8 p-2">
            <a href="">SNACKS & SIDES</a>
          </li>
          <li className="after: border-r-8 p-2">
            <a href="">DESERTS</a>
          </li>
          <li className="p-2">
            <a href="">BEVERAGES</a>
          </li>
        </ul>
      </nav>
      <div className="flex h-full">
        <div className="flex w-3/4 flex-col justify-around">
          <h2 className=" text-4xl font-extrabold ">McAloo Tikki Burger®</h2>
          <p className="text-xl font-bold text-orange-300">
            The one that never goes out of f(l)avour.
          </p>
          <p className="">
            A golden fried vegetarian patty prepared with peas, potato and
            infused with aromatic spices. Clubbed with sliced tomatoes, shredded
            red onion, and tangy tomato mayonnaise. Served in a warm toasted
            bun.
          </p>
          <p>Serving Size: 146 gm</p>
          <p>
            Allergen Warning! Contains: Gluten, Milk and/or Milk products,
            Soybean derivatives
          </p>
          <div>
            <div>Calories:398kCal</div>
            <div> Protein:15gm</div>
            <div> Fats:15gm</div>
            <div>Carbs:48gm</div>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center ">
          <img
            className="center"
            src="https://mcdindia.com/wp-content/uploads/2020/02/2.1-mcaloo-tikki-cheese.png"
            alt=""
          />
          <div className="absolute w-[40%]  text-center bg-white/[.6] rounded p-3 ">
            <h2 className=" font-semibold ">Ingredients </h2>
            <p>
              Regular bun crown, Tom-Mayo sauce, Sliced tomatoes, Shredded
              onion, Aloo tikki patty, Regular bun heel
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
