const MyComponent=({name, value, saludar})=>{
    console.log(name);
    console.log(value);
    saludar()
    return( 
        <h1>Este es mi componente {name}</h1>
    )
};

export default MyComponent;