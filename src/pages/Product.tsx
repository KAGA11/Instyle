import ClothCard from '@components/ClothCard';
import FabricCard from '@components/FabricCard';
import clothes from "../assets/clothes/clothes";
import fabric from '../assets/fabric/fabric';


function Product() {

  const fabricDescription = `
    100%cashmere
  `;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-5">Product</h1>
      <FabricCard
        imageUrl={fabric.f1}
        description={fabricDescription}
      />
      <FabricCard
        imageUrl={fabric.f2}
        description={fabricDescription}
      />

      <div className="mb-5 flex justify-center gap-10 flex-wrap">
        <ClothCard
          imageUrl={clothes.c1}
          title="Cloth1"
        />
         <ClothCard
          imageUrl={clothes.c1}
          title="Cloth1"
        />
        <ClothCard
          imageUrl={clothes.c1}
          title="Cloth1"
        />
        <ClothCard
          imageUrl={clothes.c1}
          title="Cloth1"
        />
      </div>
    </div>
  )
}

export default Product