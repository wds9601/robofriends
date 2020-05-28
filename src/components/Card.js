import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> 
            <img src={`https://robohash.org/${id}?200x200`} alt="robot"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;


// // Destructured Props to make passing in the props into the JSX much cleaner, but can als destructure inside the function parameters, like above)
// const Card = (props) => {
//     const { name, email, id } = props;
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> 
//             <img src={`https://robohash.org/${id}?200x200`} alt="robot"></img>
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
// }

// // Most Basic Form of passing props, but not the cleanest (Can use "destructuring" like above)
// const Card = (props) => {
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> 
//             <img src={`https://robohash.org/${props.id}?200x200`} alt="robot"></img>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }