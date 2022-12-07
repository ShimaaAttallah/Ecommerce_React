import "./css/MyServicestyle.css";

export const MyService = ({categories}) => {
    return (
        <div>
            <div id="pic">
                {
                    categories.map(item => {
                        console.log(item);
                        return (
                            <div className="div1" key={item.id}>
                                <div className="Container">
                                    <img className="image" src={item.img} alt="categories"/>
                                    <div className="infoo">
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                        })
                    }
            </div>  
        </div>
    )
}  
