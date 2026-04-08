export default function Items({ name, isPacked }) {
    
    //return <li>{props.name}</li>;

//   if (isPacked) {
//     return <li>{name} ✅</li>;
//   }

//   return <li>{name}</li>;

    // return (
    //     <li>
    //         {isPacked ? name + " ✅" : name}
    //     </li>
    // );

    return (
        <li>
            {isPacked ? (
                <del>{name} ✅</del>
            ) : (
                name
            )}
        </li>
    );
}