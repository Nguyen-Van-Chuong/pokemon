import { useEffect, useState } from "react";
import { Detail } from "../interface";

interface Props {
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
  abilities:
    | {
        name: string;
        abilities: string;
      }[]
    | undefined;

  name: string;
  id: number;
  image: string;
}

const PokemonList: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, id, image, abilities, viewDetail, setDetail } = props;
  const [isSelected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(id === viewDetail?.id);

    return () => {};
  }, [viewDetail]);
  const CloseCollection = () => {
    setDetail({
      id: 0,
      isOpened: false,
    });
  };

  return (
    <div>
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={CloseCollection}>
              X
            </p>
            <p className="detail-info">
              <img src={image} alt="" className="detail-img" />
              <div className="detail-name">{name}</div>
            </p>
            <div className="detail-skill">
              <p className="detail-ability">
                Abilities:{" "}
                {abilities?.map((ab: any) => {
                  return <div className="">{ab.ability.name}</div>;
                })}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt="" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
