const Home = () => {

    const hacerClick = () => {
        console.log("HOLA DESDE EL CLICK")
    }




    return (
        <div>
            Soy home
            <button onClick={hacerClick}>click</button>
        </div>
    )
}

export default Home