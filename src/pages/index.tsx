import { NextPage } from "next";
import path from "path";
import fs from 'fs';
import { ClothesList } from "views/ClothesList/ClothesList";
import { IClothes } from "models/Clothes.model";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'clothes.json');
  
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return {
    props: {
      data
    }
  };
}

const HomePage: NextPage<{data: IClothes[]}> = ({data}) => {  
  return <ClothesList clothes={data}/>;
};

export default HomePage;
