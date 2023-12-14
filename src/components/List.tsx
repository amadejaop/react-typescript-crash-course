import React from "react";

interface IProps {
    people: {
      name: string,
      img: string,
      age: number,
      note?: string
    }[]
  }

// List is of type React.FunctionalComponent and it contains props of IProps
const List: React.FC<IProps> = ({ people }) => {

    // The function returns an array of JSX Elements
    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
            <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.img} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
        });
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List