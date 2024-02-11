import React from "react";
import sandImage from "./../../public/images/sand.jpg";

const HowWeWork = () => {
  return (
    <section
      id="how_we_work"
      className="py-12 bg-cover bg-no-repeat bg-center p-8"
      style={{ backgroundImage: `url(${sandImage.src})` }}
    >
      <div className="max-container">
        <h1 className="flex flexCenter bg-opacity-50 bg-white p-8 rounded-3xl text-black font-bold mb-4 lg:m-10 regular-24 xl:regular-40">
          How We Work
        </h1>
        <p className="flex flexCenter bg-opacity-50 bg-white p-8 rounded-3xl text-black mb-4 lg:m-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, minus.
          Natus iusto, alias nemo nobis exercitationem et, assumenda molestias
          illum sunt laudantium corrupti ut accusamus, debitis rem! Maxime,
          minima. Dolores! Quaerat culpa eos similique, illo, libero soluta quo
          ab nostrum non natus rem? Saepe sapiente debitis perferendis,
          distinctio voluptas facilis maiores harum culpa ea, illum dolores
          aliquam sunt voluptate. Qui! Voluptatibus, sit illo sunt doloribus
          iure nulla dolores, a enim consequatur obcaecati eveniet corrupti,
          tenetur iusto culpa adipisci facilis quos dignissimos temporibus
          numquam rerum ab fugiat accusantium? Quisquam, illum cum. Omnis minima
          tempore alias deleniti dignissimos velit numquam amet eveniet ratione
          assumenda, quia ea eligendi exercitationem tempora, eos dolores
          cumque, rerum officiis incidunt asperiores? Voluptatibus dolor odio
          saepe aut maxime! Debitis ea placeat id, iste, inventore repellendus
          veritatis vel fuga consequuntur ullam consequatur a enim quis
          laudantium alias iure libero tempore sapiente reprehenderit ratione
          quam quasi nemo laboriosam. Animi, corporis.
        </p>
        <p className="flex flexCenter bg-opacity-50 bg-white p-8 rounded-3xl text-black mb-4 lg:m-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, minus.
          Natus iusto, alias nemo nobis exercitationem et, assumenda molestias
          illum sunt laudantium corrupti ut accusamus, debitis rem! Maxime,
          minima. Dolores! Debitis ea placeat id, iste, inventore repellendus
          veritatis vel fuga consequuntur ullam consequatur a enim quis
          laudantium alias iure libero tempore sapiente reprehenderit ratione
          quam quasi nemo laboriosam. Animi, corporis.
        </p>
      </div>
    </section>
  );
};

export default HowWeWork;
