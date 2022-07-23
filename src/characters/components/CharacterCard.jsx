import { Link } from "react-router-dom";

export const CharacterCard = ( {id, name, image,  gender, status, onSetFavorite} ) => {  
        
    let favorite= {
        id,  
        name,
        image,
        gender,
        status,
    };    

    const onClickFavorite = (e) => {
         e.preventDefault();
         onSetFavorite(favorite);
    }   

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
                            
                            <Link className="card-link" to={`/character/${id}`} >More...</Link>
                            <button className="btn btn-link card-link" onClick={onClickFavorite}>Favorite</button>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
