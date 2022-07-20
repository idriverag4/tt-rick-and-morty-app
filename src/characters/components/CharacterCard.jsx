import { Link } from "react-router-dom";

export const CharacterCard = ( {id, name, image,  gender, status} ) => {
    return (
        <div className="col">
            <div className="card animate__animated animate__fadeIn">
                <div className="row no-gutters">

                    <div className="col-6 ">
                        <img src={image} className="card-img" alt={name} width="200" height="200" />
                    </div>

                    <div className="col-6">
                        <div className="card-body">

                            <h5 className="card-title">{name}</h5>

                            <p className="card-text"> Gender: {gender}</p>
                            <p className="card-text"> Status: {status}</p>

                            <Link to={`/character/${id}`} >Más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
